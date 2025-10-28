import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function RegisterScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-neutral-900">
			<Text className="text-xl font-bold text-white">RegisterScreen</Text>
			<Link href={"/HomeScreen"} className="text-blue-700 underline">
				Ir para Home
			</Link>
			<Link href={"/LoginScreen"} className="text-blue-700 underline">
				Ir para login
			</Link>
			<Link href={"/RegisterScreen"} className="text-blue-700 underline">
				Ir para Register
			</Link>
			<Link href={"/LabScreen/1"} className="text-blue-700 underline">
				Ir para laboratório
			</Link>
		</View>
	);
}
