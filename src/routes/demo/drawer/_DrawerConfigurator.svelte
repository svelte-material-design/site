<svelte:options immutable={true} />

<script lang="ts">
	import { FormField } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Select, Option } from "@smui/core/select";
	import { Checkbox } from "@smui/core/checkbox";

	let open: boolean;
	let title: boolean;
	let subtitle: boolean;
	let variant: DrawerVariant = "permanent";
	let layout: "below-top-app-bar" | "full-height";

	$: if (!title) subtitle = false;

	let svelteCode: string;
	let scssCode: string;

	$: if (variant === "permanent") open = true;

	//#region content code

	//#endregion
</script>

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<div class="drawer-container" />
	</div>
	<div slot="optionsSidebar" class="options-sidebar" />
</Configurator>

<style lang="scss">
	.drawer-container {
		position: relative;
		display: flex;
		height: 20em;
		border: 1px solid rgba(0, 0, 0, 0.1);
		overflow: hidden;
		z-index: 0;
		width: 25em;

		:global(.mdc-drawer-scrim) {
			position: absolute;
		}

		:global(.smui-app-content__main-content) {
			padding: 16px;
		}

		:global(.top-app-bar) {
			position: absolute;
		}
	}
</style>
