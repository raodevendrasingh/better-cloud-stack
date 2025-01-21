import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

if (process.env.NODE_ENV === "development") {
	(async () => await setupDevPlatform())();
}

import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
