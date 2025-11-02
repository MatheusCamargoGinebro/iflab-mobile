import { useEffect, useRef, useState } from "react";
import { View, Animated, Easing, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../styles/colors";

function BanterLoader() {
	const anims = useRef<Animated.Value[]>(
		Array.from({ length: 9 }, () => new Animated.Value(0))
	).current;

	const [highlightedIndex, setHighlightedIndex] = useState<number>(0);
	const [direction, setDirection] = useState<1 | -1>(1);

	useEffect(() => {
		const ANIMATION_DURATION = 1600;

		const createLoop = (anim: Animated.Value, delay: number) =>
			Animated.loop(
				Animated.sequence([
					Animated.delay(delay),
					Animated.timing(anim, {
						toValue: 1,
						duration: 800,
						easing: Easing.inOut(Easing.ease),
						useNativeDriver: Platform.OS !== "web",
					}),
					Animated.timing(anim, {
						toValue: 0,
						duration: 800,
						easing: Easing.inOut(Easing.ease),
						useNativeDriver: Platform.OS !== "web",
					}),
				])
			);

		const loops = anims.map((anim, i) => createLoop(anim, i * 100));
		loops.forEach((loop) => loop.start());

		const colorInterval = setInterval(() => {
			setHighlightedIndex((prev) => {
				if (prev === 8 && direction === 1) {
					setDirection(-1);
					return 7;
				}
				if (prev === 0 && direction === -1) {
					setDirection(1);
					return 1;
				}
				return prev + direction;
			});
		}, ANIMATION_DURATION);

		return () => {
			loops.forEach((loop) => loop.stop());
			clearInterval(colorInterval);
		};
	}, [direction]);

	return (
		<View className="w-[90px] h-[90px] flex-row flex-wrap justify-center items-center">
			{anims.map((anim, i) => {
				const scale = anim.interpolate({
					inputRange: [0, 1],
					outputRange: [1, 0.3],
				});
				const opacity = anim.interpolate({
					inputRange: [0, 1],
					outputRange: [1, 0.4],
				});
				const backgroundColor =
					highlightedIndex === i
						? colors["iflab-red-500"]
						: colors["iflab-green-100"];

				return (
					<Animated.View
						key={i}
						style={{
							transform: [{ scale }],
							opacity,
							backgroundColor,
							width: 24,
							height: 24,
							margin: 3,
							borderRadius: 5,
						}}
					/>
				);
			})}
		</View>
	);
}

// Texto animado com pontinhos
interface AnimatedStatusTextProps {
	text: string;
}

function AnimatedStatusText({ text }: AnimatedStatusTextProps) {
	const fadeAnim = useRef(new Animated.Value(0)).current;
	const [dots, setDots] = useState<string>("");

	useEffect(() => {
		const loop = Animated.loop(
			Animated.sequence([
				Animated.timing(fadeAnim, {
					toValue: 1,
					duration: 800,
					useNativeDriver: true,
				}),
				Animated.timing(fadeAnim, {
					toValue: 0.5,
					duration: 800,
					useNativeDriver: true,
				}),
			])
		);
		loop.start();

		let count = 0;
		const interval = setInterval(() => {
			count = (count + 1) % 4;
			setDots(".".repeat(count));
		}, 400);

		return () => {
			clearInterval(interval);
			loop.stop();
		};
	}, []);

	return (
		<Animated.Text
			style={{
				marginTop: 20,
				color: colors["iflab-green-100"],
				fontWeight: "bold",
				fontSize: 16,
				textAlign: "center",
			}}
		>
			{text}
			{dots}
		</Animated.Text>
	);
}

// Tela principal de loading
interface LoadingProps {
	status_msg: string;
}

export default function LoadingScreen({ status_msg }: LoadingProps) {
	return (
		<SafeAreaView className="flex-1 bg-white_full justify-center items-center">
			<View className="justify-center items-center">
				<BanterLoader />
				<AnimatedStatusText text={status_msg} />
			</View>
		</SafeAreaView>
	);
}
