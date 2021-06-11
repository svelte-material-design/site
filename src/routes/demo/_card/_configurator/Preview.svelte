<svelte:options immutable={true} />

<script lang="ts">
	import { Card } from "@svelte-material-design/core/card";
	import Body from "./body/Body.svelte";
	import Actions from "./actions/Actions.svelte";
	import Head from "./head/Head.svelte";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();
</script>

<Card
	variant={$configurations$.outlined ? "outlined" : undefined}
	style="min-width: {!$configurations$.horizontalLayout ? 350 : 550}px"
>
	<Head configurations={$configurations$} />
	<Body configurations={$configurations$} />
	<Actions configurations={$configurations$} />
</Card>
