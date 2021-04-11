import type { SvelteTempalteConfigurationInput } from "@raythurnevoid/svelte-template/build/config";
import {
	createClientConfig as baseCreateClientConfig,
	createServerConfig as baseCreateServerConfig,
} from "@raythurnevoid/svelte-sapper-template/build/config";
import {
	tsLoaderRule,
	svelteLoaderRule,
	scssLoaderRule,
	fileLoaderRule,
	scssModulesLoaderRule,
} from "@raythurnevoid/svelte-template/build/module/rules";
import { scssLoader } from "@raythurnevoid/svelte-template/build/module/rules/loaders";
import type { BaseInput } from "@raythurnevoid/svelte-template/build/types";
import type {
	ScssModulesLoaderRuleInput,
	ScssLoaderRuleInput,
} from "@raythurnevoid/svelte-template/build/module/rules";
import type { Configuration } from "webpack";
import { DefinePlugin } from "webpack";
import type { RuleSetUseItem } from "webpack";
import { resolve } from "path";

const sassIncludePaths = [
	resolve("./src/styles/smui"),
	resolve("./node_modules"),
];

function scssLoaderOverride(input: BaseInput) {
	const baseScssLoader = scssLoader(input);

	return {
		...baseScssLoader,
		options: {
			...baseScssLoader.options,
			sassOptions: {
				...baseScssLoader.options.sassOptions,
				includePaths: sassIncludePaths,
			},
		},
	};
}

function scssLoaderRuleOverride(input: ScssLoaderRuleInput) {
	const baseScssLoaderRule = scssLoaderRule(input);

	const baseLoaders = (baseScssLoaderRule.use as RuleSetUseItem[]).slice(0, -1);

	return {
		...baseScssLoaderRule,
		use: [...baseLoaders, scssLoaderOverride(input)],
	};
}

function scssModulesLoaderRuleOverride(input: ScssModulesLoaderRuleInput) {
	const baseScssModulesLoaderRule = scssModulesLoaderRule(input);

	const baseLoaders = (baseScssModulesLoaderRule.use as RuleSetUseItem[]).slice(
		0,
		-1
	);

	return {
		...baseScssModulesLoaderRule,
		use: [...baseLoaders, scssLoaderOverride(input)],
	};
}

function configLoadersRulesOverride(input: SvelteTempalteConfigurationInput) {
	const { env } = input;

	const svelteLoaderRules = svelteLoaderRule({ env, ssr: input.env.server });

	return {
		rules: [
			{
				...tsLoaderRule({ env }),
			},
			{
				...svelteLoaderRules[0],
			},
			svelteLoaderRules[1],
			scssLoaderRuleOverride({ env, extract: input.extractCss }),
			scssModulesLoaderRuleOverride({ env, extract: input.extractCss }),
			fileLoaderRule(),
		],
	};
}

export function createClientConfig(input: SvelteTempalteConfigurationInput) {
	const baseClientConfig = baseCreateClientConfig(input);

	return {
		...baseClientConfig,
		resolve: {
			...baseClientConfig.resolve,
		},
		module: configLoadersRulesOverride(input),
		plugins: [
			new DefinePlugin({
				"process.browser": ~~true,
				"process.env.NODE_ENV": JSON.stringify(
					input.env.production ? "production" : "development"
				),
			}),
			...baseClientConfig.plugins,
		],
	} as Configuration;
}

export function createServerConfig(input: SvelteTempalteConfigurationInput) {
	const baseServerConfig = baseCreateServerConfig(input);

	return {
		...baseServerConfig,
		resolve: {
			...baseServerConfig.resolve,
		},
		module: configLoadersRulesOverride(input),
	} as Configuration;
}
