import { createThemes } from 'tw-colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				primWhite: '#F9F9F9',
				primBlack: '#1F1F1F',
				accent:'var(--color-accent)',
				custBlue: '#082BCB',
				custCoral: '#FF595A',
				custTeal: '#6ACFC7',
			},
		},
		plugins: [
			createThemes({
				coral:{
					accent:'#FF595A',
				},
				blue:{
					accent:'#082BCB',
				},
				teal:{
					accent:'#6ACFC7',
				},
			})
		],
	}
}
