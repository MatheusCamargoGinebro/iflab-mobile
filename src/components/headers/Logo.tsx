import { View, Text } from "react-native";

export function Logo() {
	return (
		<View className="flex-row">
			<View className="bg-iflab-green-50 px-2 rounded-md">
				<Text className=" text-7xl text-white">IF</Text>
			</View>
			<Text className=" text-7xl">Lab</Text>
		</View>
	);
}
