import type { Metadata } from "next";
import RegisterFlow from "@/components/register-flow";
import { getMyRegistration } from "@/lib/reg-cookie";
import { getSettings } from "@/lib/settings";
import { hideVenue } from "@/lib/settings-shared";
import { getCurrentUser } from "@/lib/session";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Register — Facebook Monetization Live" };

export default async function RegisterPage() {
  const [s, user] = await Promise.all([getSettings(), getCurrentUser()]);
  const reg = await getMyRegistration(user);
  return (
    <RegisterFlow
      s={reg ? s : hideVenue(s)}
      user={user ? { name: user.name, email: user.email, image: user.image } : null}
      reg={reg ? { seat: reg.seat, name: reg.name, email: reg.email, phone: reg.phone } : null}
    />
  );
}
