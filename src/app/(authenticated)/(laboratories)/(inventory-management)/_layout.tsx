import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="(elements)"
				options={{ title: "elements", headerShown: false }}
			/>
			<Stack.Screen
				name="(equipments)"
				options={{ title: "equipments", headerShown: false }}
			/>
		</Stack>
	);
}
