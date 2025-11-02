import { Pressable, Text, Image, View } from "react-native";

const checked = require("../../../assets/UI/check-2.png");

interface Props {
	text: string;
	state: boolean;
	action: () => void;
}

export function CheckBox({ text, state, action }: Props) {
	return (
		<Pressable
			onPress={action}
			className="flex-row items-center justify-center gap-2 w-fit"
		>
			<View className="flex items-center justify-center">
				{state ? (
					<Image
						source={checked}
						className="w-5 h-5 bg-iflab-green-100 rounded-sm"
					/>
				) : (
					<View className="w-5 h-5 border-2 border-iflab-gray-600 rounded-sm" />
				)}
			</View>
			<Text className="text-gray-700">{text}</Text>
		</Pressable>
	);
}
