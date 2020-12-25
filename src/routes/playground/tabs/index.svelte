<script lang="ts">
	import {
		TabBar,
		Tab,
		TabIndicator,
		Content,
		Label,
		Icon,
	} from "@smui/core/tab-bar";
	import { Button } from "@smui/core/button";

	let active: string = undefined;

	let tabs = ["Home", "Merchandise", "About Us"];
</script>

<div>
	<TabBar
		bind:active
		activateOnKeyboardNavigation={false}
		focusOnActivate={true}>
		{#each tabs as tab}
			<Tab key={tab} stacked useMinWidth active>
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
			<Button on:click={() => (active = tab)}>
				<Content>{tab}</Content>
			</Button>
		{/each}
	</div>

	<pre class="status">Selected: {active}</pre>
</div>
