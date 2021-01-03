<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
</script>

<style lang="scss">
	@use "@material/data-table";

	.props {
		display: grid;
		grid-template-columns: repeat(3, auto);
		grid-auto-rows: minmax(data-table.$minimum-cell-height, auto);
	}
</style>

<Typography variant="headline3">Props</Typography>
<div class="props">
	<slot />
</div>
