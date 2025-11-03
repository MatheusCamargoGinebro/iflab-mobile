import { Stack } from "expo-router";
import { Logo } from "../../components/headers";
import { View, Keyboard } from "react-native";
import { useEffect, useState } from "react";

export default function Layout() {
	const [isKeyboardVisible, setKeyboardVisible] = useState(false);

	useEffect(() => {
		const showLogo = Keyboard.addListener("keyboardDidShow", () =>
			setKeyboardVisible(true)
		);

		const hideLogo = Keyboard.addListener("keyboardDidHide", () =>
			setKeyboardVisible(false)
		);

		return () => {
			showLogo.remove();
			hideLogo.remove();
		};
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<View
				className={`flex w-full items-center ${
					isKeyboardVisible
						? "h-[15%] justify-end mb-20"
						: "h-[30%] justify-center"
				}`}
			>
				<Logo />
			</View>

			<View style={{ flex: 1, paddingHorizontal: 16 }}>
				<Stack initialRouteName="(authentication)">
					<Stack.Screen
						name="(authentication)"
						options={{ title: "authentication", headerShown: false }}
					/>
					<Stack.Screen
						name="(email-verification)"
						options={{ title: "main-tabs", headerShown: false }}
					/>
					<Stack.Screen
						name="(user-registration)"
						options={{ title: "main-tabs", headerShown: false }}
					/>
				</Stack>
			</View>
		</View>
	);
}
