/* Client-safe: types, defaults and helpers for site settings. */

export type Lang = "en" | "am";
export type DayWindow = { start: string; end: string }; // ISO strings with +03:00

export type SiteText = {
  navBtn: string; status: string; h1: string; sub: string;
  btnReg: string; btnSub: string; btnChannel: string; registered: string; trust: string;
  dayL: string; stUp: string; stLive: string; stDone: string;
  liveInDays: string; liveInHours: string; sched: string; cDone: string; subsWord: string; when: string;
  titles: string[]; topics: string[][];
  mDate: string; mTime: string; mStarts: string; startsFmt: string; liveNow: string; ended: string;
  whyH: string; whyP: string; st1: string; st2: string; or: string; st3: string;
  joinH: string; steps: string[][]; freeL: string; price: string;
  cdD: string; cdH: string; cdM: string; cdS: string; regNote: string;
  whoH: string; who: string[]; getH: string; grid: string[][];
  bio: string; faqH: string; faq: string[][]; finH: string; finP: string; disc: string;
  // register page
  rTitle: string; rSub: string; rGoogle: string; rName: string; rEmail: string; rPhone: string; rPhoneHint: string;
  rSubmit: string; rBadPhone: string; rBadName: string; rClosed: string; rError: string;
  rDone: string; rDoneSub: string; rSeat: string; rTg: string; rSubYt: string; rCal: string; rSignOut: string; rBack: string;
};

export type SiteSettings = {
  defaultLang: Lang;
  registrationOpen: boolean;
  days: DayWindow[];
  telegramLink: string;   // shown after registration
  subLink: string;        // Facebook page link
  ytSubs: string;
  hostName: string;
  hostRole: string;
  text: Record<Lang, SiteText>;
};

