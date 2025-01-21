"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignInPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleSignIn = async () => {
		const { data, error } = await authClient.signIn.email(
			{
				email,
				password,
			},
			{
				onRequest: (ctx) => {
					console.log("Sign in request initiated");
				},
				onSuccess: (ctx) => {
					console.log("Sign in successful");
					setMessage("Sign in successful");
				},
				onError: (ctx) => {
					alert(ctx.error.message);
					setMessage(ctx.error.message);
					console.log(ctx);
				},
			}
		);
	};

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-100 max-w-sm w-full">
				<h1 className="text-center font-bold text-3xl">Sign In</h1>

				<div className="flex flex-col gap-1">
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						value={email}
						className="rounded-md p-1"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="flex flex-col gap-1">
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						name="password"
						value={password}
						className="rounded-md p-1"
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button
					onClick={handleSignIn}
					className="w-full bg-gray-800 text-white p-2 rounded-md"
				>
					Sign In
				</button>
			</div>
			<div className="text-center text-gray-600 text-lg">{message}</div>
		</div>
	);
}
