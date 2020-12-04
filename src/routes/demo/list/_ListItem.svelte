<script lang="ts">
	import {
		Item,
		Content,
		ListRole,
		Icon,
		ListType,
		ListItemsRows,
		PrimaryText,
		SecondaryText,
	} from "@smui/core/list";
	import { Radio } from "@smui/core/radio";
	import { Checkbox } from "@smui/core/checkbox";
	import { IconType } from "src/components/configurator/common-options/icons/IconTypeOption.svelte";
	import LeadingIcon from "src/components/configurator/common-options/icons/LeadingIcon.svelte";
	import TrailingIcon from "src/components/configurator/common-options/icons/TrailingIcon.svelte";
	import {
		getImgPlaceholderSrc,
		ImgPlaceholderParams,
	} from "src/functions/imgPlacehoder";

	export let value: string;
	export let disabled: boolean;
	export let ripple: boolean;
	export let selected: boolean;
	export let ariaLabel: string;
	export let title: string;
	export let label: string;
	export let labelRow2: string;
	export let labelRow3: string;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clickableLeadingIcon: boolean;
	export let clickableTrailingIcon: boolean;

	export let listRole: ListRole | "listbox";
	export let listType: ListType;
	export let listItemsRows: ListItemsRows;

	let imageRes: ImgPlaceholderParams;
	$: switch (listType) {
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

<svelte:options immutable={true} />

<Item
	bind:selected
	{value}
	{disabled}
	{ripple}
	{ariaLabel}
	{title}
	let:selected
	on:change>
	<svelte-fragment slot="leading">
		{#if listType === 'image' || listType === 'avatar' || listType === 'thumbnail' || listType === 'video'}
			<img alt={imageTxt} src={imageSrc} />
		{:else if listType === 'icon'}
			<LeadingIcon
				type={leadingIcon}
				component={Icon}
				button={clickableLeadingIcon} />
		{:else if listRole === 'radiogroup'}
			<span>
				<Radio checked={selected} />
			</span>
		{:else if listRole === 'group'}
			<span>
				<Checkbox checked={selected} />
			</span>
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
				button={clickableTrailingIcon} />
		{/if}
	</svelte-fragment>
</Item>
