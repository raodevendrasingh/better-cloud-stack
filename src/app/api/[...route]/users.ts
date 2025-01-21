import { getDrizzleDb } from "@/db/drizzle";
import { user } from "@/db/schema";
import { Hono } from "hono";

const app = new Hono();

app.get("/", async (c) => {
	const db = getDrizzleDb();

	const users = await db.select().from(user);
	console.log(users);

	return c.json({
		users,
	});
});

export default app;
