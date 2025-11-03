import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack>
			<Stack.Screen
				name="equipment-info/index"
				options={{ title: "equipment info", headerShown: false }}
			/>
			<Stack.Screen
				name="equipments-list/index"
				options={{ title: "equipments list", headerShown: false }}
			/>
			<Stack.Screen
				name="register-equipment/index"
				options={{ title: "register equipment", headerShown: false }}
			/>
		</Stack>
	);
}