const en: SiteText = {
  navBtn: "Register free",
  status: "Free 3-day live · {dates}",
  h1: "Monetize your Facebook page in <em>30 days.</em>",
  sub: "Three nights, live online. Start from zero, follow one clear plan, and have your page ready for monetization by the time it turns 30 days old.",
  btnReg: "Register free", btnSub: "How it works", btnChannel: "", registered: "✓ You're registered",
  trust: "A free live class by <b>Ethio Computer School</b>",
  dayL: "Day", stUp: "Upcoming", stLive: "● Live", stDone: "Recording",
  liveInDays: "Live in {d}d {h}h", liveInHours: "Live in {h}h {m}m", sched: "Scheduled for {date} · {time}",
  cDone: "Recording sent to registered participants", subsWord: "Free live class · registered only", when: "Day {n} · {date} · {time}",
  titles: [
    "Day 1 — Starting your page right: how Facebook pays + choosing your niche | LIVE",
    "Day 2 — Videos that get watched: Reels, long videos & the algorithm | LIVE",
    "Day 3 — Growth, getting paid & your 30-day plan + Q&A | LIVE",
  ],
  topics: [
    ["How Facebook pays: In-stream, Reels, Stars & more", "The requirements and the 30-day math", "Opening a page or Professional Mode + picking a niche"],
    ["What the 2026 algorithm rewards", "Hook → Body → CTA, made on a phone (CapCut + Canva)", "Original content & best posting times"],
    ["6 proven ways to grow followers", "Batch recording & AI to save time", "Getting paid in Ethiopia + the 30-day plan · Live Q&A"],
  ],
  mDate: "Dates", mTime: "Time", mStarts: "Starts in", startsFmt: "{d}d {h}h {m}m", liveNow: "Live now", ended: "Ended",
  whyH: "Your page must be 30 days old. <em>Don't waste them.</em>",
  whyP: "A page has to be at least 30 days old before it can apply. The challenge: use those same 30 days to hit the numbers, so you're ready the day it qualifies. (Commonly cited targets — Meta doesn't publish fixed numbers; check your Professional Dashboard → Monetization.)",
  st1: "Followers", st2: "Minutes viewed · last 60 days", or: "+", st3: "Days · minimum page age",
  joinH: "Three steps. <em>Two minutes.</em>",
  steps: [
    ["Register with Google", "Sign in with Gmail and add your phone number.", "Register"],
    ["Get your live link", "Right after registering, you'll see where and how to join the live.", ""],
    ["Join on the night", "Be there at 8 PM — reminders and the recording come to registered participants.", ""],
  ],
  freeL: "Your seat", price: "Free", cdD: "Days", cdH: "Hrs", cdM: "Min", cdS: "Sec",
  regNote: "Sign in with Google · Takes 30 seconds · No payment",
  whoH: "This is for you <em>if you…</em>",
  who: [
    "Opened a Facebook page but can't get views or followers",
    "Want to build an income-earning page from zero — with just a phone",
    "Want to reach 5,000 followers and 60,000 minutes faster",
    "Want to post without copyright problems or losing monetization",
    "Want to know how to get paid from Facebook in Ethiopia or abroad",
  ],
  getH: "Three nights that <em>change your page.</em>",
  grid: [
    ["Live online", "Watch and ask questions in real time."],
    ["Step by step", "We do it on screen, together."],
    ["Telegram community", "Share progress with other creators."],
    ["30-day plan & recording", "A daily checklist — and catch up anytime."],
  ],
  bio: "Ethio Computer School was founded to teach Ethiopians how to earn from social media — in Amharic, with just a phone. Over three nights you'll see, live, the exact plan we use to take a page from zero to monetization.",
  faqH: "Questions, <em>answered.</em>",
  faq: [
    ["Is it really free?", "Yes. The 3-day live is completely free — just register."],
    ["Where does the live happen?", "Online. As soon as you register, you'll get the link and everything you need to join."],
    ["Why do I sign in with Google?", "So we can send you reminders and the recording. We only use your name, email and phone for this event."],
    ["Do I need a page already?", "No. We start from zero, including opening your page or switching on Professional Mode."],
    ["Can I really be ready in 30 days?", "30 days is the minimum page age and our target. We'll show you the daily math to hit the numbers — but results depend on your consistency."],
    ["Can I earn from Facebook in Ethiopia?", "We cover the payment options for creators in Ethiopia and in the diaspora. Eligibility depends on Meta's rules for your country — income is not guaranteed."],
  ],
  finH: "Day 1 starts soon. <em>Be there live.</em>",
  finP: "Register free — the live link is waiting for you on the other side.",
  disc: "Facebook is a trademark of Meta Platforms, Inc. This event is not affiliated with or endorsed by Meta. Requirements are set by Meta and may change. Results depend on individual effort; income is not guaranteed.",
  rTitle: "Reserve your <em>free seat</em>", rSub: "Sign in with your Gmail account, add your phone number, and you're in.",
  rGoogle: "Continue with Google", rName: "Full name", rEmail: "Gmail", rPhone: "Phone number", rPhoneHint: "e.g. 0911 234 567 or +1 202 555 0100",
  rSubmit: "Complete registration", rBadPhone: "Please enter a valid phone number.", rBadName: "Please enter your name.",
  rClosed: "Registration is closed.", rError: "Something went wrong. Please try again.",
  rDone: "You're in! 🎉", rDoneSub: "Your seat is reserved. The live streams on our Facebook page, Ethio Computer School — do these now so you don't miss Day 1:",
  rSeat: "Seat", rTg: "Join the Telegram group", rSubYt: "Follow the page & turn on 🔔", rCal: "Add to Google Calendar",
  rSignOut: "Sign out", rBack: "← Back to the event",
};

