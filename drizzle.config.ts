import { env } from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	dialect: "sqlite",
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	driver: "d1-http",
	dbCredentials: {
		accountId: env.CLOUDFLARE_ACCOUNT_ID!,
		databaseId: env.CLOUDFLARE_DATABASE_ID!,
		token: env.CLOUDFLARE_API_TOKEN!,
	},
});
