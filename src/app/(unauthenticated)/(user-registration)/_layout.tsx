import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="insert-user-info/index">
			<Stack.Screen
				name="insert-campus/index"
				options={{ title: "insert campus", headerShown: false }}
			/>
			<Stack.Screen
				name="insert-user-info/index"
				options={{ title: "insert user info", headerShown: false }}
			/>
			<Stack.Screen
				name="register-campus/index"
				options={{ title: "register campus", headerShown: false }}
			/>
		</Stack>
	);
}
