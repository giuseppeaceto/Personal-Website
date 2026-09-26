/**
 * Child-years of school in a low-income country equal to world military
 * spending. SIPRI 2025 expenditure, divided by government spending per
 * child in 2022 (UNESCO and the World Bank).
 *
 * The hero states that rate once a minute, in dollars, and counts school
 * years continuously from 1 January 2025, the year the SIPRI figure describes.
 */
const MILITARY_USD = 2_887_000_000_000;
const SCHOOL_USD_PER_CHILD = 55;
const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;

/** Keep the hero copy ("ogni minuto" / "every minute") in step with this. */
export const SCHOOL_CLOCK_TICK_MS = 60_000;
export const SCHOOL_CLOCK_EPOCH_MS = Date.UTC(2025, 0, 1);

const SIPRI_URL =
  "https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-world-military-expenditure-2025";
const SCHOOL_URL = "https://www.unesco.org/en/education-financing/need-know";

export type SchoolYearsClock = {
  /** Child-years of schooling per second of military spending. */
  perSecond: number;
  epochMs: number;
  tickMs: number;
  militaryLabel: string;
  schoolLabel: string;
  referenceDate: string;
  militaryYear: number;
  schoolYear: number;
  militarySourceUrl: string;
  schoolSourceUrl: string;
};

const numberFormat = {
  it: new Intl.NumberFormat("it-IT", {
    maximumFractionDigits: 0,
    useGrouping: "always",
  }),
  en: new Intl.NumberFormat("en", {
    maximumFractionDigits: 0,
    useGrouping: "always",
  }),
} as const;

const millionsFormat = {
  it: new Intl.NumberFormat("it-IT", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }),
  en: new Intl.NumberFormat("en", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }),
} as const;

export function getSchoolYearsClock(locale: "it" | "en"): SchoolYearsClock {
  const perSecond = MILITARY_USD / SECONDS_PER_YEAR / SCHOOL_USD_PER_CHILD;
  return {
    perSecond,
    epochMs: SCHOOL_CLOCK_EPOCH_MS,
    tickMs: SCHOOL_CLOCK_TICK_MS,
    militaryLabel: formatIntervalMilitary(locale),
    schoolLabel: formatSchoolUsd(locale),
    referenceDate: formatReferenceDate(locale),
    militaryYear: 2025,
    schoolYear: 2022,
    militarySourceUrl: SIPRI_URL,
    schoolSourceUrl: SCHOOL_URL,
  };
}

export function schoolYearsSince(nowMs: number, perSecond: number): number {
  const elapsedSeconds = Math.max(0, nowMs - SCHOOL_CLOCK_EPOCH_MS) / 1000;
  return perSecond * elapsedSeconds;
}

export function formatSchoolYears(amount: number, locale: "it" | "en"): string {
  return numberFormat[locale].format(amount);
}

function formatIntervalMilitary(locale: "it" | "en"): string {
  const perMinute = (MILITARY_USD / SECONDS_PER_YEAR) * (SCHOOL_CLOCK_TICK_MS / 1000);
  const millions = millionsFormat[locale].format(perMinute / 1_000_000);
  return locale === "it" ? `${millions} milioni $` : `$${millions} million`;
}

function formatSchoolUsd(locale: "it" | "en"): string {
  const amount = numberFormat[locale].format(SCHOOL_USD_PER_CHILD);
  return locale === "it" ? `${amount} $` : `$${amount}`;
}

function formatReferenceDate(locale: "it" | "en"): string {
  const date = new Date(SCHOOL_CLOCK_EPOCH_MS);
  const month = new Intl.DateTimeFormat(locale === "it" ? "it-IT" : "en-GB", {
    month: "long",
    timeZone: "UTC",
  }).format(date);
  const year = date.getUTCFullYear();
  if (locale === "it") return `1° ${month} ${year}`;
  return `1 ${month} ${year}`;
}
