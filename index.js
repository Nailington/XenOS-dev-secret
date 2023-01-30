const express = require("express");
const webpack = require("webpack");
const path = require("path");
const request = require("request");

console.log('XENOS')

try {
	var Bundle = webpack(
		{
			mode: "development",
			entry: path.join(__dirname, "public/rsc/js/entry.ts"),
			module: {
				rules: [
					{
						test: /\.ts?$/,
						use: "ts-loader",
						exclude: /node_modules/,
					},
				],
			},
			resolve: {
				extensions: [".tsx", ".ts", ".js"],
			},
			output: {
				path: path.join(__dirname, "public/rsc/web/"),
				filename: "bundle.js",
			},
			experiments: {
				topLevelAwait: true,
			},
			watch: true,
		},
		e => console.log(e || "Completed OS Bundle")
	);

	var SDKBundle = webpack(
		{
			mode: "development",
			entry: path.join(__dirname, "public/sdk/mod.ts"),
			module: {
				rules: [
					{
						test: /\.ts?$/,
						use: "ts-loader",
						exclude: /node_modules/,
					},
				],
			},
			resolve: {
				extensions: [".tsx", ".ts", ".js"],
			},
			output: {
				path: path.join(__dirname, "public"),
				filename: "sdk.ts",
			},
			experiments: {
				topLevelAwait: true,
			},
			watch: true,
		},
		e => console.log(e || "Completed SDK Bundle")
	);
} catch (e) {
	console.log(e);
}

const app = express();

app.use((req, res, next) => {
	res.append("Service-Worker-Allowed", "/");

	next();
});

app.use(express.static("public"));

// media tunnel :beg:
app.get("/media", (req, res) => {
	const imageUrl = req.query.imageUrl;
	request(imageUrl).pipe(res);
});

app.listen(3000, () => {
	console.log("server started");
});
