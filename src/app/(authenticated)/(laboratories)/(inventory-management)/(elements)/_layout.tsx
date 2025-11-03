import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="element-info/index"
				options={{ title: "element info", headerShown: false }}
			/>
			<Stack.Screen
				name="elements-list/index"
				options={{ title: "elements list", headerShown: false }}
			/>
			<Stack.Screen
				name="register-element/index"
				options={{ title: "register element", headerShown: false }}
			/>
		</Stack>
	);
}
