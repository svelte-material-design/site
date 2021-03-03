<svelte:options immutable={true} />

<script lang="ts">
	import { InputField, Content } from "@svelte-material-design/core/textfield";
	import { HelperText } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
	let value: any;
	let dirty: boolean;
	let invalid: boolean;
</script>

<InputField
	bind:value
	bind:dirty
	bind:invalid
	ripple={$configurations$.ripple}
	lineRipple={$configurations$.lineRipple}
	variant={$configurations$.variant}
	disabled={$configurations$.disabled}
>
	<Content configurations={$configurations$} />
	{#if $configurations$.helperText || $configurations$.characterCounter}
		<HelperText configurations={$configurations$} />
	{/if}
</InputField>
