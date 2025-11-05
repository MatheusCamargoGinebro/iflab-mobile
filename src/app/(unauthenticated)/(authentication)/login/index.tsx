import { Text, View } from "react-native";
import { useEffect, useReducer, useState } from "react";
import { useRouter } from "expo-router";

import { UnderlineInput } from "../../../../components/inputs";
import {
	PrimaryButton,
	SecundaryButton,
	CheckBox,
} from "../../../../components/buttons";
import { login_user } from "../../../../api/requests";
import { Loading } from "../../../../components/loadings";

import AsyncStorage from "@react-native-async-storage/async-storage";
const email_icon = require("../../../../../assets/UI/email.png");

function isValidEmail(email: string): boolean {
	return /^[a-zA-Z0-9._-]+@(aluno\.ifsp\.edu\.br|ifsp\.edu\.br)$/.test(email);
}

function isValidPassword(password: string): boolean {
	return password.length > 0;
}

const initialState = {
	user_email: "",
	user_password: "",
	isValidEmail: false,
	isValidPassword: false,
};

function reducer(state: any, action: any) {
	switch (action.type) {
		case "SET_EMAIL":
			return {
				...state,
				user_email: action.payload,
				isValidEmail: isValidEmail(action.payload),
			};
		case "SET_PASSWORD":
			return {
				...state,
				user_password: action.payload,
				isValidPassword: isValidPassword(action.payload),
			};
		default:
			return state;
	}
}

export default function LoginScreen() {
	const router = useRouter();
	const [state, dispatch] = useReducer(reducer, initialState);
	const [saveLogin, setSaveLogin] = useState(false);
	const [loading, setLoading] = useState(false);

	const errorMessage = {
		user_email: "Insira um email válido",
		user_password: "Insira uma senha válida",
	};

	useEffect(() => {
		async function fetchParams() {
			const remember_login_value = await AsyncStorage.getItem("remember_login");
			setSaveLogin(remember_login_value === "true");

			if (!remember_login_value) {
				return;
			}

			const mail = await AsyncStorage.getItem("user_email");
			const password = await AsyncStorage.getItem("user_password");

			if (!mail && !password) {
				return;
			}

			dispatch({ type: "SET_EMAIL", payload: mail });
			dispatch({ type: "SET_PASSWORD", payload: password });

			return;
		}
		fetchParams();
	}, []);

	const handleMailType = (email: string) => {
		dispatch({ type: "SET_EMAIL", payload: email });
	};

	const handlePasswordType = (password: string) => {
		dispatch({ type: "SET_PASSWORD", payload: password });
	};

	const handleRememberLogin = async () => {
		const newState = !saveLogin;
		setSaveLogin(newState);
		await AsyncStorage.setItem("remember_login", newState ? "true" : "false");
	};

	const handleLogin = async () => {
		if (!state.isValidEmail || !state.isValidPassword) return;

		setLoading(true);
		const result = await login_user(state.user_email, state.user_password);

		if (saveLogin) {
			await AsyncStorage.setItem("user_email", state.user_email);
			await AsyncStorage.setItem("user_password", state.user_password);
		}

		setLoading(false);
		if (result.status) {
			router.navigate("/home");
		}
	};

	const goToForgotPassword = () => router.navigate("/forgot-password");
	const goToRegister = () => router.navigate("/(email-verification)/send-mail");

	return loading ? (
		<View className="flex-1 mt-44">
			<Loading status_msg="Carregando" />
		</View>
	) : (
		<View className="flex-1">
			<Text className="ml-4">Digite suas informações</Text>
			<View className="flex-col gap-14 px-4">
				<View>
					<UnderlineInput
						value={state.user_email}
						placeholder="Email"
						errorMessage={errorMessage.user_email}
						isValid={state.isValidEmail}
						icon={email_icon}
						type="email-address"
						action={handleMailType}
					/>
				</View>
				<View>
					<UnderlineInput
						value={state.user_password}
						placeholder="Senha"
						errorMessage={errorMessage.user_password}
						isValid={state.isValidPassword}
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
							action={goToForgotPassword}
						/>
					</View>
				</View>
			</View>

			<View className="flex-1 px-10 justify-end pb-20">
				<PrimaryButton
					text="Logar"
					action={handleLogin}
					disabled={!state.isValidEmail || !state.isValidPassword || loading}
				/>
				<View className="flex-row justify-center items-center gap-1">
					<Text>Não possui conta?</Text>
					<SecundaryButton text="Registre-se" action={goToRegister} />
				</View>
			</View>
		</View>
	);
}
