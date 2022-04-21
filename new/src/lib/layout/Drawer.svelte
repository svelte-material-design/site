<svelte:options immutable={true} />

<script lang="ts">
	import { Drawer, Content } from '@svelte-material-design/core/drawer';
	import { ComponentsMenu } from '.';

	export let open: boolean = false;
	export let dismissible: boolean = true;
</script>

<Drawer class="svmd-site-drawer" variant={dismissible ? 'modal' : 'permanent'} bind:open>
	<Content>
		<ComponentsMenu />
	</Content>
</Drawer>

<style lang="scss" global>
	.svmd-site-drawer.svmd-site-drawer {
		position: fixed;
	}
</style>
