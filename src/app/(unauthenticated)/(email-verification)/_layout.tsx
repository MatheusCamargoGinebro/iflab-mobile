import { Stack } from "expo-router";

export default function Layout() {
	return (
		<Stack screenOptions={{}} initialRouteName="send-mail/index">
			<Stack.Screen
				name="send-mail/index"
				options={{ title: "send mail", headerShown: false }}
			/>
			<Stack.Screen
				name="verify-code/index"
				options={{ title: "verify code", headerShown: false }}
			/>
		</Stack>
	);
}
