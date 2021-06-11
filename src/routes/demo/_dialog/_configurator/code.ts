import type { DialogConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(props: DialogConfigurations) {
	const { layout } = props;

	const importsCode = removeEmptyLines(source`
		${getImportCode(["Dialog", "Content", "Title", "Actions", "Action"], "dialog")}
		${
			layout === "list"
				? getImportCode(["List", "Item", "Content as ListItemContent"], "list")
				: ""
		}
	`);

	const code = source`
		<script>
			${importsCode}

			let open;
			let closeReason;

			function handleClose(event) {
				closeReason = event.detail.action;
			}
		</script>
	`;

	return code;
}

export function template(configurations: DialogConfigurations) {
	const { stackedButtons, autoStackButtons, fullscreen } = configurations;

	const code = generateSvelteTagCode({
		tag: "Dialog",
		props: [
			`bind:open`,
			`on:closed={handleClose}`,
			[autoStackButtons, "autoStackButtons"],
			[stackedButtons, "stackedButtons"],
			[fullscreen, "fullscreen"],
		],
		content: `
			<Title id="event-title">Dialog title</Title>
			${getContentCode(configurations)}
		`,
	});

	return removeEmptyLines(code);
}

function getContentCode(configurations: DialogConfigurations) {
	const { layout } = configurations;

	if (layout === "alert") {
		return source`
			<Content id="event-content">
				Out of all the dogs, which is the best dog?
			</Content>
			<Actions>
				<Action action="none">
					<Label>None of Them</Label>
				</Action>
				<Action action="all" default>
					<Label>All of Them</Label>
				</Action>
			</Actions>
		`;
	} else if (layout === "list") {
		return source`
			<Content>
				<List>
					{#each [...Array(100)].map((v, i) => i + 1) as item}
						<Item
							props={{ 'data-mdc-dialog-action': \`item #\${item}\` }}>
							<ListItemContent>Item #{item}</ListItemContent>
						</Item>
					{/each}
				</List>
			</Content>
			<Actions>
				<Action action="other">
					<Label>
						A very very very very very very very very long label
					</Label>
				</Action>
				<Action action="ok" default>
					<Label>Ok</Label>
				</Action>
			</Actions>
		`;
	} else {
		return source`
			<Content id="event-content">
				Confirm? (ESC and click outside is like click on "close" action)
			</Content>
			<Actions>
				<Action action="close">
					<Label>Cancel</Label>
				</Action>
				<Action action="accept" default>
					<Label>Accept</Label>
				</Action>
			</Actions>
		`;
	}
}
