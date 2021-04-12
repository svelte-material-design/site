<script lang="ts">
	import { Tab, Label } from "@svelte-material-design/core/tab";
	import { TabBar } from "@svelte-material-design/core/tab-bar";
</script>

<div>
	Scrolling tabs:
	<TabBar>
		{#each [...Array(20)].map((v, i) => i + 1) as tab}
			<Tab {tab}>
				<Label>Tab {tab}</Label>
			</Tab>
		{/each}
	</TabBar>
</div>
