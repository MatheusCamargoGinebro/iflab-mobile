import "../styles/global.css";

import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name="HomeScreen/index"
				options={{ title: "Home", headerShown: false }}
			/>
		</Stack>
	);
}
