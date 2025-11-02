import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="sessions-list/index">
			<Stack.Screen
				name="session-list/index"
				options={{ title: "session list", headerShown: false }}
			/>
			<Stack.Screen
				name="session-details/index"
				options={{ title: "session details", headerShown: false }}
			/>
			<Stack.Screen
				name="utilization-form/index"
				options={{ title: "utilization form", headerShown: false }}
			/>
		</Stack>
	);
}
