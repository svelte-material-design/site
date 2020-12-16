<script lang="ts">
	import {
		InputField,
		InputFieldVariant,
		InputFieldType,
	} from "@smui/core/textfield";
	import HelperText from "./_HelperText.svelte";
	import { IconType } from "src/components/configurator/smui-components/icons/IconTypeOption.svelte";
	import LeadingIcon from "./_LeadingIcon.svelte";
	import TrailingIcon from "./_TrailingIcon.svelte";

	let className: string;
	export { className as class };

	export let ripple: boolean;
	export let lineRipple: boolean;
	export let variant: InputFieldVariant;
	export let label: boolean;
	export let helperText: boolean;
	export let helperTextAsValidationMsg: boolean;
	export let persistentHelperText: boolean;
	export let characterCounter: boolean;
	export let type: InputFieldType;
	export let prefix: string;
	export let suffix: string;
	export let readonly: boolean;

	export let density: number;

	export let leadingIcon: IconType;
	export let trailingIcon: IconType;
	export let clearOnTrailingIconClick: boolean;

	export let useDatalist: boolean;
	export let placeholder: string;
	export let size: number;
	export let title: string;
	export let maxlength: number;
	export let minlength: number;
	export let autocomplete: string;
	export let pattern: string;
	export let required: boolean;
	export let formnovalidate: boolean;
	export let step: number;
	export let min: number;
	export let max: number;

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

{#if label}
	{#if useDatalist}
		{#if trailingIcon && leadingIcon}
			<InputField
				class={className}
				bind:value
				bind:dirty
				bind:invalid
				name="input-field"
				{ripple}
				{lineRipple}
				{variant}
				{type}
				{readonly}
				{formnovalidate}
				{required}
				{title}
				{placeholder}
				{size}
				{autocomplete}
				{pattern}
				{prefix}
				{suffix}
				{maxlength}
				{minlength}
				{step}
				{min}
				{max}
				{density}>
				<span slot="label">Label</span>
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
				<div slot="options">
					<option value="Red Dead Redemption" />
					<option value="Grand Theft Auto" />
					<option value="Max Payne" />
				</div>
			</InputField>
		{:else if trailingIcon}
			<InputField
				class={className}
				bind:value
				bind:dirty
				bind:invalid
				name="input-field"
				{ripple}
				{lineRipple}
				{variant}
				{type}
				{readonly}
				{formnovalidate}
				{required}
				{title}
				{placeholder}
				{size}
				{autocomplete}
				{pattern}
				{prefix}
				{suffix}
				{maxlength}
				{minlength}
				{step}
				{min}
				{max}
				{density}>
				<span slot="label">Label</span>
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
				<div slot="options">
					<option value="Red Dead Redemption" />
					<option value="Grand Theft Auto" />
					<option value="Max Payne" />
				</div>
			</InputField>
		{:else if leadingIcon}
			<InputField
				class={className}
				bind:value
				bind:dirty
				bind:invalid
				name="input-field"
				{ripple}
				{lineRipple}
				{variant}
				{type}
				{readonly}
				{formnovalidate}
				{required}
				{title}
				{placeholder}
				{size}
				{autocomplete}
				{pattern}
				{prefix}
				{suffix}
				{maxlength}
				{minlength}
				{step}
				{min}
				{max}
				{density}>
				<span slot="label">Label</span>
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
				<div slot="options">
					<option value="Red Dead Redemption" />
					<option value="Grand Theft Auto" />
					<option value="Max Payne" />
				</div>
			</InputField>
		{:else}
			<InputField
				class={className}
				bind:value
				bind:dirty
				bind:invalid
				name="input-field"
				{ripple}
				{lineRipple}
				{variant}
				{type}
				{readonly}
				{formnovalidate}
				{required}
				{title}
				{placeholder}
				{size}
				{autocomplete}
				{pattern}
				{prefix}
				{suffix}
				{maxlength}
				{minlength}
				{step}
				{min}
				{max}
				{density}>
				<span slot="label">Label</span>
				{#if helperText || characterCounter}
					<HelperText
						{helperText}
						validationMsg={helperTextAsValidationMsg}
						persistent={persistentHelperText}
						{characterCounter} />
				{/if}
				<div slot="options">
					<option value="Red Dead Redemption" />
					<option value="Grand Theft Auto" />
					<option value="Max Payne" />
				</div>
			</InputField>
		{/if}
	{:else if trailingIcon && leadingIcon}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
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
		</InputField>
	{:else if trailingIcon}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
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
		</InputField>
	{:else if leadingIcon}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
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
		</InputField>
	{:else}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			{/if}
		</InputField>
	{/if}
{:else if useDatalist}
	{#if trailingIcon && leadingIcon}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
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
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
		</InputField>
	{:else if trailingIcon}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
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
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
		</InputField>
	{:else if leadingIcon}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
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
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
		</InputField>
	{:else}
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			name="input-field"
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{readonly}
			{formnovalidate}
			{required}
			{title}
			{placeholder}
			{size}
			{autocomplete}
			{pattern}
			{prefix}
			{suffix}
			{maxlength}
			{minlength}
			{step}
			{min}
			{max}
			{density}>
			<span slot="label">Label</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			{/if}
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
		</InputField>
	{/if}
{:else if trailingIcon && leadingIcon}
	<InputField
		class={className}
		bind:value
		bind:dirty
		bind:invalid
		name="input-field"
		{ripple}
		{lineRipple}
		{variant}
		{type}
		{readonly}
		{formnovalidate}
		{required}
		{title}
		{placeholder}
		{size}
		{autocomplete}
		{pattern}
		{prefix}
		{suffix}
		{maxlength}
		{minlength}
		{step}
		{min}
		{max}
		{density}>
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
	</InputField>
{:else if trailingIcon}
	<InputField
		class={className}
		bind:value
		bind:dirty
		bind:invalid
		name="input-field"
		{ripple}
		{lineRipple}
		{variant}
		{type}
		{readonly}
		{formnovalidate}
		{required}
		{title}
		{placeholder}
		{size}
		{autocomplete}
		{pattern}
		{prefix}
		{suffix}
		{maxlength}
		{minlength}
		{step}
		{min}
		{max}
		{density}>
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
	</InputField>
{:else if leadingIcon}
	<InputField
		class={className}
		bind:value
		bind:dirty
		bind:invalid
		name="input-field"
		{ripple}
		{lineRipple}
		{variant}
		{type}
		{readonly}
		{formnovalidate}
		{required}
		{title}
		{placeholder}
		{size}
		{autocomplete}
		{pattern}
		{prefix}
		{suffix}
		{maxlength}
		{minlength}
		{step}
		{min}
		{max}
		{density}>
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
	</InputField>
{:else}
	<InputField
		class={className}
		bind:value
		bind:dirty
		bind:invalid
		name="input-field"
		{ripple}
		{lineRipple}
		{variant}
		{type}
		{readonly}
		{formnovalidate}
		{required}
		{title}
		{placeholder}
		{size}
		{autocomplete}
		{pattern}
		{prefix}
		{suffix}
		{maxlength}
		{minlength}
		{step}
		{min}
		{max}
		{density}>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
				validationMsg={helperTextAsValidationMsg}
				persistent={persistentHelperText}
				{characterCounter} />
		{/if}
	</InputField>
{/if}
