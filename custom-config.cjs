module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
      width: {
        '128': '32rem',
      }
    },
	},
	plugins: [
		require('flowbite/plugin')
	],
}