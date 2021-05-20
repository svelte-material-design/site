<svelte:options immutable={true} />

<script lang="ts">
	import {
		Snackbar,
		Content,
		Actions,
		Action,
		IconAction,
		Icon,
		Dismiss,
	} from "@svelte-material-design/core/snackbar";
	import { Button } from "@svelte-material-design/core/button";

	let open: boolean = true;

	function showSnackbar() {
		open = true;
	}

</script>

<Button on:click={showSnackbar}>Open snackbar</Button>

<Snackbar
	bind:open
	timeoutMs={-1}
	fillColor="red"
	labelInkColor={"black"}
	shapeRadius="25px"
>
	<Content>Test</Content>
	<Actions>
		<Action>Retry</Action>
		<IconAction>
			<Icon>add</Icon>
		</IconAction>
		<Dismiss />
	</Actions>
</Snackbar>
