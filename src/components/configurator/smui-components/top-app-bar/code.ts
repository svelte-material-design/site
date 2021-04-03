import {
	generateSvelteTagCode,
	removeEmptyLines,
} from "src/components/configurator";
import { TagCodeGenerationProps } from "../../code";
import type { TopAppBarConfigurations } from "./types";

export function createTopAppBarTagCode(props: TopAppBarCodeProps) {
	const { variant, prominent, dense, color } = props.configurations;

	const code = generateSvelteTagCode({
		tag: "TopAppBar",
		props: [
			[variant !== "standard", `variant=${variant}`],
			[color !== "primary", `color=${color}`],
			[prominent, `prominent`],
			[dense, `dense`],
		],
		content: props.content,
	});

	return removeEmptyLines(code);
}

interface TopAppBarCodeProps extends Pick<TagCodeGenerationProps, "content"> {
	configurations: Partial<TopAppBarConfigurations>;
}
