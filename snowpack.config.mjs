/** @type {import("snowpack").SnowpackUserConfig } */
export default {
	mount: {
		public: { url: '/', static: true, resolve: false },
		src: { url: '/src' },
	},
	plugins: [
		/* ... */
	],
	packageOptions: {
		/* ... */
	},
	devOptions: {
		hmr: true,
	},
	buildOptions: {
		/* ... */
	},
	optimize: {
		minify: true,
		bundle: false,
		target: 'es2017',
	},
};
