import { Text, View } from "react-native";
import { UnderlineInput } from "../../../../components/inputs";

import { useState } from "react";

const email_icon = require("../../../../../assets/UI/email.png");

export default function () {
	const [loginInfo, setLoginInfo] = useState({
		data: {
			user_email: "",
			user_password: "",
		},
		checkData: {
			user_email: false,
			user_password: false,
		},
		errorMessage: {
			user_email: "",
			user_password: "",
		},
	});

	return (
		<View>
			<Text>Digite suas informações</Text>
			<View className="flex-col gap-10 mt-2">
				<View>
					<UnderlineInput
						value={""}
						placeholder={"Email"}
						errorMessage={""}
						isValid={true}
						icon={email_icon}
						type="email-address"
						action={() => {}}
					/>
				</View>
				<View>
					<UnderlineInput
						value={""}
						placeholder={"Senha"}
						errorMessage={""}
						isValid={true}
						type="visible-password"
						action={() => {}}
					/>
				</View>
			</View>
		</View>
	);
}
