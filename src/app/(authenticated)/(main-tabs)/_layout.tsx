import { Tabs } from "expo-router";

export default function Layout() {
	return (
		<Tabs screenOptions={{}}>
			<Tabs.Screen
				name="(my-sessions)"
				options={{ title: "my-sessions", headerShown: false }}
			/>
			<Tabs.Screen
				name="home"
				options={{ title: "home/index", headerShown: false }}
			/>
			<Tabs.Screen
				name="profile"
				options={{ title: "profile/index", headerShown: false }}
			/>
		</Tabs>
	);
}
