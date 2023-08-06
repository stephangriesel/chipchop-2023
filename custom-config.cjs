module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'pathway-gothic-one':['"Pathway Gothic One"'],
			},
      width: {
        '128': '32rem',
      }
    },
	},
	plugins: [
		require('flowbite/plugin')
	],
}