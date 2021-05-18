<svelte:options immutable={true} />

<script lang="ts">
	import { Checkbox } from "src/components/configurator/atoms/configurations";

	export let checked: boolean;

</script>

<Checkbox bind:checked label="Nullable" on:change />
