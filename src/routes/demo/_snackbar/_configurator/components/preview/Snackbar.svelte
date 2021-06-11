<svelte:options immutable={true} />

<script lang="ts">
	import {
		Snackbar,
		Content,
		Actions,
		ActionButton,
		IconAction,
		Icon as SnackbarIcon,
		Dismiss,
	} from "@svelte-material-design/core/snackbar";
	import type { SnackbarConfigurations } from "../../types";
	import { Icon } from "src/components/configurator/smui-components/icons";
	import { Button } from "@svelte-material-design/core/button";

	export let configurations: SnackbarConfigurations;

	function showSnackbar() {
		configurations.open = true;
		updateInstance();
	}

	function updateInstance() {
		configurations = { ...configurations };
	}

</script>

<Button on:click={showSnackbar}>Open snackbar</Button>

<Snackbar
	bind:open={configurations.open}
	timeoutMs={configurations.timeoutMs}
	stacked={configurations.stacked}
	leading={configurations.leading}
	closeOnEscape={configurations.closeOnEscape}
	on:closed
>
	<Content>Content</Content>
	<Actions>
		{#if configurations.showActionBtn}
			<ActionButton ripple={configurations.actionRipple}>Retry</ActionButton>
		{/if}
		{#if configurations.iconActionType}
			<IconAction ripple={configurations.iconActionRipple}>
				<Icon type={configurations.iconActionType} component={SnackbarIcon} />
			</IconAction>
		{/if}
		{#if configurations.showDismiss}
			<Dismiss ripple={configurations.dismissRipple} />
		{/if}
	</Actions>
</Snackbar>
