"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";

export default function SignUp() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");

	const handleSignUp = async () => {
		const { data, error } = await authClient.signUp.email(
			{
				email,
				password,
				name,
			},
			{
				onRequest: (ctx) => {
					console.log("Sign up request initiated");
				},
				onSuccess: (ctx) => {
					console.log("Sign up successful, go to sign in page");
					alert("Sign up successful, go to sign in page");
				},
				onError: (ctx) => {
					setMessage(ctx.error.message);
					console.log(ctx);
				},
			}
		);
	};

	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<div className="flex flex-col gap-3 p-5 rounded-xl bg-gray-100 max-w-sm w-full">
				<h1 className="text-center font-bold text-3xl">Sign Up</h1>
				<div className="flex flex-col gap-1">
					<label htmlFor="name">Name:</label>
					<input
						type="name"
						name="name"
						value={name}
						className="rounded-md p-1"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
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
					onClick={handleSignUp}
					className="w-full bg-gray-800 text-white p-2 rounded-md"
				>
					Sign Up
				</button>
			</div>
			<div className="text-center text-gray-600 text-lg">{message}</div>
		</div>
	);
}
