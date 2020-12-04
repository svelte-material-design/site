<script lang="ts">
	import classes from "./CodeSelector.module.scss";
	import Code from "./code/Code.svelte";
	import { Item, ListBox, Content } from "@smui/core/list";

	export let svelte: string;
	export let scss: string;

	let selection: "svelte" | "scss" = "svelte";

	$: if (selection === "scss" && !scss) {
		selection = "svelte";
	}
</script>

<div class={classes['code-selector']}>
	<div class={classes['source']}>
		{#if selection === 'svelte'}
			<Code language="html" source={svelte} />
		{:else}
			<Code language="scss" source={scss} />
		{/if}
	</div>
	{#if scss}
		<div class={classes['selection-list']}>
			<ListBox
				class={classes['list']}
				bind:value={selection}
				orientation="horizontal">
				<Item value="svelte">
					<Content>Svelte</Content>
				</Item>
				<Item value="scss">
					<Content>SCSS</Content>
				</Item>
			</ListBox>
		</div>
	{/if}
</div>
