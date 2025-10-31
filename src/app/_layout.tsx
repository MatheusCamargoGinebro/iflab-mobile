import { useEffect, useState } from "react";

import { Stack } from "expo-router";
import { LoadingScreen } from "./loading";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { get_user_info, login_user } from "../api/requests";

import "../styles/global.css";

export default function RootLayout() {
	const [isLogged, setIslogged] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetch_data() {
			/* await AsyncStorage.multiRemove([
				"user_email",
				"user_password",
				"token",
				"remember_login",
			]); */
			/* await AsyncStorage.setItem("user_email", "daniel.rocha@ifsp.edu.br");
			await AsyncStorage.setItem("user_password", "M4th3us@12345");
			await AsyncStorage.setItem("remember_login", "true"); */

			const response = await get_user_info();

			if (response.status) {
				setIslogged(true);
				setIsLoading(false);
				return;
			}

			const remember_login_value = await AsyncStorage.getItem("remember_login");
			const remember_login = remember_login_value === "true";

			if (!remember_login) {
				setIslogged(false);
				setIsLoading(false);
				return;
			}

			const user_email = await AsyncStorage.getItem("user_email");
			const user_password = await AsyncStorage.getItem("user_password");

			if (!user_email || !user_password) {
				setIslogged(false);
				setIsLoading(false);
				return;
			}

			const login = await login_user(user_email, user_password);

			setIslogged(login.status);
			setIsLoading(false);
		}

		fetch_data();
	}, []);

	if (isLoading) {
		return <LoadingScreen status_msg="Carregando" />;
	}

	return (
		<Stack>
			{isLogged ? (
				<Stack.Screen name="(authenticated)" options={{ headerShown: false }} />
			) : (
				<Stack.Screen
					name="(unauthenticated)"
					options={{ headerShown: false }}
				/>
			)}
		</Stack>
	);
}
