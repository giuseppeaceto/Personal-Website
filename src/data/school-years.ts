/**
 * Child-years of school in a low-income country equal to world military
 * spending. SIPRI 2025 expenditure, divided by government spending per
 * child in 2022 (UNESCO and the World Bank). The page turns that annual
 * rate into a clock.
 */
const MILITARY_USD = 2_887_000_000_000;
const SCHOOL_USD_PER_CHILD = 55;
const SECONDS_PER_YEAR = 365.25 * 24 * 60 * 60;

const SIPRI_URL =
  "https://www.sipri.org/publications/2026/sipri-fact-sheets/trends-world-military-expenditure-2025";
const SCHOOL_URL = "https://www.unesco.org/en/education-financing/need-know";

export type SchoolYearsClock = {
  /** Child-years of schooling per second of military spending. */
  perSecond: number;
  militaryYear: number;
  schoolUsd: number;
  schoolYear: number;
  militarySourceUrl: string;
  schoolSourceUrl: string;
};

export function getSchoolYearsClock(): SchoolYearsClock {
  return {
    perSecond: MILITARY_USD / SECONDS_PER_YEAR / SCHOOL_USD_PER_CHILD,
    militaryYear: 2025,
    schoolUsd: SCHOOL_USD_PER_CHILD,
    schoolYear: 2022,
    militarySourceUrl: SIPRI_URL,
    schoolSourceUrl: SCHOOL_URL,
  };
}

const schoolYearFormat = {
  it: new Intl.NumberFormat("it-IT", {
    maximumFractionDigits: 0,
    useGrouping: "always",
  }),
  en: new Intl.NumberFormat("en", {
    maximumFractionDigits: 0,
    useGrouping: "always",
  }),
} as const;

export function formatSchoolYears(amount: number, locale: "it" | "en"): string {
  return schoolYearFormat[locale].format(amount);
}
