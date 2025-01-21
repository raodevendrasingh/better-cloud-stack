import { AppType } from "@/app/api/[...route]/route";
import { env } from "@/env";
import { hc } from "hono/client";

export const client = hc<AppType>(env.NEXT_PUBLIC_BASE_URL!);
