<script lang="ts">
	export let value: any;

	let formatted = typeof value === "string" ? `"${value}"` : value;
</script>

<style>
	.value {
		color: #c51916;
	}
</style>

<code class="value">{formatted}</code>
