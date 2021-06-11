<svelte:options immutable={true} />

<script lang="ts">
	import { TextAreaField } from "@svelte-material-design/core/textfield";
	import { HelperText, Content } from "./components/preview";
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
	{#if $configurations$.helperText || ($configurations$.characterCounter && !$configurations$.useInternalCounter)}
		<HelperText bind:configurations={$configurations$} />
	{/if}
</TextAreaField>
