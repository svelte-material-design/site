<svelte:options immutable={true} />

<script lang="ts">
	import { InputField } from "@svelte-material-design/core/textfield";
	import { HelperText, Content } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { onMount, tick } from "svelte";

	const { configurations$ } = getConfiguratorContext();

	onMount(async () => {
		await tick();

		updateInstance();
	});

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<InputField
	bind:value={$configurations$.value}
	bind:invalid={$configurations$.invalid}
	ripple={$configurations$.ripple}
	lineRipple={$configurations$.lineRipple}
	variant={$configurations$.variant}
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
</InputField>
