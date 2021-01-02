<script lang="ts">
	import { Button, Icon, Label } from "@smui/core/button";
	import { List, Item } from "@smui/core/list";

	let logs: Log[] = [];

	function handleEvent(name: string, event: any) {
		logs.push({ name, event });
		console.log(event);

		logs = [...logs];
	}

	interface Log {
		name: string;
		event: any;
	}
</script>

<svelte:options immutable={true} />

<div>
	<Button
		variant="raised"
		on:click={(e) => handleEvent('click', e)}
		on:mousedown={(e) => handleEvent('mousedown', e)}
		on:mouseup={(e) => handleEvent('mouseup', e)}
		on:keydown={(e) => handleEvent('keydown', e)}
		on:keyup={(e) => handleEvent('keyup', e)}
		on:focus={(e) => handleEvent('focus', e)}
		on:blur={(e) => handleEvent('blur', e)}>
		<Label>Test</Label>
	</Button>
	<List>
		{#each logs as log}
			<Item><b> {log.name} </b><span>{log.event}</span></Item>
		{/each}
	</List>
</div>