const am: SiteText = {
  navBtn: "በነፃ ይመዝገቡ",
  status: "ነፃ የ3 ቀን Online Live ስልጠና · {dates}",
  h1: "ፌስቡክ ፔጅዎን በ<em>30 ቀን</em> ሞኒታይዝ ያድርጉ",
  sub: "3 ምሽቶች Online Live። ከዜሮ ጀምረው፣ አንድ ግልጽ ዕቅድ ተከትለው፣ ፔጅዎ 30 ቀን ሲሞላው ለሞኒታይዜሽን ዝግጁ እንዲሆን እናደርጋለን።",
  btnReg: "በነፃ ይመዝገቡ", btnSub: "እንዴት ነው የሚሰራው?", btnChannel: "", registered: "✓ ተመዝግበዋል",
  trust: "ነፃ የ Live ስልጠና በ <b>Ethio Computer School</b>",
  dayL: "ቀን", stUp: "Upcoming", stLive: "● Live", stDone: "Recording",
  liveInDays: "Live በ{d} ቀን {h} ሰዓት", liveInHours: "Live በ{h} ሰዓት {m} ደቂቃ", sched: "{date} · {time}",
  cDone: "Recording ለተመዘገቡ ተሳታፊዎች ይላካል", subsWord: "ነፃ Live ስልጠና · ለተመዘገቡ ብቻ", when: "ቀን {n} · {date} · {time}",
  titles: [
    "ቀን 1 — ፔጅን በትክክል መጀመር፦ ፌስቡክ እንዴት ይከፍላል + ኒሽ መምረጥ | LIVE",
    "ቀን 2 — የሚታዩ ቪዲዮዎች፦ Reels፣ ረጅም ቪዲዮ እና Algorithm | LIVE",
    "ቀን 3 — እድገት፣ ክፍያ መቀበል እና የ30 ቀን ዕቅድ + Q&A | LIVE",
  ],
  topics: [
    ["ፌስቡክ እንዴት ይከፍላል፦ In-stream፣ Reels፣ Stars እና ሌሎች", "መስፈርቶቹ እና የ30 ቀን ሂሳብ", "ፔጅ ወይም Professional Mode መክፈት + ኒሽ መምረጥ"],
    ["የ2026 ፌስቡክ Algorithm ምን ይወዳል", "Hook → Body → CTA በስልክ ብቻ (CapCut + Canva)", "ኦሪጅናል ይዘት እና የፖስት ሰዓት"],
    ["ተከታይ የሚያመጡ 6 የተፈተኑ ዘዴዎች", "Batch Recording እና AI ጊዜ ለመቆጠብ", "በኢትዮጵያ ክፍያ መቀበል + የ30 ቀን ዕቅድ · Live Q&A"],
  ],
  mDate: "ቀናት", mTime: "ሰዓት", mStarts: "ለመጀመር", startsFmt: "{d} ቀን {h} ሰዓት", liveNow: "አሁን Live", ended: "ተጠናቋል",
  whyH: "ፔጁ 30 ቀን መሙላት አለበት። <em>ቀኖቹን አያባክኗቸው።</em>",
  whyP: "ፔጅ ለማመልከት ቢያንስ 30 ቀን መቆየት አለበት። ቻሌንጁ፦ በእነዚያው 30 ቀናት ቁጥሮቹን መሙላት — ፔጁ ብቁ በሆነበት ቀን ዝግጁ እንዲሆኑ። (ብዙ ጊዜ የሚጠቀሱ ኢላማዎች ናቸው፤ Meta ቋሚ ቁጥር አያወጣም — Professional Dashboard → Monetization ላይ ይመልከቱ።)",
  st1: "Followers", st2: "የእይታ ደቂቃ · ባለፉት 60 ቀናት", or: "+", st3: "ቀን · ዝቅተኛው የፔጅ ዕድሜ",
  joinH: "3 ደረጃዎች። <em>2 ደቂቃ።</em>",
  steps: [
    ["በ Google ይመዝገቡ", "በ Gmail ገብተው ስልክ ቁጥርዎን ያስገቡ።", "ይመዝገቡ"],
    ["የ Live ሊንክዎን ያግኙ", "እንደተመዘገቡ Live ስልጠናውን የት እና እንዴት እንደሚቀላቀሉ ያያሉ።", ""],
    ["በዕለቱ ይገኙ", "ምሽት 2 ሰዓት ይገኙ — Reminder እና Recording ለተመዘገቡ ይደርሳል።", ""],
  ],
  freeL: "የእርስዎ ቦታ", price: "ነፃ", cdD: "ቀን", cdH: "ሰዓት", cdM: "ደቂቃ", cdS: "ሰከንድ",
  regNote: "በ Google ይግቡ · 30 ሰከንድ ብቻ · ክፍያ የለም",
  whoH: "ይህ ለእርስዎ ነው፣ <em>እርስዎ…</em>",
  who: [
    "ፌስቡክ ፔጅ ከፍተው Views እና Followers ማግኘት ያቃተዎት ከሆነ",
    "በስልክ ብቻ ከዜሮ ጀምረው ገቢ የሚያስገኝ ፔጅ መገንባት ከፈለጉ",
    "5,000 Followers እና 60,000 ደቂቃ በፍጥነት ማሟላት ከፈለጉ",
    "ያለ Copyright ችግር እና ሞኒታይዜሽን ሳይቋረጥ መስራት ከፈለጉ",
    "ከኢትዮጵያም ሆነ ከውጭ የፌስቡክ ክፍያ እንዴት እንደሚቀበሉ ማወቅ ከፈለጉ",
  ],
  getH: "ፔጅዎን የሚቀይሩ <em>3 ምሽቶች</em>",
  grid: [
    ["Online Live", "በቀጥታ ይመልከቱ፣ ጥያቄ ይጠይቁ።"],
    ["Step by Step", "በስክሪን አብረን እንሰራለን።"],
    ["Telegram Community", "ከሌሎች Creators ጋር ይማሩ።"],
    ["የ30 ቀን ዕቅድ እና Recording", "የዕለት Checklist — ያመለጠዎትን በፈለጉት ጊዜ።"],
  ],
  bio: "Ethio Computer School የተመሰረተው ኢትዮጵያውያን በአማርኛ፣ በስልክ ብቻ ከሶሻል ሚዲያ ገቢ እንዲያገኙ ለማስተማር ነው። በ3 ምሽቶች ፔጅን ከዜሮ ወደ ሞኒታይዜሽን የምናደርስበትን ዕቅድ በ Live ያያሉ።",
  faqH: "ተደጋጋሚ <em>ጥያቄዎች</em>",
  faq: [
    ["በእውነት ነፃ ነው?", "አዎ። የ3 ቀኑ Live ሙሉ በሙሉ ነፃ ነው — መመዝገብ ብቻ ነው የሚጠበቅብዎ።"],
    ["Live ስልጠናው የት ነው የሚካሄደው?", "Online ነው። እንደተመዘገቡ ሊንኩን እና ለመቀላቀል የሚያስፈልግዎትን ሁሉ ያገኛሉ።"],
    ["ለምን በ Google እገባለሁ?", "Reminder እና Recording ልንልክልዎ ነው። ስምዎን፣ ኢሜይልዎን እና ስልክዎን ለዚህ ኢቨንት ብቻ እንጠቀማለን።"],
    ["ፔጅ ሊኖረኝ ይገባል?", "አያስፈልግም። ፔጅ መክፈትን ወይም Professional Mode ማብራትን ጨምሮ ከዜሮ እንጀምራለን።"],
    ["በእውነት በ30 ቀን ዝግጁ መሆን ይቻላል?", "30 ቀን ዝቅተኛው የፔጅ ዕድሜ እና ኢላማችን ነው። ቁጥሮቹን ለመሙላት የዕለት ሂሳቡን እናሳያለን — ውጤቱ ግን በእርስዎ ቋሚነት ይወሰናል።"],
    ["ከኢትዮጵያ የፌስቡክ ገቢ ማግኘት እችላለሁ?", "በኢትዮጵያ እና በዲያስፖራ ላሉ Creators ያሉትን የክፍያ አማራጮች እናሳያለን። ብቁነት በ Meta የሀገር ህጎች ይወሰናል — ገቢ ዋስትና የለውም።"],
  ],
  finH: "ቀን 1 በቅርቡ ይጀምራል። <em>Live ይገኙ።</em>",
  finP: "በነፃ ይመዝገቡ — የ Live ሊንኩ ከምዝገባው በኋላ ይጠብቅዎታል።",
  disc: "Facebook የ Meta Platforms, Inc. የንግድ ምልክት ነው። ይህ ኢቨንት ከ Meta ጋር ግንኙነት የለውም። መስፈርቶቹ በ Meta የሚወሰኑ ሲሆን ሊቀየሩ ይችላሉ። ውጤቶች በእያንዳንዱ ሰው ጥረት ይወሰናሉ፤ ገቢ ዋስትና የለውም።",
  rTitle: "<em>ነፃ ቦታዎን</em> ያስይዙ", rSub: "በ Gmail አካውንትዎ ይግቡ፣ ስልክ ቁጥርዎን ያስገቡ — ተመዝግበዋል።",
  rGoogle: "በ Google ይቀጥሉ", rName: "ሙሉ ስም", rEmail: "Gmail", rPhone: "ስልክ ቁጥር", rPhoneHint: "ለምሳሌ 0911 234 567 ወይም +1 202 555 0100",
  rSubmit: "ምዝገባውን ያጠናቅቁ", rBadPhone: "እባክዎ ትክክለኛ ስልክ ቁጥር ያስገቡ።", rBadName: "እባክዎ ስምዎን ያስገቡ።",
  rClosed: "ምዝገባው ተዘግቷል።", rError: "ችግር ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።",
  rDone: "ተመዝግበዋል! 🎉", rDoneSub: "ቦታዎ ተይዟል። Live ስልጠናው የሚተላለፈው በ Facebook ፔጃችን Ethio Computer School ላይ ነው — ቀን 1 እንዳያመልጥዎ አሁኑኑ እነዚህን ያድርጉ፦",
  rSeat: "ቦታ ቁጥር", rTg: "የ Telegram ግሩፑን ይቀላቀሉ", rSubYt: "ፔጁን Follow ያድርጉ እና 🔔 ያብሩ", rCal: "Google Calendar ላይ ያስቀምጡ",
  rSignOut: "ውጣ", rBack: "← ወደ ኢቨንቱ ገጽ",
};

