<svelte:options immutable={true} />

<script lang="ts">
	import {
		Drawer,
		Content,
	} from "@svelte-material-design/core/drawer";
	import { ComponentsMenu } from ".";

	export let open: boolean;
	export let dismissible: boolean = true;
</script>

<Drawer variant={dismissible ? "modal" : "permanent"} bind:open>
	<Content>
		<ComponentsMenu />
	</Content>
</Drawer>
