<script lang="ts">
	export let bold: boolean = false;
</script>

<style lang="scss">
	.event-name {
		color: #ab0d90;
		display: inline-flex;
	}

	.bold {
		font-weight: bold;
	}

	.prefix {
		color: var(--mdc-theme-primary);
	}
</style>

<code class="event-name" class:bold>
	<span class="prefix">on:</span>
	<slot />
</code>
