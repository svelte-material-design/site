<script lang="ts">
	import {
		InputField,
		InputFieldVariant,
		InputFieldType,
	} from "@smui/core/textfield";
	import HelperText from "./_HelperText.svelte";
	import { Icon } from "@smui/core/textfield/icon";
	import { CharacterCounter } from "@smui/core/textfield/character-counter";
	import { IconType } from "src/components/configurator/common-options/IconTypeOption.svelte";

	let className: string;
	export { className as class };

	export let variant: InputFieldVariant;
	export let label: boolean;
	export let helperText: boolean;
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

	function handleTrailingIconClick() {
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
				<span slot="leadingIcon" style="display: contents;">
					{#if leadingIcon === 'material-icon'}
						<Icon>event</Icon>
					{:else if leadingIcon === 'svg'}
						<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
							<circle cx="12" cy="12" r="12" />
						</Icon>
					{:else if leadingIcon === 'img'}
						<Icon
							type="img"
							props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
					{/if}
				</span>
				<span slot="trailingIcon" style="display: contents;">
					{#if trailingIcon === 'material-icon'}
						<Icon
							role={clearOnTrailingIconClick ? 'button' : undefined}
							on:click={handleTrailingIconClick}>
							{clearOnTrailingIconClick ? 'clear' : 'alarm'}
						</Icon>
					{:else if trailingIcon === 'svg'}
						<Icon
							role={clearOnTrailingIconClick ? 'button' : undefined}
							on:click={handleTrailingIconClick}
							type="svg"
							props={{ viewBox: '0 0 24 24' }}>
							<polygon points="0,24 12,0 24,24" />
						</Icon>
					{:else if trailingIcon === 'img'}
						<Icon
							role={clearOnTrailingIconClick ? 'button' : undefined}
							on:click={handleTrailingIconClick}
							type="img"
							props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
					{/if}
				</span>
				{#if helperText || characterCounter}
					<HelperText
						{helperText}
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
				<span slot="trailingIcon" style="display: contents;">
					{#if trailingIcon === 'material-icon'}
						<Icon
							role={clearOnTrailingIconClick ? 'button' : undefined}
							on:click={handleTrailingIconClick}>
							{clearOnTrailingIconClick ? 'clear' : 'alarm'}
						</Icon>
					{:else if trailingIcon === 'svg'}
						<Icon
							role={clearOnTrailingIconClick ? 'button' : undefined}
							on:click={handleTrailingIconClick}
							type="svg"
							props={{ viewBox: '0 0 24 24' }}>
							<polygon points="0,24 12,0 24,24" />
						</Icon>
					{:else if trailingIcon === 'img'}
						<Icon
							role={clearOnTrailingIconClick ? 'button' : undefined}
							on:click={handleTrailingIconClick}
							type="img"
							props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
					{/if}
				</span>
				{#if helperText || characterCounter}
					<HelperText
						{helperText}
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
				<span slot="leadingIcon" style="display: contents;">
					{#if leadingIcon === 'material-icon'}
						<Icon>event</Icon>
					{:else if leadingIcon === 'svg'}
						<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
							<circle cx="12" cy="12" r="12" />
						</Icon>
					{:else if leadingIcon === 'img'}
						<Icon
							type="img"
							props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
					{/if}
				</span>
				{#if helperText || characterCounter}
					<HelperText
						{helperText}
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
			<span slot="leadingIcon" style="display: contents;">
				{#if leadingIcon === 'material-icon'}
					<Icon>event</Icon>
				{:else if leadingIcon === 'svg'}
					<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
						<circle cx="12" cy="12" r="12" />
					</Icon>
				{:else if leadingIcon === 'img'}
					<Icon
						type="img"
						props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
				{/if}
			</span>
			<span slot="trailingIcon" style="display: contents;">
				{#if trailingIcon === 'material-icon'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}>
						{clearOnTrailingIconClick ? 'clear' : 'alarm'}
					</Icon>
				{:else if trailingIcon === 'svg'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="svg"
						props={{ viewBox: '0 0 24 24' }}>
						<polygon points="0,24 12,0 24,24" />
					</Icon>
				{:else if trailingIcon === 'img'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="img"
						props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
				{/if}
			</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
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
			<span slot="trailingIcon" style="display: contents;">
				{#if trailingIcon === 'material-icon'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}>
						{clearOnTrailingIconClick ? 'clear' : 'alarm'}
					</Icon>
				{:else if trailingIcon === 'svg'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="svg"
						props={{ viewBox: '0 0 24 24' }}>
						<polygon points="0,24 12,0 24,24" />
					</Icon>
				{:else if trailingIcon === 'img'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="img"
						props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
				{/if}
			</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
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
			<span slot="leadingIcon" style="display: contents;">
				{#if leadingIcon === 'material-icon'}
					<Icon>event</Icon>
				{:else if leadingIcon === 'svg'}
					<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
						<circle cx="12" cy="12" r="12" />
					</Icon>
				{:else if leadingIcon === 'img'}
					<Icon
						type="img"
						props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
				{/if}
			</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
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
			<span slot="leadingIcon" style="display: contents;">
				{#if leadingIcon === 'material-icon'}
					<Icon>event</Icon>
				{:else if leadingIcon === 'svg'}
					<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
						<circle cx="12" cy="12" r="12" />
					</Icon>
				{:else if leadingIcon === 'img'}
					<Icon
						type="img"
						props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
				{/if}
			</span>
			<span slot="trailingIcon" style="display: contents;">
				{#if trailingIcon === 'material-icon'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}>
						{clearOnTrailingIconClick ? 'clear' : 'alarm'}
					</Icon>
				{:else if trailingIcon === 'svg'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="svg"
						props={{ viewBox: '0 0 24 24' }}>
						<polygon points="0,24 12,0 24,24" />
					</Icon>
				{:else if trailingIcon === 'img'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="img"
						props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
				{/if}
			</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
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
			<span slot="trailingIcon" style="display: contents;">
				{#if trailingIcon === 'material-icon'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}>
						{clearOnTrailingIconClick ? 'clear' : 'alarm'}
					</Icon>
				{:else if trailingIcon === 'svg'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="svg"
						props={{ viewBox: '0 0 24 24' }}>
						<polygon points="0,24 12,0 24,24" />
					</Icon>
				{:else if trailingIcon === 'img'}
					<Icon
						role={clearOnTrailingIconClick ? 'button' : undefined}
						on:click={handleTrailingIconClick}
						type="img"
						props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
				{/if}
			</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
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
			<span slot="leadingIcon" style="display: contents;">
				{#if leadingIcon === 'material-icon'}
					<Icon>event</Icon>
				{:else if leadingIcon === 'svg'}
					<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
						<circle cx="12" cy="12" r="12" />
					</Icon>
				{:else if leadingIcon === 'img'}
					<Icon
						type="img"
						props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
				{/if}
			</span>
			{#if helperText || characterCounter}
				<HelperText
					{helperText}
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
		<span slot="leadingIcon" style="display: contents;">
			{#if leadingIcon === 'material-icon'}
				<Icon>event</Icon>
			{:else if leadingIcon === 'svg'}
				<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
					<circle cx="12" cy="12" r="12" />
				</Icon>
			{:else if leadingIcon === 'img'}
				<Icon
					type="img"
					props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
			{/if}
		</span>
		<span slot="trailingIcon" style="display: contents;">
			{#if trailingIcon === 'material-icon'}
				<Icon
					role={clearOnTrailingIconClick ? 'button' : undefined}
					on:click={handleTrailingIconClick}>
					{clearOnTrailingIconClick ? 'clear' : 'alarm'}
				</Icon>
			{:else if trailingIcon === 'svg'}
				<Icon
					role={clearOnTrailingIconClick ? 'button' : undefined}
					on:click={handleTrailingIconClick}
					type="svg"
					props={{ viewBox: '0 0 24 24' }}>
					<polygon points="0,24 12,0 24,24" />
				</Icon>
			{:else if trailingIcon === 'img'}
				<Icon
					role={clearOnTrailingIconClick ? 'button' : undefined}
					on:click={handleTrailingIconClick}
					type="img"
					props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
			{/if}
		</span>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
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
		<span slot="trailingIcon" style="display: contents;">
			{#if trailingIcon === 'material-icon'}
				<Icon
					role={clearOnTrailingIconClick ? 'button' : undefined}
					on:click={handleTrailingIconClick}>
					{clearOnTrailingIconClick ? 'clear' : 'alarm'}
				</Icon>
			{:else if trailingIcon === 'svg'}
				<Icon
					role={clearOnTrailingIconClick ? 'button' : undefined}
					on:click={handleTrailingIconClick}
					type="svg"
					props={{ viewBox: '0 0 24 24' }}>
					<polygon points="0,24 12,0 24,24" />
				</Icon>
			{:else if trailingIcon === 'img'}
				<Icon
					role={clearOnTrailingIconClick ? 'button' : undefined}
					on:click={handleTrailingIconClick}
					type="img"
					props={{ src: '/icons/emojis/grinning-face.png', alt: 'Grinning face' }} />
			{/if}
		</span>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
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
		<span slot="leadingIcon" style="display: contents;">
			{#if leadingIcon === 'material-icon'}
				<Icon>event</Icon>
			{:else if leadingIcon === 'svg'}
				<Icon type="svg" props={{ viewBox: '0 0 24 24' }}>
					<circle cx="12" cy="12" r="12" />
				</Icon>
			{:else if leadingIcon === 'img'}
				<Icon
					type="img"
					props={{ src: '/icons/emojis/upside-down-face.png', alt: 'Upside down face' }} />
			{/if}
		</span>
		{#if helperText || characterCounter}
			<HelperText
				{helperText}
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
				persistent={persistentHelperText}
				{characterCounter} />
		{/if}
	</InputField>
{/if}
