<svelte:options immutable={true} />

<script lang="ts">
	import { Button, Label } from "@svelte-material-design/core/button";
	import { List, Item } from "@svelte-material-design/core/list";

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

<div>
	<Button
		variant="raised"
		on:click={(e) => handleEvent("click", e)}
		on:mousedown={(e) => handleEvent("mousedown", e)}
		on:mouseup={(e) => handleEvent("mouseup", e)}
		on:keydown={(e) => handleEvent("keydown", e)}
		on:keyup={(e) => handleEvent("keyup", e)}
		on:focus={(e) => handleEvent("focus", e)}
		on:blur={(e) => handleEvent("blur", e)}
	>
		<Label>Test</Label>
	</Button>
	<List>
		{#each logs as log}
			<Item><b> {log.name} </b><span>{log.event}</span></Item>
		{/each}
	</List>
</div>
