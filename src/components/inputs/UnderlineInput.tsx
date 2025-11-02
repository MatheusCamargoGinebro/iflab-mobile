import {
	TextInput,
	View,
	Image,
	ImageSourcePropType,
	Text,
	Pressable,
} from "react-native";
import { useState } from "react";

interface Props {
	value: string;
	placeholder: string;
	errorMessage: string;
	type?: "default" | "email-address" | "numeric" | "visible-password";
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
					<Image
						source={iconSource}
						className="w-8 h-8"
						style={{
							tintColor:
								value === "" ? "#555555" : isValid ? "#224411ff" : "#ff1a1a",
						}}
					/>
				</Pressable>
			);
		}

		return icon ? (
			<Image
				source={icon}
				className="w-8 h-8"
				style={{
					tintColor:
						value === "" ? "#555555" : isValid ? "#224411ff" : "#ff1a1a",
				}}
			/>
		) : null;
	};

	return (
		<View className="">
			<View
				className={`relative flex-row justify-between items-center border-b pl-2 pr-1 ${value === "" ? "border-iflab-gray-600" : isValid ? "border-iflab-green-100" : "border-iflab-red-400"}`}
			>
				<TextInput
					className="w-11/12"
					value={value}
					onChangeText={action}
					keyboardType={isPassword ? "default" : type}
					secureTextEntry={isPassword && !showPassword}
					placeholder={placeholder}
					autoCapitalize="none"
				/>

				{renderIcon()}
			</View>

			{!!errorMessage && (
				<Text
					className={`text-red-500 text-sm mt-2 ml-1 ${isValid || value === "" ? "opacity-0" : "opacity-100"}`}
				>
					{errorMessage}
				</Text>
			)}
		</View>
	);
}
