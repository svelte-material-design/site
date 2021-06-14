<svelte:options immutable={true} />

<script lang="ts">
	import {
		CollapsableTopAppBar,
		Section,
		NavigationIcon,
		NavigationButton,
		Icon,
	} from "@svelte-material-design/core/top-app-bar";

	let log: string[] = [];
	let collapsed: boolean;
	let alwaysCollapsed: boolean;

	function handleChange(collapsed: boolean) {
		log = [...log, `Collapsed: ${collapsed}`];
	}

	function handleNav() {
		log = [...log, `Nav`];
	}

</script>

<CollapsableTopAppBar
	{alwaysCollapsed}
	dense
	on:change={(e) => handleChange(e.detail.collapsed)}
	on:nav={(e) => handleNav()}
	bind:collapsed
>
	<Section>
		<NavigationIcon>
			<Icon>menu</Icon>
		</NavigationIcon>
	</Section>
	<div slot="content">
		<div class="content">
			<div class="log">
				<label>
					<input type="checkbox" bind:checked={alwaysCollapsed} />
					Always collapsed
				</label>
				<div>
					{#each log as log}<span>{log}</span> <br />{/each}
				</div>
			</div>
		</div>
	</div>
</CollapsableTopAppBar>
<div class="state">Collapsed: {collapsed}</div>

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
