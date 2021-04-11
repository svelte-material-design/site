import { createClientConfig } from "./build";
import path from "path";
import type { Configuration } from "webpack";
import type { BaseEnv } from "@raythurnevoid/svelte-template/build/types";

export default function conf(env: BaseEnv): Configuration {
	if (!process.env.NODE_ENV) {
		process.env.NODE_ENV = env?.production ? "production" : "development";
	}

	delete process.env.TS_NODE_PROJECT;

	const clientConfig = createClientConfig({ env });

	return {
		...clientConfig,
		entry: {
			main: "./src/client.ts",
		},
		output: {
			path: path.resolve("./__sapper__/dev/client"),
			filename: "[hash]/[name].js",
			chunkFilename: "[hash]/[name].[id].js",
			publicPath: "client/",
		},
	};
}
