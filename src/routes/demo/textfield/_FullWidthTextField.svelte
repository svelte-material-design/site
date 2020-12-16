<script lang="ts">
	import {
		FullWidthTextField,
		FullWidthTextFieldType,
	} from "@smui/core/textfield";
	import { IconType } from "src/components/configurator/smui-components/icons/IconTypeOption.svelte";
	import HelperText from "./_HelperText.svelte";
	import TrailingIcon from "./_TrailingIcon.svelte";
	import LeadingIcon from "./_LeadingIcon.svelte";

	export let lineRipple: boolean;
	export let helperText: boolean;
	export let helperTextAsValidationMsg: boolean;
	export let persistentHelperText: boolean;
	export let characterCounter: boolean;
	export let type: FullWidthTextFieldType;
	export let prefix: string;
	export let suffix: string;
	export let readonly: boolean;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clearOnTrailingIconClick: boolean;

	export let useDatalist: boolean;
	export let placeholder: string;
	export let title: string;
	export let maxlength: number;
	export let minlength: number;
	export let autocomplete: string;
	export let pattern: string;
	export let required: boolean;
	export let formnovalidate: boolean;

	export let value: any;
	export let dirty: boolean;
	export let invalid: boolean;

	function clear() {
		if (clearOnTrailingIconClick) {
			value = "";
		}
	}
</script>

<svelte:options immutable={true} />

{#if useDatalist}
	{#if leadingIcon && trailingIcon}
		<FullWidthTextField
			bind:value
			bind:dirty
			bind:invalid
			name="full-width-text-field"
			{lineRipple}
			{title}
			{type}
			{placeholder}
			{prefix}
			{suffix}
			{minlength}
			{maxlength}
			{required}
			{readonly}
			{formnovalidate}
			{autocomplete}
			{pattern}>
			<span slot="leadingIcon">
				<LeadingIcon type={leadingIcon} />
			</span>
			<span slot="trailingIcon">
				<TrailingIcon
					type={trailingIcon}
					{clearOnTrailingIconClick}
					on:click={clear} />
			</span>
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			{/if}
		</FullWidthTextField>
	{:else if leadingIcon}
		<FullWidthTextField
			bind:value
			bind:dirty
			bind:invalid
			name="full-width-text-field"
			{lineRipple}
			{title}
			{type}
			{placeholder}
			{prefix}
			{suffix}
			{minlength}
			{maxlength}
			{required}
			{readonly}
			{formnovalidate}
			{autocomplete}
			{pattern}>
			<span slot="leadingIcon">
				<LeadingIcon type={leadingIcon} />
			</span>
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			{/if}
		</FullWidthTextField>
	{:else if trailingIcon}
		<FullWidthTextField
			bind:value
			bind:dirty
			bind:invalid
			name="full-width-text-field"
			{lineRipple}
			{title}
			{type}
			{placeholder}
			{prefix}
			{suffix}
			{minlength}
			{maxlength}
			{required}
			{readonly}
			{formnovalidate}
			{autocomplete}
			{pattern}>
			<span slot="trailingIcon">
				<TrailingIcon
					type={trailingIcon}
					{clearOnTrailingIconClick}
					on:click={clear} />
			</span>
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			{/if}
		</FullWidthTextField>
	{:else}
		<FullWidthTextField
			bind:value
			bind:dirty
			bind:invalid
			name="full-width-text-field"
			{lineRipple}
			{title}
			{type}
			{placeholder}
			{prefix}
			{suffix}
			{minlength}
			{maxlength}
			{required}
			{readonly}
			{formnovalidate}
			{autocomplete}
			{pattern}>
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			{/if}
		</FullWidthTextField>
	{/if}
{:else if leadingIcon && trailingIcon}
	<FullWidthTextField
		bind:value
		bind:dirty
		bind:invalid
		name="full-width-text-field"
		{lineRipple}
		{title}
		{type}
		{placeholder}
		{prefix}
		{suffix}
		{minlength}
		{maxlength}
		{required}
		{readonly}
		{formnovalidate}
		{autocomplete}
		{pattern}>
		<span slot="leadingIcon">
			<LeadingIcon type={leadingIcon} />
		</span>
		<span slot="trailingIcon">
			<TrailingIcon
				type={trailingIcon}
				{clearOnTrailingIconClick}
				on:click={clear} />
		</span>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
				validationMsg={helperTextAsValidationMsg}
				persistent={persistentHelperText}
				{characterCounter} />
		{/if}
	</FullWidthTextField>
{:else if leadingIcon}
	<FullWidthTextField
		bind:value
		bind:dirty
		bind:invalid
		name="full-width-text-field"
		{lineRipple}
		{title}
		{type}
		{placeholder}
		{prefix}
		{suffix}
		{minlength}
		{maxlength}
		{required}
		{readonly}
		{formnovalidate}
		{autocomplete}
		{pattern}>
		<span slot="leadingIcon">
			<LeadingIcon type={leadingIcon} />
		</span>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
				validationMsg={helperTextAsValidationMsg}
				persistent={persistentHelperText}
				{characterCounter} />
		{/if}
	</FullWidthTextField>
{:else if trailingIcon}
	<FullWidthTextField
		bind:value
		bind:dirty
		bind:invalid
		name="full-width-text-field"
		{lineRipple}
		{title}
		{type}
		{placeholder}
		{prefix}
		{suffix}
		{minlength}
		{maxlength}
		{required}
		{readonly}
		{formnovalidate}
		{autocomplete}
		{pattern}>
		<span slot="trailingIcon">
			<TrailingIcon
				type={trailingIcon}
				{clearOnTrailingIconClick}
				on:click={clear} />
		</span>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
				validationMsg={helperTextAsValidationMsg}
				persistent={persistentHelperText}
				{characterCounter} />
		{/if}
	</FullWidthTextField>
{:else}
	<FullWidthTextField
		bind:value
		bind:dirty
		bind:invalid
		name="full-width-text-field"
		{lineRipple}
		{title}
		{type}
		{placeholder}
		{prefix}
		{suffix}
		{minlength}
		{maxlength}
		{required}
		{readonly}
		{formnovalidate}
		{autocomplete}
		{pattern}>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
				validationMsg={helperTextAsValidationMsg}
				persistent={persistentHelperText}
				{characterCounter} />
		{/if}
	</FullWidthTextField>
{/if}