export const DEFAULT_SETTINGS: SiteSettings = {
  defaultLang: "en",
  registrationOpen: true,
  days: [
    // ታህሳስ 9–11, 2019 E.C. = Dec 18–20, 2026
    { start: "2026-12-18T20:00:00+03:00", end: "2026-12-18T22:30:00+03:00" },
    { start: "2026-12-19T20:00:00+03:00", end: "2026-12-19T22:30:00+03:00" },
    { start: "2026-12-20T20:00:00+03:00", end: "2026-12-20T22:30:00+03:00" },
  ],
  telegramLink: "https://t.me/ethiocomputerschool",
  subLink: "https://www.facebook.com/EthioComputerSchool",
  ytSubs: "",
  hostName: "Getabalew Tadiwos",
  hostRole: "Founder · Ethio Computer School",
  text: { en, am },
};

/** Deep-merge stored settings over defaults so new keys always exist. */
export function mergeSettings<T>(base: T, over: unknown): T {
  if (over === undefined || over === null) return base;
  if (Array.isArray(base)) return (Array.isArray(over) ? over : base) as T;
  if (typeof base === "object" && base !== null) {
    if (typeof over !== "object" || Array.isArray(over)) return base;
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
      out[k] = k in out ? mergeSettings(out[k], v) : v;
    }
    return out as T;
  }
  return (typeof over === typeof base ? over : base) as T;
}

