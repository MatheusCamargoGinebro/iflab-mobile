import { Pressable, Text } from "react-native";
import { useState } from "react";

interface Props {
	text: string;
	className?: string;
	disabled?: boolean;
	action: () => void;
}

export function SecundaryButton({
	text,
	className,
	action,
	disabled = false,
}: Props) {
	const [pressed, setPressed] = useState(false);

	return (
		<Pressable
			className={`py-4 w-fit h-fit text-center items-center`}
			onPress={action}
			disabled={disabled}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
		>
			<Text
				className={`${disabled ? " text-iflab-gray-400 opacity-50" : pressed ? "text-iflab-green-200" : "text-iflab-green-100"} ${className}`}
			>
				{text}
			</Text>
		</Pressable>
	);
}
