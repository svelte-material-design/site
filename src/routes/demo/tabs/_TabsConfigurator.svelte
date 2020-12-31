<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import TabsConfigurations from "./_configurations/TabBarConfigurations.svelte";
	import { script, template } from "./code";
	import { IconType } from "src/components/configurator/smui-components/icons";
	import TabBarPreview from "./_preview/TabBar.svelte";
	import { TabConfigurations } from "./types";

	let active: string = undefined;

	//#region configurations
	export let open: boolean = undefined;
	export let timeoutMs: number = undefined;
	export let stacked: boolean = undefined;
	export let leading: boolean = undefined;
	export let closeOnEscape: boolean = true;

	export let showActionBtn: boolean = undefined;
	export let actionRipple: boolean = undefined;
	export let iconActionType: IconType = undefined;
	export let iconActionRipple: boolean = undefined;
	export let showDismiss: boolean = undefined;
	export let dismissRipple: boolean = undefined;
	//#endregion

	let tabs: TabConfigurations[] = [];

	//#region code
	let svelteCode: string = "test";
	let scssCode: string = "";

	$: svelteCode = template({
		open,
		timeoutMs,
		stacked,
		leading,
		closeOnEscape,
		showActionBtn,
		actionRipple,
		iconActionType,
		iconActionRipple,
		showDismiss,
		dismissRipple,
	});
	//#endregion

	function handleUpdate(props) {
		open = props.open;
	}
</script>

<svelte:options immutable={true} />

<div class="configurator">
	<Configurator svelteScriptCode={script} {svelteCode} {scssCode}>
		<svelte-fragment slot="preview">
			<TabBarPreview bind:active {tabs} />
		</svelte-fragment>
		<div slot="optionsSidebar">
			<TabsConfigurations bind:tabsConfigurations={tabs} />
		</div>
	</Configurator>
</div>
