<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { ConfigurationsGrid } from "../../atoms/configurations";

	export let title;
</script>

<div class="configurations-section">
	{#if title}<Typography>{title}</Typography>{/if}
	<ConfigurationsGrid>
		<slot />
	</ConfigurationsGrid>
</div>

<style>
	.configurations-section:not(:first-child) {
		margin-top: 1em;
	}
</style>
