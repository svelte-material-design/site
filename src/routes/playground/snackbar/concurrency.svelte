<script lang="ts">
	import { Snackbar, Content, Actions, Action } from "@smui/core/snackbar";
	import { Button } from "@smui/core/button";
	let open: boolean = false;
	let open2: boolean = false;

	function showSnackbar() {
		open = true;
	}

	function showSnackbar2() {
		open2 = true;
	}
</script>

<Button on:click={showSnackbar}>Open snackbar</Button>

<Snackbar bind:open stacked>
	<Content>Test</Content>
	<Actions>
		<Action>Retry</Action>
	</Actions>
</Snackbar>

<Button on:click={showSnackbar2}>Open snackbar 2</Button>

<Snackbar bind:open={open2} stacked>
	<Content>Test</Content>
	<Actions>
		<Action>Retry</Action>
	</Actions>
</Snackbar>
