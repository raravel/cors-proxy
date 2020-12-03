const path = require('path');

module.exports = {
	configureWebpack: {
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
			filename: "web-dist/[name].js",
			chunkFilename: "web-dist/[name].js",
		},
	},
	transpileDependencies: ["vuetify"],
};
