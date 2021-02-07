<svelte:options immutable={true} />

<script lang="ts">
	import {
		Content,
		Icon,
		ListItemsStyle,
		PrimaryText,
		SecondaryText,
	} from "@smui/core/list";
	import { NavItem } from "@smui/core/list/nav-list";
	import {
		LeadingIcon,
		TrailingIcon,
	} from "src/components/configurator/smui-components/icons";
	import type { IconType } from "src/components/configurator/smui-components/icons";
	import {
		getImgPlaceholderSrc,
		ImgPlaceholderParams,
	} from "src/functions/imgPlacehoder";

	export let disabled: boolean;
	export let ripple: boolean;
	export let activated: boolean;
	export let ariaLabel: string;
	export let title: string;
	export let label: string;
	export let labelRow2: string;
	export let labelRow3: string;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clickableLeadingIcon: boolean;
	export let clickableTrailingIcon: boolean;

	export let listItemsStyle: ListItemsStyle;
	export let listItemsRows: number;

	export let href: string = undefined;

	let imageRes: ImgPlaceholderParams;
	$: switch (listItemsStyle) {
		case "image":
			imageRes = { width: 56, height: 56 };
			break;
		case "avatar":
			imageRes = { width: 40, height: 40 };
			break;
		case "thumbnail":
			imageRes = { width: 40, height: 40 };
			break;
		case "video":
			imageRes = { width: 100, height: 56 };
			break;
	}
	let imageTxt: string;
	$: if (imageRes) imageTxt = `${imageRes.width}x${imageRes.height}`;
	let imageSrc: string;
	$: if (imageRes)
		imageSrc = getImgPlaceholderSrc({ ...imageRes, text: imageTxt });

	export function getImageSrc() {
		return imageSrc;
	}

	export function getImageTxt() {
		return imageTxt;
	}
</script>

<NavItem {activated} {disabled} {ripple} {ariaLabel} {title} {href}>
	<svelte-fragment slot="leading">
		{#if listItemsStyle === "image" || listItemsStyle === "avatar" || listItemsStyle === "thumbnail" || listItemsStyle === "video"}
			<img alt={imageTxt} src={imageSrc} />
		{:else if listItemsStyle === "icon"}
			<LeadingIcon
				type={leadingIcon}
				component={Icon}
				button={clickableLeadingIcon}
			/>
		{/if}
	</svelte-fragment>
	{#if label}
		<Content>
			{#if listItemsRows === 1}
				{label}
			{:else if listItemsRows > 1}
				<PrimaryText>{label}</PrimaryText>
				<SecondaryText>{labelRow2}</SecondaryText>
			{/if}
			{#if listItemsRows === 3}
				<SecondaryText>{labelRow3}</SecondaryText>
			{/if}
		</Content>
	{/if}
	<svelte-fragment slot="trailing">
		{#if trailingIcon}
			<TrailingIcon
				type={trailingIcon}
				component={Icon}
				button={clickableTrailingIcon}
			/>
		{/if}
	</svelte-fragment>
</NavItem>
