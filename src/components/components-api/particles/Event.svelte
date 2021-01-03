<style lang="scss">
	.event-name {
		color: #ab0d90;
		display: inline-flex;
	}

	.prefix {
		color: var(--mdc-theme-primary);
	}
</style>

<code class="event-name">
	<span class="prefix">on:</span>
	<slot />
</code>
