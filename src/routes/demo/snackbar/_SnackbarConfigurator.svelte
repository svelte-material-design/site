<script lang="ts">
	import { Configurator, IFrame } from "src/components/configurator";
	import SnackbarConfigurations from "./_SnackbarConfigurations.svelte";
	import { script, template } from "./code";
	import type { IconType } from "src/components/configurator/smui-components/icons";

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
			<IFrame
				src="/iframe/snackbar"
				title="Snackbar preview"
				props={{ open, timeoutMs, stacked, leading, closeOnEscape, showActionBtn, actionRipple, iconActionType, iconActionRipple, showDismiss, dismissRipple }}
				on:update={(e) => handleUpdate(e.detail.props)} />
		</svelte-fragment>
		<div slot="optionsSidebar">
			<SnackbarConfigurations
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
