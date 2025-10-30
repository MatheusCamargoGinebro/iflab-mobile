/** @type {import('tailwindcss').Config} */
const { colors } = require("./src/styles/colors");
const { fonts } = require("./src/styles/fonts");

module.exports = {
	content: ["./src/**/*.{ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: colors,
			fontFamily: fonts,
		},
		screens: {
			xs: "0px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	plugins: [],
};
