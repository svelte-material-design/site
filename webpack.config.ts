import { createServiceWorkerConfig } from "@raythurnevoid/svelte-sapper-template/build/config";
import type { SvelteTempalteConfigurationInput } from "@raythurnevoid/svelte-template/build/config";
import { createClientConfig, createServerConfig } from "./build";
import type { BaseEnv } from "@raythurnevoid/svelte-template/build/types";

function conf(env: BaseEnv) {
	if (!process.env.NODE_ENV) {
		process.env.NODE_ENV = env?.production ? "production" : "development";
	}

	console.info(JSON.stringify(env, null, 2));

	delete process.env.TS_NODE_PROJECT;

	const confInput = {
		env,
		extractCss: true,
	} as SvelteTempalteConfigurationInput;
	const serverConfInput = {
		...confInput,
		env: {
			...confInput.env,
			server: true,
		},
	};

	return {
		client: createClientConfig(confInput),
		server: createServerConfig(serverConfInput),
		serviceworker: {
			...createServiceWorkerConfig({ env }),
			devtool: env.production ? false : "inline-source-map",
		},
	};
}

export default conf({
	production: process.env.NODE_ENV === "development" ? false : true,
});

// module.exports = {
// 	client: {
// 		entry: {
// 			main: config.client.entry().main.replace(/\.js$/, ".ts"),
// 		},
// 		output: config.client.output(),
// 		resolve: {
// 			alias,
// 			extensions,
// 			mainFields,
// 			plugins: [new TsconfigPathsPlugin()],
// 		},
// 		module: {
// 			rules: [
// 				{
// 					test: /\.ts$/,
// 					use: {
// 						loader: "ts-loader",
// 						options: {
// 							allowTsInNodeModules: true,
// 						},
// 					},
// 				},
// 				{
// 					test: /\.(svelte)$/,
// 					use: {
// 						loader: "svelte-loader",
// 						options: {
// 							...svelteConfig,
// 							dev,
// 							hydratable: true,
// 							hotReload: false, // pending https://github.com/sveltejs/svelte/issues/2377
// 						},
// 					},
// 				},
// 				{
// 					test: /module\.s?css$/,
// 					use: [
// 						MiniCssExtractPlugin.loader,
// 						//"@teamsupercell/typings-for-css-modules-loader", Non si può usare per colpa di sapper ...
// 						{
// 							loader: "css-loader",
// 							options: {
// 								modules: {
// 									localIdentName: "[local]--[hash:base64:5]",
// 								},
// 								esModule: true,
// 								sourceMap: dev,
// 							},
// 						},
// 						{
// 							loader: "sass-loader",
// 							options: {
// 								sassOptions,
// 							},
// 						},
// 					],
// 				},
// 				{
// 					test: /\.s?css$/,
// 					exclude: /module\.s?css$/,
// 					use: [
// 						MiniCssExtractPlugin.loader,
// 						{
// 							loader: "css-loader",
// 							options: cssOptions,
// 						},
// 						{
// 							loader: "sass-loader",
// 							options: {
// 								sassOptions,
// 							},
// 						},
// 					],
// 				},
// 			],
// 		},
// 		mode,
// 		plugins: [
// 			// pending https://github.com/sveltejs/svelte/issues/2377
// 			// dev && new webpack.HotModuleReplacementPlugin(),
// 			new DefinePlugin({
// 				"process.browser": ~~true,
// 				"process.env.NODE_ENV": JSON.stringify(mode),
// 			}),
// 			new MiniCssExtractPlugin({
// 				filename: "[name].css",
// 				chunkFilename: "[name].[id].css",
// 			}),
// 			// new OptimizeCssAssetsPlugin({ Rompe i sourcemap
// 			//   assetNameRegExp: /\.css$/g,
// 			//   cssProcessor: require("cssnano"),
// 			//   cssProcessorPluginOptions: {
// 			//     preset: ["default", { discardComments: { removeAll: true } }]
// 			//   },
// 			//   canPrint: true,
// 			//   sourceMap: dev
// 			// })
// 		].filter(Boolean),
// 		devtool: dev && "inline-source-map",
// 	},

// 	server: {
// 		entry: {
// 			server: config.server.entry().server.replace(/\.js$/, ".ts"),
// 		},
// 		output: config.server.output(),
// 		target: "node",
// 		resolve: {
// 			alias,
// 			extensions,
// 			mainFields,
// 			plugins: [new TsconfigPathsPlugin()],
// 		},
// 		externals: Object.keys(pkg.dependencies).concat("encoding"),
// 		module: {
// 			rules: [
// 				{
// 					test: /\.ts$/,
// 					use: {
// 						loader: "ts-loader",
// 						options: {
// 							allowTsInNodeModules: true,
// 						},
// 					},
// 				},
// 				{
// 					test: /\.(svelte)$/,
// 					use: {
// 						loader: "svelte-loader",
// 						options: {
// 							...svelteConfig,
// 							css: false,
// 							generate: "ssr",
// 							dev,
// 						},
// 					},
// 				},
// 				{
// 					test: /module\.s?css$/,
// 					use: [
// 						"style-loader",
// 						MiniCssExtractPlugin.loader,
// 						{
// 							loader: "css-loader",
// 							options: {
// 								modules: {
// 									localIdentName: "[local]--[hash:base64:5]",
// 								},
// 								esModule: true,
// 								sourceMap: dev,
// 							},
// 						},
// 						{
// 							loader: "sass-loader",
// 							options: {
// 								sassOptions,
// 							},
// 						},
// 					],
// 				},
// 				{
// 					test: /\.s?css$/,
// 					exclude: /module\.s?css$/,
// 					use: [
// 						"style-loader",
// 						MiniCssExtractPlugin.loader,
// 						{
// 							loader: "css-loader",
// 							options: cssOptions,
// 						},
// 						{
// 							loader: "sass-loader",
// 							options: {
// 								sassOptions,
// 							},
// 						},
// 					],
// 				},
// 			],
// 		},
// 		mode: process.env.NODE_ENV,
// 		plugins: [
// 			new MiniCssExtractPlugin({
// 				filename: "[name].css",
// 				chunkFilename: "[name].[id].css",
// 			}),
// 			// new OptimizeCssAssetsPlugin({
// 			//   assetNameRegExp: /\.css$/g,
// 			//   cssProcessor: require("cssnano"),
// 			//   cssProcessorPluginOptions: {
// 			//     preset: ["default", { discardComments: { removeAll: true } }],
// 			//   },
// 			//   canPrint: true,
// 			// }),
// 		].filter(Boolean),
// 		performance: {
// 			hints: false, // it doesn't matter if server.js is large
// 		},
// 	},

// 	serviceworker: {
// 		entry: {
// 			"service-worker": config.serviceworker
// 				.entry()
// 				["service-worker"].replace(/\.js$/, ".ts"),
// 		},
// 		output: config.serviceworker.output(),
// 		resolve: { extensions },
// 		module: {
// 			rules: [
// 				{
// 					test: /\.ts$/,
// 					use: {
// 						loader: "ts-loader",
// 						options: {
// 							allowTsInNodeModules: true,
// 						},
// 					},
// 				},
// 			],
// 		},
// 		mode: process.env.NODE_ENV,
// 	},
// };
