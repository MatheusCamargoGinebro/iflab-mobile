import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";

import "../styles/global.css";

export default function Layout() {
	return (
		<View className="flex-1 items-center justify-center">
			<Text>IFLab tá rodando, rapazeada</Text>
		</View>
	);
}
