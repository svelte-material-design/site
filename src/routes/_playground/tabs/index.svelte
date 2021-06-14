<script lang="ts">
	import {
		TabBar,
		Tab,
		TabIndicator,
		Content,
		Label,
		Icon,
	} from "@svelte-material-design/core/tab-bar";
	import { Button } from "@svelte-material-design/core/button";

	let value: string = undefined;

	let tabs = ["Home", "Merchandise", "About Us"];
</script>

<div>
	<TabBar
		bind:value
		activateOnKeyboardNavigation={false}
		focusOnActivate={true}
	>
		{#each tabs as tab}
			<Tab value={tab} stacked useMinWidth selected>
				<Content>
					<Label>{tab}</Label>
					<Icon>directions_car</Icon>
				</Content>
				<TabIndicator />
			</Tab>
		{/each}
	</TabBar>

	<div>
		{#each tabs as tab}
			<Button on:click={() => (value = tab)}>
				<Content>{tab}</Content>
			</Button>
		{/each}
	</div>

	<pre class="status">Selected: {value}</pre>
</div>