/** Replaces {tokens} in a template. */
export function fill(tpl: string, vars: Record<string, string | number>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, k) => (k in vars ? String(vars[k]) : `{${k}}`));
}

/* ---------- time helpers (Ethiopia is UTC+3 all year) ---------- */
const EAT = "Africa/Addis_Ababa";

const ET_MONTHS = ["መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];

/** Gregorian date (in EAT) → Ethiopian calendar [year, month 1–13, day]. */
export function toEthiopian(iso: string): [number, number, number] {
  const d = new Date(new Date(iso).getTime() + 3 * 3600e3); // EAT, read as UTC
  const y = d.getUTCFullYear(), m = d.getUTCMonth() + 1, day = d.getUTCDate();
  const a = Math.floor((14 - m) / 12), Y = y + 4800 - a, M = m + 12 * a - 3;
  const jdn = day + Math.floor((153 * M + 2) / 5) + 365 * Y + Math.floor(Y / 4) - Math.floor(Y / 100) + Math.floor(Y / 400) - 32045;
  const r = (jdn - 1723856) % 1461, n = (r % 365) + 365 * Math.floor(r / 1460);
  return [4 * Math.floor((jdn - 1723856) / 1461) + Math.floor(r / 365) - Math.floor(r / 1460), Math.floor(n / 30) + 1, (n % 30) + 1];
}

/** Ethiopian "ህዳር 11" — same as the thumbnail. */
export function ethLabel(iso: string): string {
  const [, m, d] = toEthiopian(iso);
  return `${ET_MONTHS[m - 1]} ${d}`;
}

/** Gregorian "Nov 20". */
export function gregLabel(iso: string): string {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: EAT }).format(new Date(iso));
}

