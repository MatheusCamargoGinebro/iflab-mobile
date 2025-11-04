import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";

import { UnderlineInput } from "../../../../components/inputs";
import {
	PrimaryButton,
	SecundaryButton,
	CheckBox,
} from "../../../../components/buttons";

const AsyncStorage =
	require("@react-native-async-storage/async-storage").default;
const email_icon = require("../../../../../assets/UI/email.png");

export default function () {
	const router = useRouter();
	/*----------------------------------------------------*/

	const [userData, setUserData] = useState({
		user_email: "",
		user_password: "",
	});

	const [checkData, setCheckData] = useState({
		user_email: false,
		user_password: false,
	});

	const errorMessage = {
		user_email: "Insira um email válido",
		user_password: "insira uma senha válida",
	};

	function handleMailType(e: string) {
		if (
			!/^[a-zA-Z0-9._-]+@aluno\.ifsp\.edu\.br$/.test(e) &&
			!/^[a-zA-Z0-9._-]+@ifsp\.edu\.br$/.test(e)
		) {
			setCheckData({ ...checkData, user_email: false });
		} else {
			setCheckData({ ...checkData, user_email: true });
		}

		setUserData({ ...userData, user_email: e });
	}

	function handlePasswordType(e: string) {
		setUserData({ ...userData, user_password: e });

		if (e.length <= 0) {
			setCheckData({ ...checkData, user_password: false });
		} else {
			setCheckData({ ...checkData, user_password: true });
		}
	}

	async function handleRememberLogin() {
		setSaveLogin(!saveLogin);
		await AsyncStorage.setItem(
			"remember_login",
			saveLogin === true ? "true" : "false"
		);
	}

	/*----------------------------------------------------*/

	const [saveLogin, setSaveLogin] = useState(false);

	useEffect(() => {
		async function fetchParams() {
			const remember_login_value = await AsyncStorage.getItem("remember_login");
			setSaveLogin(remember_login_value === "true");
		}

		fetchParams();
	}, []);

	/*----------------------------------------------------*/

	return (
		<View className="flex-1">
			<Text className="ml-4">Digite suas informações</Text>
			<View className="flex-col gap-14 px-4">
				<View className="">
					<UnderlineInput
						value={userData.user_email}
						placeholder={"Email"}
						errorMessage={errorMessage.user_email}
						isValid={checkData.user_email}
						icon={email_icon}
						type="email-address"
						action={handleMailType}
					/>
				</View>
				<View className="">
					<UnderlineInput
						value={userData.user_password}
						placeholder={"Senha"}
						errorMessage={errorMessage.user_password}
						isValid={checkData.user_password}
						type="visible-password"
						action={handlePasswordType}
					/>
					<View className="flex-row justify-between items-center px-2">
						<CheckBox
							text="Lembrar senha"
							action={handleRememberLogin}
							state={saveLogin}
						/>
						<SecundaryButton
							text="Esqueceu a senha?"
							action={() => router.navigate("/forgot-password")}
						/>
					</View>
				</View>
			</View>

			<View className="flex-1 px-10 justify-end pb-20">
				<PrimaryButton
					text="Logar"
					action={() => {}}
					disabled={!checkData.user_email || !checkData.user_password}
				/>
				<View className="flex-row justify-center items-center gap-1">
					<Text>Não possui conta?</Text>
					<SecundaryButton
						text={"Registre-se"}
						action={() => router.navigate("/(email-verification)/send-mail")}
					/>
				</View>
			</View>
		</View>
	);
}
