"use client";

import { authClient } from "@/lib/auth-client";

export default function HomePage() {
	const { data: session, isPending, error } = authClient.useSession();

	const handleSignOut = async () => {
		await authClient.signOut();
	};
	return (
		<div>
			{session ? (
				<div className="flex flex-col gap-3">
					Signed in as {session.user.name}
					<button onClick={handleSignOut}>Sign out</button>
				</div>
			) : (
				"Not signed in"
			)}
		</div>
	);
}
