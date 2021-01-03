<style lang="scss">
	@use "@material/data-table";

	.cell {
		display: flex;
		padding: 0 data-table.$cell-leading-padding;
		height: 100%;
		flex-direction: column;
		justify-content: center;

		&:nth-of-type(1n + 4) {
			border-top: data-table.$divider-color solid;
		}
	}
</style>

<div class="cell">
	<slot />
</div>
