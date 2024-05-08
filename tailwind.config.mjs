/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#0637A4',
				'primary-transparent': 'rgba(6, 55, 164, 0.4)',
				'primary-transparent-1': 'rgba(6, 55, 164, 0.1)',
				'dark': '#041334',
				'grey' : '#E2E5E7',
				'white': '#FAFCFE'
			},
			boxShadow: {
				outline: '0 0 25px 0 rgba(226, 229, 231, 0.35)',
				blueOutline: '0 0 25px 0 rgba(6, 55, 164, 0.1)',
			  },
		},
	},
	plugins: [],
}
