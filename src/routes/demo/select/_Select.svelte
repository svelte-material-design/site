<script lang="ts">
	import { Option, Select, SelectVariant } from "@smui/core/select";
	import { Icon } from "@smui/core/select/icon";
	import { HelperText } from "@smui/core/select/helper-text";
	import { IconType } from "src/components/configurator/common-options/icons/IconTypeOption.svelte";
	import LeadingIcon from "src/components/configurator/common-options/icons/LeadingIcon.svelte";

	let className: string;
	export { className as class };

	export let variant: SelectVariant;
	export let ripple: boolean;
	export let lineRipple: boolean;
	export let nullable: boolean;
	export let leadingIcon: IconType;

	export let shapeRadius: string;
	export let density: number;

	export let label: string;
	export let helperText: boolean;
	export let helperTextAsValidationMsg: boolean;
	export let persistentValidationMsg: boolean;

	export let readonly: boolean;
	export let name: string;
	export let title: string;
	export let required: boolean;
	export let disabled: boolean;

	export let value: string;
	export let dirty: boolean;
	export let invalid: boolean;
</script>

<svelte:options immutable={true} />

{#if label}
	{#if leadingIcon}
		<Select
			bind:value
			bind:dirty
			bind:invalid
			class={className}
			{name}
			{title}
			{variant}
			{shapeRadius}
			{density}
			{ripple}
			{lineRipple}
			{disabled}
			{required}
			{readonly}
			{nullable}>
			<span slot="label">{label}</span>
			<span slot="leadingIcon">
				<LeadingIcon component={Icon} type={leadingIcon} />
			</span>
			<div slot="options">
				<Option />
				<Option value="superman">Superman</Option>
				<Option value="cpt-america">Capitan America</Option>
				<Option value="homelander">Homelander</Option>
			</div>
			{#if helperText}
				<HelperText
					{persistentValidationMsg}
					validationMsg={helperTextAsValidationMsg}>
					Helper Text
				</HelperText>
			{/if}
		</Select>
	{:else}
		<Select
			bind:value
			bind:dirty
			bind:invalid
			class={className}
			{name}
			{title}
			{variant}
			{shapeRadius}
			{density}
			{ripple}
			{lineRipple}
			{disabled}
			{required}
			{readonly}
			{nullable}>
			<span slot="label">{label}</span>
			<div slot="options">
				<Option />
				<Option value="superman">Superman</Option>
				<Option value="cpt-america">Capitan America</Option>
				<Option value="homelander">Homelander</Option>
			</div>
			{#if helperText}
				<HelperText
					{persistentValidationMsg}
					validationMsg={helperTextAsValidationMsg}>
					Helper Text
				</HelperText>
			{/if}
		</Select>
	{/if}
{:else if leadingIcon}
	<Select
		bind:value
		bind:dirty
		bind:invalid
		class={className}
		{name}
		{title}
		{variant}
		{shapeRadius}
		{density}
		{ripple}
		{lineRipple}
		{disabled}
		{required}
		{readonly}
		{nullable}>
		<span slot="leadingIcon">
			<LeadingIcon component={Icon} type={leadingIcon} />
		</span>
		<div slot="options">
			<Option />
			<Option value="superman">Superman</Option>
			<Option value="cpt-america">Capitan America</Option>
			<Option value="homelander">Homelander</Option>
		</div>
		{#if helperText}
			<HelperText
				{persistentValidationMsg}
				validationMsg={helperTextAsValidationMsg}>
				Helper Text
			</HelperText>
		{/if}
	</Select>
{:else}
	<Select
		bind:value
		bind:dirty
		bind:invalid
		class={className}
		{name}
		{title}
		{variant}
		{shapeRadius}
		{density}
		{ripple}
		{lineRipple}
		{disabled}
		{required}
		{readonly}
		{nullable}>
		<div slot="options">
			<Option />
			<Option value="superman">Superman</Option>
			<Option value="cpt-america">Capitan America</Option>
			<Option value="homelander">Homelander</Option>
		</div>
		{#if helperText}
			<HelperText
				{persistentValidationMsg}
				validationMsg={helperTextAsValidationMsg}>
				Helper Text
			</HelperText>
		{/if}
	</Select>
{/if}
