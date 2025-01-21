import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	client: {
		NEXT_PUBLIC_BASE_URL: z.string().min(1),
	},
	server: {
		BETTER_AUTH_SECRET: z.string().min(1),
		CLOUDFLARE_ACCOUNT_ID: z.string().min(1),
		CLOUDFLARE_DATABASE_ID: z.string().min(1),
		CLOUDFLARE_API_TOKEN: z.string().min(1),
	},
	shared: {
		NODE_ENV: z.enum(["development", "production"]),
	},
	runtimeEnv: {
		NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!,
		BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET!,
		CLOUDFLARE_ACCOUNT_ID: process.env.CLOUDFLARE_ACCOUNT_ID!,
		CLOUDFLARE_DATABASE_ID: process.env.CLOUDFLARE_DATABASE_ID!,
		CLOUDFLARE_API_TOKEN: process.env.CLOUDFLARE_API_TOKEN!,
		NODE_ENV: process.env.NODE_ENV!,
	},
});
