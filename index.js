const express = require("express");
const webpack = require("webpack");
const path = require("path");
const request = require("request");

try {
	var bundle = webpack(
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
		e => console.log(e || "Completed Bundle")
	);
} catch (e) {
	console.log(e);
}

const app = express();
app.use(express.static("public"));

// media tunnel :beg:
app.get("/media", (req, res) => {
	const imageUrl = req.query.imageUrl;
	request(imageUrl).pipe(res);
});

app.listen(3000, () => {
	console.log("server started");
});
