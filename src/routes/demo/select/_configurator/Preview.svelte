<svelte:options immutable={true} />

<script lang="ts">
	import { Select } from "@svelte-material-design/core/select";
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

<Select
	bind:value={$configurations$.value}
	bind:invalid={$configurations$.invalid}
	ripple={$configurations$.ripple}
	lineRipple={$configurations$.lineRipple}
	variant={$configurations$.variant}
	disabled={$configurations$.disabled}
	nullable={$configurations$.nullable}
	readonly={$configurations$.readonly}
	title={$configurations$.title}
	on:input={updateInstance}
>
	<Content bind:configurations={$configurations$} />
	{#if $configurations$.helperText}
		<HelperText bind:configurations={$configurations$} />
	{/if}
</Select>