/** Day label shown on the site: Ethiopian calendar in both languages (matches the thumbnail). */
export function dayLabel(iso: string, _lang: Lang = "en"): string {
  return ethLabel(iso);
}

function range(days: DayWindow[], label: (iso: string) => string): string {
  const a = label(days[0].start), b = label(days[days.length - 1].start);
  const [ma, da] = a.split(" "), [mb, db] = b.split(" ");
  return a === b ? a : ma === mb ? `${ma} ${da}–${db}` : `${a} – ${b}`;
}

/** "ህዳር 11–13" (am) or "ህዳር 11–13 (Nov 20–22)" (en). */
export function dateRange(days: DayWindow[], lang: Lang = "en"): string {
  if (!days.length) return "";
  const eth = range(days, ethLabel);
  return lang === "am" ? eth : `${eth} (${range(days, gregLabel)})`;
}

/** "8:00 PM EAT" (en) or Ethiopian clock "ምሽት 2:00" (am). */
export function timeLabel(iso: string, lang: Lang): string {
  const d = new Date(new Date(iso).getTime() + 3 * 3600e3); // shift to EAT, read as UTC
  const h = d.getUTCHours(), m = String(d.getUTCMinutes()).padStart(2, "0");
  if (lang === "en") return `${h % 12 || 12}:${m} ${h < 12 ? "AM" : "PM"} EAT`;
  const eh = ((h + 6) % 12) || 12;
  const period = h >= 6 && h < 12 ? "ጠዋት" : h >= 12 && h < 18 ? "ከሰዓት" : h >= 18 ? "ምሽት" : "ሌሊት";
  return `${period} ${eh}:${m}`;
}

/** ISO (+03:00) → value for <input type="datetime-local"> in EAT. */
export function isoToLocalInput(iso: string): string {
  const d = new Date(new Date(iso).getTime() + 3 * 3600e3);
  return d.toISOString().slice(0, 16);
}
export function localInputToIso(v: string): string {
  return `${v.length === 16 ? v + ":00" : v}+03:00`;
}

/** Google Calendar "add event" link. */
export function calendarLink(title: string, details: string, w: DayWindow): string {
  const f = (iso: string) => new Date(iso).toISOString().replace(/[-:]|\.\d{3}/g, "");
  const p = new URLSearchParams({ action: "TEMPLATE", text: title, dates: `${f(w.start)}/${f(w.end)}`, details, location: "Facebook — Ethio Computer School" });
  return `https://calendar.google.com/calendar/render?${p.toString()}`;
}

/** Remove where-the-live-happens details for visitors who haven't registered yet. */
export function hideVenue(s: SiteSettings): SiteSettings {
  const strip = (t: SiteText): SiteText => ({ ...t, rDoneSub: "", rSubYt: "", rTg: "" });
  return { ...s, subLink: "", telegramLink: "", text: { en: strip(s.text.en), am: strip(s.text.am) } };
}
