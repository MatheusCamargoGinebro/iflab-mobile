import { Stack } from "expo-router";
import { View } from "react-native";

export default function Layout() {
	return (
		<View style={{ flex: 1, paddingHorizontal: 16 }}>
			<Stack initialRouteName="(main-tabs)">
				<Stack.Screen
					name="(laboratories)"
					options={{ title: "laboratories", headerShown: false }}
				/>
				<Stack.Screen
					name="(main-tabs)"
					options={{ title: "main-tabs", headerShown: false }}
				/>
			</Stack>
		</View>
	);
}
