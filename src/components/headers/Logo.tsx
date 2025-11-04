import { View, Text } from "react-native";

export function Logo() {
	return (
		<View className="flex-row">
			<View className="bg-iflab-green-50 px-2 rounded-md">
				<Text className=" text-8xl text-white">IF</Text>
			</View>
			<Text className=" text-8xl">Lab</Text>
		</View>
	);
}
