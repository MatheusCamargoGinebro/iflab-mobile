import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="(main-tabs)">
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
