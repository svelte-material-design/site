<svelte:options immutable={true} />

<script lang="ts">
	import {
		Paper,
		Title,
		Subtitle,
		Content,
	} from "@svelte-material-design/core/paper";

</script>

<div>
	<div class="paper-container">
		<Paper class="paper-demo">
			<Title>Paper</Title>
			<Subtitle>This is a sheet of paper.</Subtitle>
			<Content>Paper is used to build an elevated surface.</Content>
		</Paper>
	</div>
</div>
