<svelte:options immutable={true} />

<script lang="ts">
	import {
		NavList,
		NavItem,
		NavItemContent,
	} from "@svelte-material-design/core/drawer";
	import { getLayoutPath } from "src/contexts";
	import { menuItems } from "./menuItems";

	const currentPath = getLayoutPath();

	function getHref(menuitem: typeof menuItems[0]) {
		return `${currentPath}/${menuitem.route}`;
	}

	function getIndent(menuitem: typeof menuItems[0]) {
		return 8 + menuitem.indent * 8 + "px";
	}
</script>

<div class="components-menu">
	<NavList>
		{#each menuItems as menuItem}
			<NavItem
				style="--components-menu-item-indent: {getIndent(menuItem)}"
				class="menu-item"
				href={getHref(menuItem)}
			>
				<NavItemContent>{menuItem.name}</NavItemContent>
			</NavItem>
		{/each}
	</NavList>
</div>

<style lang="scss">
	.components-menu {
		:global(.menu-item) {
			padding-left: var(--components-menu-item-indent);
		}
	}
</style>
