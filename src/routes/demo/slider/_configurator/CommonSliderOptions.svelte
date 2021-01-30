<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	export let disabled: boolean;
	export let label: string;

	let useLabel: boolean;

	$: label = useLabel ? "Label" : undefined;
</script>

<Checkbox bind:checked={disabled} label="Disabled" on:change />
<Checkbox bind:checked={useLabel} label="Use Label" on:change />
