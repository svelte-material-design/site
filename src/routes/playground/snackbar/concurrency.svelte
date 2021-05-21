<svelte:options immutable={true} />

<script lang="ts">
	import {
		Content,
		Actions,
		ActionButton,
		Dismiss,
	} from "@svelte-material-design/core/snackbar";
	import {
		Snackbar,
		SnackbarConcurrency,
	} from "@svelte-material-design/core/snackbar/concurrency";
	import { Button } from "@svelte-material-design/core/button";

	let open: boolean = false;
	let open2: boolean = false;
	let events: string[] = [];

	function showSnackbar() {
		open = true;
	}

	function showSnackbar2() {
		open2 = true;
	}

</script>

<SnackbarConcurrency
	on:open={(event) => (events = [...events, `open:${event.detail.value}`])}
	on:close={(event) =>
		(events = [
			...events,
			`close:${event.detail.value} - ${event.detail.reason}`,
		])}
>
	<Button on:click={showSnackbar}>Open snackbar</Button>

	<Snackbar bind:open stacked value="1">
		<Content>Test</Content>
		<Actions>
			<ActionButton>Retry</ActionButton>
		</Actions>
	</Snackbar>

	<Button on:click={showSnackbar2}>Open snackbar 2</Button>

	<Snackbar bind:open={open2} value="2">
		<Content>Test 2</Content>
		<Actions>
			<ActionButton>Retry</ActionButton>
			<Dismiss />
		</Actions>
	</Snackbar>
</SnackbarConcurrency>

<ul>
	{#each events as event}
		<li>{event}</li>
	{/each}
</ul>
