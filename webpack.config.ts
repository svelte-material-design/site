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
		serviceworker: createServiceWorkerConfig({
			env,
		}),
	};
}

export default conf({
	production: process.env.NODE_ENV === "development" ? false : true,
	fancyProgress: true,
});
