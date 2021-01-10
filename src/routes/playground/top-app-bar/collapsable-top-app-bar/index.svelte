<script lang="ts">
	import {
		CollapsableTopAppBar,
		Row,
		Section,
		Navigation,
		Icon,
	} from "@smui/core/top-app-bar";

	let log: string[] = [];
	let collapsed: boolean;
	let alwaysCollapsed: boolean;

	function handleChange(collapsed: boolean) {
		log = [...log, `Collapsed: ${collapsed}`];
	}
</script>

<style>
	.content {
		position: relative;
		height: 200vh;
	}

	.log {
		position: absolute;
		top: 0px;
	}

	.state {
		position: fixed;
		bottom: 1em;
	}
</style>

<CollapsableTopAppBar
	{alwaysCollapsed}
	dense
	on:change={(e) => handleChange(e.detail.collapsed)}
	bind:collapsed>
	<Row>
		<Section>
			<Navigation>
				<Icon>menu</Icon>
			</Navigation>
		</Section>
	</Row>
	<div slot="content">
		<div class="content">
			<div class="log">
				<label>
					<input type="checkbox" bind:checked={alwaysCollapsed} />
					Always collapsed
				</label>
				{#each log as log}<span>{log}</span> <br />{/each}
			</div>
		</div>
	</div>
</CollapsableTopAppBar>
<div class="state">Collapsed: {collapsed}</div>
