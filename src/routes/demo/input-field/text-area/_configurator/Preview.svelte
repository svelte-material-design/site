<svelte:options immutable={true} />

<script lang="ts">
	import { TextAreaField } from "@svelte-material-design/core/textfield";
	import { HelperText, Content } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<TextAreaField
	bind:value={$configurations$.value}
	bind:invalid={$configurations$.invalid}
	ripple={$configurations$.ripple}
	disabled={$configurations$.disabled}
	on:input={updateInstance}
	let:leadingClassName
	let:trailingClassName
>
	<Content
		bind:configurations={$configurations$}
		{leadingClassName}
		{trailingClassName}
	/>
	{#if $configurations$.helperText || $configurations$.characterCounter}
		<HelperText bind:configurations={$configurations$} />
	{/if}
</TextAreaField>
