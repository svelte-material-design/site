<script lang="ts">
	import classes from "./CodeSelector.module.scss";
	import Code from "./code/Code.svelte";
	import { Item, List, Content } from "@svelte-material-design/core/list";

	export let svelte: string;
	export let scss: string;

	let selection: "svelte" | "scss" = "svelte";

	$: if (selection === "scss" && !scss) {
		selection = "svelte";
	}
</script>

<div class={classes["code-selector"]}>
	<div class={classes["source"]}>
		{#if selection === "svelte"}
			<Code language="html" source={svelte} />
		{:else}
			<Code language="scss" source={scss} />
		{/if}
	</div>
	{#if scss}
		<div class={classes["selection-list"]}>
			<List
				class={classes["list"]}
				bind:value={selection}
				orientation="horizontal"
				selectionType="single"
				role="listbox"
			>
				<Item value="svelte" role="option">
					<Content>Svelte</Content>
				</Item>
				<Item value="scss" role="option">
					<Content>SCSS</Content>
				</Item>
			</List>
		</div>
	{/if}
</div>
