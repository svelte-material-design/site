<svelte:options immutable={true} />

<script lang="ts">
	import {
		Snackbar,
		Content,
		Actions,
		ActionButton,
		Dismiss,
	} from "@svelte-material-design/core/snackbar";
	import { Button } from "@svelte-material-design/core/button";
	import { List, Item } from "@svelte-material-design/core/list";
	let open: boolean = false;

	let events: string[] = [];

	function showSnackbar() {
		open = true;
	}

	function addEvent(event: string, reason?: string) {
		events = [...events, `${event}${reason ? `: ${reason}` : ""}`];
	}

</script>

<Button on:click={showSnackbar}>Open snackbar</Button>

<List>
	{#each events as event}
		<Item>{event}</Item>
	{/each}
</List>

<Snackbar
	bind:open
	on:closed={(e) => addEvent("closed", e.detail.reason)}
	on:closing={(e) => addEvent("closing", e.detail.reason)}
	on:opened={() => addEvent("opened")}
	on:opening={() => addEvent("opening")}
>
	<Content>Test</Content>
	<Actions>
		<ActionButton>Retry</ActionButton>
		<Dismiss />
	</Actions>
</Snackbar>
