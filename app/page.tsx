import Landing from "@/components/landing";
import { getMyRegistration } from "@/lib/reg-cookie";
import { getSettings } from "@/lib/settings";
import { hideVenue } from "@/lib/settings-shared";
import { getCurrentUser } from "@/lib/session";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [s, user] = await Promise.all([getSettings(), getCurrentUser()]);
  const registered = !!(await getMyRegistration(user));
  return <Landing s={registered ? s : hideVenue(s)} registered={registered} />;
}
