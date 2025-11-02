import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}}>
			<Stack.Screen
				name="(reservations)"
				options={{ title: "reservations", headerShown: false }}
			/>
			<Stack.Screen
				name="(inventory-management)"
				options={{ title: "inventory management", headerShown: false }}
			/>
			<Stack.Screen
				name="lab-calendar/index"
				options={{ title: "lab calendar", headerShown: false }}
			/>
		</Stack>
	);
}
