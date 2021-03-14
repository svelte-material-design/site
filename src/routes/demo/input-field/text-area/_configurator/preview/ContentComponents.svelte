<svelte:options immutable={true} />

<script lang="ts">
	import { Input } from ".";
	import { InputFieldConfigurations } from "../types";

	export let configurations: InputFieldConfigurations;
</script>

<Input {configurations} />
