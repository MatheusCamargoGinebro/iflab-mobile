/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,ts,tsx}", "./components/**/*.{js,ts,tsx}"],

	presets: [require("nativewind/preset")],
	theme: {
		extend: {},
		screens: {
			xs: "0px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
