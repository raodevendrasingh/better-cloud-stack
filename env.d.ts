interface CloudflareEnv {
	DB: D1Database;
}
declare global {
	namespace NodeJS {
		interface ProcessEnv {
			DB: D1Database;
			BETTER_AUTH_URL: string;
		}
	}
}
