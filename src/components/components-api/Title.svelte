<script lang="ts">
	import { Typography } from "@svelte-material-design/core/typography";

	export let module: string;
</script>

<style>
	small {
		font-size: 0.3em;
	}
</style>

<Typography variant="headline2">
	Button
	<small
		aria-hidden="true"><code>@svelte-material-design/core/{module}</code></small>
</Typography>
