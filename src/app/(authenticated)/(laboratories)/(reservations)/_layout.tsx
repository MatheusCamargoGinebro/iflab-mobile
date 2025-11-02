import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="date/index">
			<Stack.Screen
				name="confirm/index"
				options={{ title: "confirm", headerShown: false }}
			/>
			<Stack.Screen
				name="date/index"
				options={{ title: "date", headerShown: false }}
			/>
			<Stack.Screen
				name="elements/index"
				options={{ title: "elements", headerShown: false }}
			/>
			<Stack.Screen
				name="equipments/index"
				options={{ title: "elements", headerShown: false }}
			/>
		</Stack>
	);
}
