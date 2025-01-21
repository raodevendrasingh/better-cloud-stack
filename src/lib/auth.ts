import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDrizzleDb } from "@/db/drizzle";
import { user, session, account, verification } from "@/db/schema";

export const auth = betterAuth({
	database: drizzleAdapter(getDrizzleDb(), {
		provider: "sqlite",
		schema: {
			user,
			session,
			account,
			verification,
		},
	}),
	emailAndPassword: {
		enabled: true,
	},
});
