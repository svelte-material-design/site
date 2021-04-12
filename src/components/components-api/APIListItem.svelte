<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";
	import { Pre, Code } from "@svelte-material-design/core/common/dom";
</script>

<div class="api">
	<Typography variant="headline6" component={Code}>
		<slot name="api" />
	</Typography>
</div>
<div class="interface">
	<slot name="interface" />
</div>
<div class="description">
	<slot name="description" />
</div>

<style lang="scss">
	@use "src/styles/_border";

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
	}
</style>
