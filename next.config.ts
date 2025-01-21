import type { NextConfig } from "next";
import { env } from "@/env";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const nextConfig: NextConfig = {};

const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

if (env.NODE_ENV === "development") {
	(async () => await setupDevPlatform())();
}

export default nextConfig;
