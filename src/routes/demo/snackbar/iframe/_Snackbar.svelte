<script lang="ts">
	import {
		Snackbar,
		Content,
		Actions,
		Action,
		IconAction,
		Icon as SnackbarIcon,
		Dismiss,
	} from "@smui/core/snackbar";
	import {
		Icon,
		IconType,
	} from "src/components/configurator/smui-components/icons";

	export let open: boolean = false;
	export let timeoutMs: number = null;
	export let stacked: boolean = undefined;
	export let leading: boolean = undefined;
	export let closeOnEscape: boolean = undefined;

	export let showActionBtn: boolean = undefined;
	export let actionRipple: boolean = undefined;
	export let iconActionType: IconType = undefined;
	export let iconActionRipple: boolean = undefined;
	export let showDismiss: boolean = undefined;
	export let dismissRipple: boolean = undefined;
</script>

<svelte:options immutable={true} />

<Snackbar bind:open {timeoutMs} {stacked} {leading} {closeOnEscape} on:closed>
	<Content>Content</Content>
	<Actions>
		{#if showActionBtn}
			<Action ripple={actionRipple}>Retry</Action>
		{/if}
		{#if iconActionType}
			<IconAction ripple={iconActionRipple}>
				<Icon type={iconActionType} component={SnackbarIcon} />
			</IconAction>
		{/if}
		{#if showDismiss}
			<Dismiss ripple={dismissRipple} />
		{/if}
	</Actions>
</Snackbar>
