<svelte:options immutable={true} />

<script lang="ts">
	import {
		Dialog,
		Title,
		Content,
		Actions,
		Action,
	} from "@svelte-material-design/core/dialog";
	import {
		List,
		Item,
		Content as ListItemContent,
	} from "@svelte-material-design/core/list";
	import type { OnDialogClose } from "@svelte-material-design/core/dialog";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import { Button, Label } from "@svelte-material-design/core/button";

	const { configurations$ } = getConfiguratorContext();

	function openDialog() {
		$configurations$.open = true;
		updateInstance();
	}

	function handleClose(event: OnDialogClose) {
		$configurations$.closeReason = event.action;
		updateInstance();
	}

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}

</script>

<Dialog
	bind:open={$configurations$.open}
	on:closed={(event) => handleClose(event.detail)}
	autoStackButtons={$configurations$.autoStackButtons}
	stackedButtons={$configurations$.stackedButtons}
	fullscreen={$configurations$.fullscreen}
>
	<Title id="event-title">Dialog title</Title>
	{#if $configurations$.layout === "confirmation"}
		<Content>
			Confirm? (ESC and click outside is like click on "close" action)
		</Content>
		<Actions>
			<Action action="close">
				<Label>Cancel</Label>
			</Action>
			<Action action="accept" default>
				<Label>Accept</Label>
			</Action>
		</Actions>
	{:else if $configurations$.layout === "list"}
		<Content>
			<List>
				{#each [...Array(100)].map((v, i) => i + 1) as item}
					<Item props={{ "data-mdc-dialog-action": `item #${item}` }}>
						<ListItemContent>Item #{item}</ListItemContent>
					</Item>
				{/each}
			</List>
		</Content>
		<Actions>
			<Action action="other">
				<Label>A very very very very very very very very long label</Label>
			</Action>
			<Action action="ok" default>
				<Label>Ok</Label>
			</Action>
		</Actions>
	{/if}
</Dialog>

<Button on:click={openDialog}>
	<Label>Open Dialog</Label>
</Button>
