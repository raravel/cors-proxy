const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

const plugins = [];
if ( process.argv[2] === "build" ) {
	plugins.push(new PrerenderSpaPlugin({
		staticDir: path.resolve(__dirname, 'web-dist'),
		indexPath: path.resolve(__dirname, 'web-dist', 'index.html'),
		captureAfterTime: 5000,
		routes: [
			"/",
		],
	}));
}

module.exports = {
	configureWebpack: {
		plugins,
		entry: [
			path.join(__dirname, "web-src", "index.js"),
		],
		resolve: {
			alias: {
				"assets": path.join(__dirname, "web-src/assets"),
				"@": path.join(__dirname, "web-src"),
			},
		},
		devServer: {
			port: 8080,
			host: '0.0.0.0',
			historyApiFallback: true,
		},
		output: {
			filename: "dist/[name].js",
			chunkFilename: "dist/[name].js",
		},
	},
	transpileDependencies: ["vuetify"],
	outputDir: path.resolve(__dirname, 'web-dist'),
};
