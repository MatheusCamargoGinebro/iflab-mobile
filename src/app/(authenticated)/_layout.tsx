import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { get_user_info } from "../../api/requests";

export default function Layout() {
	const router = useRouter();

	useEffect(() => {
		async function fetchData() {
			const result = await get_user_info();

			if (!result.status) {
				router.navigate("/login");
			}
		}
		fetchData();
	}, []);

	return (
		<Stack initialRouteName="(main-tabs)">
			<Stack.Screen
				name="(laboratories)"
				options={{ title: "laboratories", headerShown: false }}
			/>
			<Stack.Screen
				name="(main-tabs)"
				options={{ title: "main-tabs", headerShown: false }}
			/>
		</Stack>
	);
}
