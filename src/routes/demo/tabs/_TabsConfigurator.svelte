<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import TabsConfigurations from "./_TabsConfigurations.svelte";
	import { script, template } from "./code";
	import { IconType } from "src/components/configurator/smui-components/icons";
	import { Tab, Icon, Label } from "@smui/core/tab";
	import { TabBar } from "@smui/core/tab-bar";

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
			<TabBar bind:active>
				<Tab key="tab:1">
					<Label>Tab 1</Label>
				</Tab>
				<Tab key="tab:2">
					<Label>Tab 2</Label>
				</Tab>
				<Tab key="tab:3">
					<Label>Tab 3</Label>
				</Tab>
			</TabBar>
		</svelte-fragment>
		<div slot="optionsSidebar">
			<TabsConfigurations
				bind:open
				bind:timeoutMs
				bind:stacked
				bind:leading
				bind:closeOnEscape
				bind:showActionBtn
				bind:actionRipple
				bind:iconActionType
				bind:iconActionRipple
				bind:showDismiss
				bind:dismissRipple />
		</div>
	</Configurator>
</div>
