import "server-only";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import type { CurrentUser } from "@/lib/session";

/** Visitors who register with the form (no Google sign-in) are remembered by this cookie. */
export const REG_COOKIE = "ecs-reg";

/** The current visitor's registration: by Google account first, else by the form cookie. */
export async function getMyRegistration(user: CurrentUser | null) {
  if (user) {
    const r = await db.registration.findUnique({ where: { userId: user.id } });
    if (r) return r;
  }
  const id = (await cookies()).get(REG_COOKIE)?.value;
  return id ? db.registration.findUnique({ where: { id } }) : null;
}
