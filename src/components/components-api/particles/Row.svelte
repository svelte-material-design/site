<style lang="scss">
	@use "@material/data-table";

	.cell {
		display: flex;
		padding: 0 data-table.$cell-leading-padding;
		height: 100%;
		align-items: center;

		&:nth-of-type(1n + 5) {
			border-top: data-table.$divider-color solid;
		}
	}

	.description {
		> :global([slot="description"] > code) {
			position: relative;
			padding: 0 0.2em;

			&:after {
				content: "";
				position: absolute;
				opacity: 0.1;
				background-color: var(--mdc-theme-primary);
				width: 100%;
				height: 100%;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
	}
</style>

<div class="cell">
	<slot name="name" />
</div>
<div class="cell">
	<slot name="type" />
</div>
<div class="cell">
	{#if !$$slots.def}<span />{/if}
	<slot name="def" />
</div>
<div class="cell description">
	<slot name="description" />
</div>
