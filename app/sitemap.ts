import type { MetadataRoute } from "next";
import { STRESS_TYPES } from "@/constants/stressTypes";
import { BURNOUT_TYPES } from "@/constants/burnoutTypes";
import { DECISION_TYPES } from "@/constants/decisionTypes";
import { LAZY_TYPES } from "@/constants/lazyTypes";
import { LEADER_TYPES } from "@/constants/leaderTypes";
import { MBTI_TYPES } from "@/constants/mbti";

const baseUrl = "https://mbti-three-bay.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const testPages = [
    "/ideal-type",
    "/stress-type",
    "/burnout-type",
    "/decision-type",
    "/lazy-type",
    "/leader-type",
  ];

  const resultPages = [
    ...STRESS_TYPES.map((t) => `/stress-type/${t.id}`),
    ...BURNOUT_TYPES.map((t) => `/burnout-type/${t.id}`),
    ...DECISION_TYPES.map((t) => `/decision-type/${t.id}`),
    ...LAZY_TYPES.map((t) => `/lazy-type/${t.id}`),
    ...LEADER_TYPES.map((t) => `/leader-type/${t.id}`),
    ...MBTI_TYPES.map((t) => `/ideal-type/${t.id}`),
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...testPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...resultPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];
}
