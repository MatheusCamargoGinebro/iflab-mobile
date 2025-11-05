import { Tabs } from "expo-router";

export default function Layout() {
	return (
		<Tabs initialRouteName="home/index">
			<Tabs.Screen
				name="home/index"
				options={{ title: "home", headerShown: false }}
			/>
			<Tabs.Screen
				name="(my-sessions)"
				options={{ title: "my-sessions", headerShown: false }}
			/>
			<Tabs.Screen
				name="profile/index"
				options={{ title: "profile", headerShown: false }}
			/>
		</Tabs>
	);
}
