<script lang="ts">
	export let value: any;

	let formatted = JSON.stringify(value);
</script>

<code class="value">{formatted}</code>

<style>
	.value {
		color: #c51916;
	}
</style>
