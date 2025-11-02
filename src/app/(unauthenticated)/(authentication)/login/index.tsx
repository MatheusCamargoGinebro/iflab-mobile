import { Text, View } from "react-native";
import {
	PrimaryButton,
	SecundaryButton,
} from "../../../../components/buttons/";

const delete_Item = require("../../../../../assets/UI/delete.png");

export default function () {
	return (
		<View className="flex-1 gap-2 items-center justify-center">
			<Text className="text-2xl font-bold text-black">Login</Text>
			<View className="flex gap-5">
				<PrimaryButton
					text={"Continuar"}
					action={() => console.log("PrimaryButton")}
				/>
				<PrimaryButton
					text={"Deletar"}
					action={() => console.log("deleted")}
					destructive={true}
					icon={delete_Item}
				/>
				<SecundaryButton
					text={"Cancelar"}
					action={() => console.log("SecundaryButton")}
				/>
			</View>
		</View>
	);
}
