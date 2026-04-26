// @ts-check
import { defineConfig } from "astro/config";

// @ts-ignore - process.env is available in Node during build.
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
// @ts-ignore - process.env is available in Node during build.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const isUserOrOrgPages = repository?.endsWith(".github.io");
const base =
  isGithubActions && repository && !isUserOrOrgPages
    ? `/${repository}/`
    : "/";

// https://astro.build/config
export default defineConfig({
  base,
});
