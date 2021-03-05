<svelte:options immutable={true} />

<script lang="ts">
	import { InputField } from "@svelte-material-design/core/textfield";
	import { HelperText, Content } from "./preview";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<InputField
	bind:value={$configurations$.value}
	bind:dirty={$configurations$.dirty}
	bind:invalid={$configurations$.invalid}
	ripple={$configurations$.ripple}
	lineRipple={$configurations$.lineRipple}
	variant={$configurations$.variant}
	disabled={$configurations$.disabled}
>
	<Content bind:configurations={$configurations$} />
	{#if $configurations$.helperText || $configurations$.characterCounter}
		<HelperText bind:configurations={$configurations$} />
	{/if}
</InputField>
