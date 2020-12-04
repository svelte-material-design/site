<script lang="ts">
	import { Item, ListBox, Content } from "@smui/core/list";

	let value;
</script>

<div>
	Select item list using value prop:
	<input type="number" bind:value />
	<ListBox class="demo-list" bind:value>
		<Item>
			<Content>Bruce Willis</Content>
		</Item>
		<Item>
			<Content>Tom Hanks</Content>
		</Item>
		<Item>
			<Content>Jack Nicholson</Content>
		</Item>
		<Item>
			<Content>Leonardo DiCaprio</Content>
		</Item>
		<Item>
			<Content>Matt Damon</Content>
		</Item>
	</ListBox>
</div>
