<script lang="ts">
	import {
		Snackbar,
		Content,
		Actions,
		Action,
		Dismiss,
	} from "@smui/core/snackbar";
	import { Button } from "@smui/core/button";
	import { List, Item } from "@smui/core/list";
	let open: boolean = false;

	let events: string[] = [];

	function showSnackbar() {
		open = true;
	}

	function addEvent(event: string, reason?: string) {
		events = [...events, `${event}${reason ? `: ${reason}` : ""}`];
	}
</script>

<svelte:options immutable={true} />

<Button on:click={showSnackbar}>Open snackbar</Button>

<List>
	{#each events as event}
		<Item>{event}</Item>
	{/each}
</List>

<Snackbar
	bind:open
	on:closed={(e) => addEvent('closed', e.detail.reason)}
	on:closing={(e) => addEvent('closing', e.detail.reason)}
	on:opened={() => addEvent('opened')}
	on:opening={() => addEvent('opening')}>
	<Content>Test</Content>
	<Actions>
		<Action>Retry</Action>
		<Dismiss />
	</Actions>
</Snackbar>
