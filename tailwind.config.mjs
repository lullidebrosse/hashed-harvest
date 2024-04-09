/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'hhdarkbrown' : '#1f0e10',
				'hhbrownie' : '#401d15',
				'hhorangebrown' : '#933c20',
				'hhlightbrown' : '#f3aa51',
				'hhcream' : '#f8e0c5',
				'hhlightorangebrown' : '#c26728'
			}
		},
	},
	plugins: [],
}
