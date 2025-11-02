import { Pressable, Text, ImageSourcePropType, Image } from "react-native";
import { useState } from "react";

interface Props {
	text: string;
	disabled?: boolean;
	destructive?: boolean;
	icon?: ImageSourcePropType;
	action: () => void;
}

export function PrimaryButton({
	text,
	icon,
	disabled = false,
	destructive = false,
	action,
}: Props) {
	const [pressed, setPressed] = useState(false);

	return (
		<Pressable
			className={`flex-row items-center justify-center gap-2 rounded-xl px-10 py-4 w-fit h-fit text-center ${destructive ? (disabled ? "bg-iflab-gray-100" : pressed ? "bg-iflab-red-200" : "bg-iflab-red-400") : disabled ? "bg-iflab-gray-100" : pressed ? "bg-iflab-green-200" : "bg-iflab-green-50"}`}
			onPress={action}
			disabled={disabled}
			onPressIn={() => setPressed(true)}
			onPressOut={() => setPressed(false)}
		>
			{icon && (
				<Image
					source={icon}
					className="w-7 h-7"
					style={{ tintColor: "white" }}
				/>
			)}

			<Text
				className={` text-xl ${icon && "mr-2"} ${disabled ? " text-iflab-gray-400" : "text-white"}`}
			>
				{text}
			</Text>
		</Pressable>
	);
}
