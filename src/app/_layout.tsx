import "../styles/global.css";

import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen name="HomeScreen/index" options={{ title: "Home" }} />
			<Stack.Screen name="LoginScreen/index" options={{ title: "Login" }} />
			<Stack.Screen
				name="RegisterScreen/index"
				options={{ title: "Register" }}
			/>
			<Stack.Screen
				name="LabScreen/[labId]"
				options={{ title: "Laboratório" }}
			/>
		</Stack>
	);
}
