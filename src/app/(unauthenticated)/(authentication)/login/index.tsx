import { Text, View } from "react-native";
import { UnderlineInput } from "../../../../components/inputs";
import { useState } from "react";

const email_icon = require("../../../../../assets/UI/email.png");
const user_icon = require("../../../../../assets/UI/user.png");
const campus_icon = require("../../../../../assets/UI/campus.png");

export default function () {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [campus, setCampus] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View className="flex-1 gap-2 items-center justify-center">
			<Text className="text-2xl font-bold text-black">Login</Text>
			<View className="flex gap-5 p-5 w-full">
				<UnderlineInput
					value={email}
					placeholder="Digite seu e-mail"
					errorMessage="Deu ruim"
					type="email-address"
					isValid={email.length > 5}
					action={setEmail}
					icon={email_icon}
				/>
				<UnderlineInput
					value={username}
					placeholder="Digite seu nome de usuário"
					errorMessage="Deu ruim"
					type="default"
					isValid={true}
					action={setUsername}
					icon={user_icon}
				/>
				<UnderlineInput
					value={campus}
					placeholder="Digite seu campus"
					errorMessage="Deu ruim"
					type="default"
					isValid={true}
					action={setCampus}
					icon={campus_icon}
				/>
				<UnderlineInput
					value={password}
					placeholder="Digite sua senha"
					errorMessage="Deu ruim"
					type="visible-password"
					isValid={false}
					action={setPassword}
				/>
			</View>
		</View>
	);
}
