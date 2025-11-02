import {
	View,
	TextInput,
	Text,
	Image,
	ImageSourcePropType,
	Pressable,
} from "react-native";
import { useState } from "react";

type KeyboardType =
	| "default"
	| "email-address"
	| "numeric"
	| "phone-pad"
	| "number-pad"
	| "decimal-pad"
	| "url"
	| "ascii-capable"
	| "twitter"
	| "web-search"
	| "visible-password"
	| "name-phone-pad";

interface Props {
	value: string;
	placeholder: string;
	errorMessage: string;
	type?: KeyboardType;
	icon?: ImageSourcePropType;
	isValid: boolean;
	action: (text: string) => void;
}

export function UnderlineInput({
	value,
	placeholder,
	errorMessage,
	type = "default",
	icon,
	isValid,
	action,
}: Props) {
	const [showPassword, setShowPassword] = useState(false);
	const isPassword = type === "visible-password";

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	const renderIcon = () => {
		if (isPassword) {
			const iconSource = showPassword
				? require("../../../assets/UI/show.png")
				: require("../../../assets/UI/hide.png");

			return (
				<Pressable onPress={togglePasswordVisibility}>
					<Image source={iconSource} className="w-6 h-6" />
				</Pressable>
			);
		}
		return icon ? <Image source={icon} className="w-6 h-6" /> : null;
	};
    
	return (
		<View className="mt-6">
			<View
				className={`relative border-b px-1 flex-row items-center justify-between ${
					value === ""
						? "border-iflab-gray-600"
						: isValid
							? "border-iflab-green-100"
							: "border-iflab-red-400"
				}`}
			>
				<View className="flex-1">
					<Text
						className={`z-10 absolute text-iflab-gray-600 transition-all duration-75 ${
							value === "" ? "top-3 text-base left-2" : "-top-3 -left-1 text-sm"
						}`}
					>
						{placeholder}
					</Text>

					<TextInput
						className="text-base"
						value={value}
						onChangeText={action}
						keyboardType={isPassword ? "default" : type}
						secureTextEntry={isPassword && !showPassword}
						autoCapitalize="none"
					/>
				</View>

				{renderIcon()}
			</View>

			{!!errorMessage && (
				<Text
					className={`text-red-500 text-sm mt-2 ml-1 ${
						isValid || value === "" ? "opacity-0" : "opacity-100"
					}`}
				>
					{errorMessage}
				</Text>
			)}
		</View>
	);
}
