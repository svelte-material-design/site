<svelte:options immutable={true} />

<script lang="ts">
	import { Paper, Title, Content } from "@svelte-material-design/core/paper";

</script>

<div>
	Square paper:
	<br />

	<div class="paper-container">
		<Paper square class="paper-demo">
			<Title>Square Paper</Title>
			<Content>
				By adding the
				<code>square</code>
				property, the paper gains sharper corners and can be used to intimidate foes.
			</Content>
		</Paper>
	</div>
</div>
