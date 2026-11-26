"use server";
import { cookies, headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { normalizePhone } from "@/lib/phone";
import { REG_COOKIE } from "@/lib/reg-cookie";
import { getSettings } from "@/lib/settings";

export type RegState = { ok?: boolean; error?: "auth" | "closed" | "phone" | "name" | "email" | "server" };

const readName = (form: FormData) => String(form.get("name") ?? "").trim().slice(0, 100);
const readSource = (form: FormData) => String(form.get("source") ?? "").trim().slice(0, 120) || null;

/** Google-signed-in visitor: adds name + phone to their account. */
export async function registerAction(_prev: RegState, form: FormData): Promise<RegState> {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) return { error: "auth" };

  const settings = await getSettings();
  const existing = await db.registration.findUnique({ where: { userId: session.user.id } });
  if (!settings.registrationOpen && !existing) return { error: "closed" };

  const name = readName(form);
  if (name.length < 2) return { error: "name" };
  const phone = normalizePhone(String(form.get("phone") ?? ""));
  if (!phone) return { error: "phone" };
  const source = readSource(form);

  try {
    await db.$transaction([
      db.registration.upsert({
        where: { userId: session.user.id },
        create: { userId: session.user.id, name, email: session.user.email, phone, source },
        update: { name, phone },
      }),
      db.user.update({ where: { id: session.user.id }, data: { name, phone } }),
    ]);
  } catch (e) {
    console.error("registerAction", e);
    return { error: "server" };
  }
  revalidatePath("/register");
  revalidatePath("/");
  return { ok: true };
}

/** Form registration without Google: name + email + phone, remembered by a cookie. */
export async function formRegisterAction(_prev: RegState, form: FormData): Promise<RegState> {
  const settings = await getSettings();
  if (!settings.registrationOpen) return { error: "closed" };

  const name = readName(form);
  if (name.length < 2) return { error: "name" };
  const email = z.email().safeParse(String(form.get("email") ?? "").trim().toLowerCase().slice(0, 200));
  if (!email.success) return { error: "email" };
  const phone = normalizePhone(String(form.get("phone") ?? ""));
  if (!phone) return { error: "phone" };
  const source = readSource(form);

  try {
    // Same email + same phone = the same person registering again: reuse their seat.
    // (A matching email alone is not enough, so nobody can open someone else's seat by typing their email.)
    const same = await db.registration.findFirst({ where: { email: email.data, phone }, orderBy: { createdAt: "asc" } });
    const reg = same ?? (await db.registration.create({ data: { name, email: email.data, phone, source: source ?? "form" } }));
    (await cookies()).set(REG_COOKIE, reg.id, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", path: "/", maxAge: 60 * 60 * 24 * 90 });
  } catch (e) {
    console.error("formRegisterAction", e);
    return { error: "server" };
  }
  revalidatePath("/register");
  revalidatePath("/");
  return { ok: true };
}
