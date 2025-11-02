import { Pressable, Text } from "react-native";
import { useState } from "react";

interface Props {
	text: string;
	disabled?: boolean;
	action: () => void;
}

export function SecundaryButton({ text, action, disabled = false }: Props) {
	const [pressed, setPressed] = useState(false);

	return (
		<Pressable
			className={`px-10 py-4 w-fit h-fit text-center items-center`}
			onPress={action}
			disabled={disabled}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
		>
			<Text
				className={` text-xl ${disabled ? " text-iflab-gray-400" : pressed ? "text-iflab-green-200" : "text-iflab-green-100"}`}
			>
				{text}
			</Text>
		</Pressable>
	);
}
