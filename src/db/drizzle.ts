import { drizzle } from "drizzle-orm/d1";
import { getRequestContext } from "@cloudflare/next-on-pages";

export interface Env {
	DB: D1Database;
}

export default {
	async fetch(request: Request, env: Env) {
		const db = drizzle(env.DB);
		return db;
	},
};
