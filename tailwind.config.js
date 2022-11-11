/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx}',
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		container: {
			center: true
		},
		extend: {
			colors: {
				primary: '#73f3ff',
				dark: '#0f0f0f',
				'dark-blue': '#1832a8',
				'dark-accent': '#141416',
				'dark-accent-1': '#1c1d22',
				'dark-accent-2': '#232329',
				'dark-accent-3': '#353945'
			}
		}
	},
	future: {
		hoverOnlyWhenSupported: true
	},
	plugins: [require('@tailwindcss/line-clamp')]
};
