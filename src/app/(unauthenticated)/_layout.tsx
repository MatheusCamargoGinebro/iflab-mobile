import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="(authentication)">
			<Stack.Screen
				name="(authentication)"
				options={{ title: "authentication", headerShown: false }}
			/>
			<Stack.Screen
				name="(email-verification)"
				options={{ title: "main-tabs", headerShown: false }}
			/>
			<Stack.Screen
				name="(user-registration)"
				options={{ title: "main-tabs", headerShown: false }}
			/>
		</Stack>
	);
}
