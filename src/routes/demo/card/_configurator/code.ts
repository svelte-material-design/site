import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";
import type { CardConfigurations } from "./types";

export function script(configurations: CardConfigurations) {
	const {
		title,
		subtitle,
		text,
		horizontalLayout,
		bodyTitle,
		bodyText,
		bodySubtitle,
		media,
		mediaContent,
		clickableBody,
		actionsLayout,
	} = configurations;

	const importContent =
		title || subtitle || text || bodyTitle || bodySubtitle || bodyText;

	const importIconActions =
		actionsLayout === "all" || actionsLayout === "icons";
	const importActions =
		actionsLayout === "all" ||
		actionsLayout === "single" ||
		actionsLayout === "multi" ||
		actionsLayout === "full-bleed";

	const code = source`
		<script>
			${getImportCode(
				[
					"Card",
					[importContent, "Content"],
					[title, "Title"],
					[subtitle, "SubTitle"],
					[horizontalLayout, "HorizontalLayout"],
					[media, "Media"],
					[mediaContent, "MediaContent"],
					[clickableBody, "PrimaryAction"],
					[importIconActions || importActions, "Actions"],
					[importIconActions, "ActionIcons"],
					[importIconActions, "ActionIcon"],
					[importIconActions, "ActionIconToggle"],
					[importIconActions, "IconOn"],
					[importIconActions, "IconOff"],
					[importActions, "ActionButtons"],
					[importActions, "ActionButton"],
					[importActions, "Label"],
					[importIconActions || importActions, "Icon"],
				],
				"card"
			)}
		</script>
	`;

	return removeEmptyLines(code);
}

export function template(configurations: CardConfigurations) {
	const { outlined, title, subtitle, text, horizontalLayout } = configurations;

	const code = generateSvelteTagCode({
		tag: "Card",
		props: [
			`style="min-width: ${!horizontalLayout ? 350 : 550}px"`,
			[outlined, "outlined"],
		],
		content: source`
			${getContentCode(title, subtitle, text)}
			${getBodyCode(configurations)}
			${getActionsCode(configurations)}
		`,
	});

	return removeEmptyLines(code);
}

function getBodyCode(configurations: CardConfigurations) {
	const {
		bodyTitle,
		bodySubtitle,
		bodyText,
		media,
		mediaContent,
		clickableBody,
		horizontalLayout,
	} = configurations;

	if (!bodyTitle && !bodySubtitle && !bodyText && !media && !mediaContent)
		return "";
	if (!clickableBody) {
		if (horizontalLayout) {
			return source`
				<HorizontalLayout>
					${getMediaCode(configurations)}
					${getContentCode(bodyTitle, bodySubtitle, bodyText)}
				</HorizontalLayout>`;
		} else {
			return source`
				${getMediaCode(configurations)}
				${getContentCode(bodyTitle, bodySubtitle, bodyText)}`;
		}
	} else {
		return source`
			<PrimaryAction>
				<HorizontalLayout>
					${getMediaCode(configurations)}
					${getContentCode(bodyTitle, bodySubtitle, bodyText)}
				</HorizontalLayout>
			</PrimaryAction>
		`;
	}
}

function getContentCode(title: string, subtitle: string, text: string) {
	if (!title && !subtitle && !text) {
		return "";
	}

	const code = source`
		<Content>
			${title ? `<Title>${title}</Title>` : ""}
			${subtitle ? `<SubTitle>${subtitle}</SubTitle>` : ""}
			${text ? `${text}` : ""}
		</Content>
	`;

	return code;
}

function getMediaCode(configurations: CardConfigurations) {
	const { media } = configurations;

	if (!media) return "";
	return source`
		<Media
			class="card-media-${media}"
			aspectRatio="${media}">
			${getMediaContentCode(configurations)}
		</Media>`;
}

function getMediaContentCode(configurations: CardConfigurations) {
	const { mediaContent } = configurations;

	if (mediaContent) {
		return source`
			<MediaContent>
				<Typography
					variant="headline6"
					style="color: white; margin: 1em 0em 0em 1em;">
					${mediaContent}
				</Typography>
			</MediaContent>
		`;
	}

	return "";
}

function getActionsCode(configurations: CardConfigurations) {
	const { actionsLayout } = configurations;

	if (!actionsLayout) return "";

	if (actionsLayout === "full-bleed") {
		return source`
			<Actions fullBleed>
				<ActionButton>
					<Label>Action</Label>
					<Icon>arrow_forward</Icon>
				</ActionButton>
			</Actions>
		`;
	}

	function getButtonCode(label: string, icon: boolean = false) {
		return source`
			<ActionButton>
			<Label>${label}</Label>
			${icon ? `<Icon>refresh</Icon>` : ""}
			</ActionButton>
		`;
	}

	function getActionButtonsCode(configurations: CardConfigurations) {
		const { actionsLayout } = configurations;

		if (
			actionsLayout !== "single" &&
			actionsLayout !== "multi" &&
			actionsLayout !== "all"
		)
			return "";

		return source`
			<ActionButtons>
				${getButtonCode("Action", true)}
				${
					actionsLayout === "multi" || actionsLayout === "all"
						? getButtonCode("Another")
						: ""
				}
			</ActionButtons>
		`;
	}

	function getActionIconsCode(configurations: CardConfigurations) {
		const { actionsLayout } = configurations;

		if (actionsLayout !== "icons" && actionsLayout !== "all") return "";

		return source`
			<ActionsIcon>
				<ActionIconToggle title="Add to favorites">
					<IconOn>favorite</IconOn>
					<IconOff>favorite_border</IconOff>
				</ActionIconToggle>
				<ActionIcon title="Share">
					<Icon>share</Icon>
				</ActionIcon>
				<ActionIcon title="More options">
					<Icon>more_vert</Icon>
				</ActionIcon>
			</ActionsIcon>
		`;
	}

	return source`
		<Actions>
			${getActionButtonsCode(configurations)}
			${getActionIconsCode(configurations)}
		</Actions>`;
}

export function scss(configurations: CardConfigurations) {
	const { media } = configurations;

	if (media === "16x9") {
		return source`
			.card-media-16x9 {
				background-image: url(https://via.placeholder.com/320x180.png?text=16x9);
			}`;
	} else if (media === "square") {
		return source`
			.card-media-square {
				background-image: url(https://via.placeholder.com/320x320.png?text=square);
			}`;
	} else {
		return "";
	}
}
