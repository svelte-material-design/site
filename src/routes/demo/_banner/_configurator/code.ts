import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type { BannerConfigurations } from "./types";

export function script(props: BannerConfigurations) {
	const code = source`
		<script>
			${getImportCode(
				[
					"Banner",
					"Content",
					"Text",
					"Graphic",
					"Icon",
					"Actions",
					"Action",
					"Label",
				],
				"banner"
			)}

			let open;
		</script>
	`;
	return removeEmptyLines(code);
}

export function template(configurations: BannerConfigurations) {
	const { centered, fixed, stackedOnMobile } = configurations;

	const code = generateSvelteTagCode({
		tag: "Banner",
		props: [
			"bind:open",
			[fixed, `fixed`],
			[centered, `centered`],
			[!stackedOnMobile, `stackedOnMobile={false}`],
		],
		content: getContentCode(configurations),
	});

	return removeEmptyLines(code);
}

function getContentCode(configurations: BannerConfigurations) {
	return source`
		<Content>
			<Graphic>
				<Icon>report_problem</Icon>
			</Graphic>
			<Text>
				There was a problem processing a transaction on your credit card.
			</Text>
		</Content>
		<Actions>
			<Action type="secondary">
				<Label>Secondary</Label>
			</Action>
			<Action type="primary">
				<Label>Primary</Label>
			</Action>
		</Actions>
	`;
}
