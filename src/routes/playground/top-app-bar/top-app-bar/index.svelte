<script lang="ts">
	import {
		TopAppBar,
		Row,
		Section,
		Navigation,
		Icon,
	} from "@smui/core/top-app-bar";
</script>

<style>
	.content {
		position: relative;
		height: 200vh;
	}
</style>

<TopAppBar>
	<Row>
		<Section>
			<Navigation>
				<Icon>menu</Icon>
			</Navigation>
		</Section>
	</Row>
	<div slot="content">
		<div class="content">Content</div>
	</div>
</TopAppBar>
