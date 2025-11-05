import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";
import { get_user_info } from "../../../api/requests";

export default function Layout() {
	const router = useRouter();

	useEffect(() => {
		async function fetchData() {
			const result = await get_user_info();

			/* if (result.status) {
				router.navigate("/home");
			} */
		}
		fetchData();
	}, []);

	return (
		<>
			<Stack initialRouteName="login/index">
				<Stack.Screen
					name="forgot-password/index"
					options={{ title: "forgot password", headerShown: false }}
				/>
				<Stack.Screen
					name="login/index"
					options={{ title: "login", headerShown: false }}
				/>
			</Stack>
		</>
	);
}
