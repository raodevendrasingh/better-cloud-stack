"use client";

import { authClient } from "@/lib/auth-client";

export default function HomePage() {
	const { data: session, isPending, error } = authClient.useSession();

	const handleSignOut = async () => {
		await authClient.signOut();
	};

	if (isPending) {
		return (
			<div className="flex h-screen items-center justify-center">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex h-screen items-center justify-center">
				<div className="text-red-500">Error: {error.message}</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			{session ? (
				<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
					<div className="p-8">
						<h2 className="text-2xl font-bold mb-6 text-gray-800">
							Profile
						</h2>
						<div className="space-y-4">
							<ProfileField
								label="Name"
								value={session.user.name}
							/>
							<ProfileField
								label="Email"
								value={session.user.email}
							/>
							{session.user.image && (
								<ProfileField
									label="Image"
									value={session.user.image}
								/>
							)}
							<ProfileField
								label="Created At"
								value={new Date(
									session.user.createdAt
								).toLocaleDateString()}
							/>
							<ProfileField
								label="Updated At"
								value={new Date(
									session.user.updatedAt
								).toLocaleDateString()}
							/>
							<ProfileField
								label="Email Verified"
								value={
									session.user.emailVerified ? "Yes" : "No"
								}
							/>
						</div>
						<button
							onClick={handleSignOut}
							className="mt-8 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
						>
							Sign Out
						</button>
					</div>
				</div>
			) : (
				<div className="text-center text-gray-600 text-lg">
					Not signed in
				</div>
			)}
		</div>
	);
}

function ProfileField({
	label,
	value,
}: {
	label: string;
	value: string | null;
}) {
	return (
		<div className="flex flex-col">
			<span className="text-sm font-medium text-gray-500">{label}</span>
			<span className="mt-1 text-gray-900">
				{value || "Not provided"}
			</span>
		</div>
	);
}
