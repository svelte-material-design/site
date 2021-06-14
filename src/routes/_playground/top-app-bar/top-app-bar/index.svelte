<script lang="ts">
	import {
		TopAppBar,
		Section,
		NavigationIcon,
		Icon,
	} from "@svelte-material-design/core/top-app-bar";
</script>

<TopAppBar>
	<Section>
		<NavigationIcon>
			<Icon>menu</Icon>
		</NavigationIcon>
	</Section>
	<div slot="contenFt">
		<div class="content">Content</div>
	</div>
</TopAppBar>

<style>
	.content {
		position: relative;
		height: 200vh;
	}
</style>
