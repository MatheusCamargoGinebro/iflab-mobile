import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="login/index">
			<Stack.Screen
				name="forgot-password/index"
				options={{ title: "forgot password", headerShown: false }}
			/>
			<Stack.Screen
				name="login/index"
				options={{ title: "login", headerShown: false }}
			/>
		</Stack>
	);
}
