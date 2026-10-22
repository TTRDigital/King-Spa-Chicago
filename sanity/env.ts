/**
 * King Spa Chicago Sanity project. The project ID is public (it is in every
 * image URL). Set NEXT_PUBLIC_SANITY_PROJECT_ID (build and studio) to connect;
 * until then the site shows its built-in content and /cms explains what to set.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-02-19";
