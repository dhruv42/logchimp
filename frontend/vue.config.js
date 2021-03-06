const path = require("path");

const serverPort = process.env.VUE_APP_SERVER_PORT || 3000;

module.exports = {
	outputDir: path.resolve(__dirname, "../server/public"),
	devServer: {
		disableHostCheck: process.env.IS_GITPOD ? true : false,
		proxy: {
			"/api": {
				target: `http://localhost:${serverPort}`
			}
		}
	},
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/styles/variables.sass";`
			}
		}
	}
};
