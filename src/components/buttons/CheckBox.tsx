import { Pressable, Text, Image, View } from "react-native";
import { useState } from "react";

const checked = require("../../../assets/UI/check-2.png");

interface Props {
	text: string;
	state: boolean;
	action: () => void;
	disabled?: boolean;
}

export function CheckBox({ text, state, action, disabled = false }: Props) {
	const [pressed, setPressed] = useState(false);

	return (
		<Pressable
			onPress={action}
			disabled={disabled}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
			className={`flex-row items-center justify-center gap-2 w-fit ${
				disabled ? "opacity-80" : ""
			}`}
		>
			<View className="flex items-center justify-center">
				{state ? (
					<Image
						source={checked}
						className={`w-5 h-5 rounded-sm ${
							disabled
								? "bg-iflab-gray-300"
								: pressed
									? "bg-iflab-green-200"
									: "bg-iflab-green-100"
						}`}
					/>
				) : (
					<View
						className={`w-5 h-5 rounded-sm border-2 ${
							disabled
								? "border-iflab-gray-300"
								: pressed
									? "border-iflab-green-200"
									: "border-iflab-gray-600"
						}`}
					/>
				)}
			</View>
			<Text
				className={`text-base ${
					disabled
						? "text-iflab-gray-400"
						: pressed
							? "text-iflab-green-200"
							: "text-gray-700"
				}`}
			>
				{text}
			</Text>
		</Pressable>
	);
}
