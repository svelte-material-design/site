<svelte:options immutable={true} />

<script lang="ts">
	import { Card } from "@svelte-material-design/core/card";
	import Body from "./body/Body.svelte";
	import Actions from "./actions/Actions.svelte";
	import Head from "./head/Head.svelte";
	import type { CardConfigurations } from "./types";

	export let cardConfigurations: CardConfigurations;
</script>

<Card
	variant={cardConfigurations.outlined ? "outlined" : undefined}
	style="min-width: {!cardConfigurations.horizontalLayout ? 350 : 550}px"
>
	<Head {...cardConfigurations} />
	<Body {...cardConfigurations} />
	<Actions actionsLayout={cardConfigurations.actionsLayout} />
</Card>
