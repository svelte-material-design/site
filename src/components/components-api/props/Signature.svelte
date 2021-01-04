<script lang="ts">
	import { Value, Pipe } from "../particles";
	import { Cell } from "../common/table";

	export let keyword: string;
	export let name: string = undefined;
	export let allowedValues: string[] = undefined;
	export let instances: string[] = undefined;
</script>

<style>
	.keyword {
		color: #ab0d90;
	}

	.instance {
		color: #1a1aa8;
	}

	.default {
		padding-left: 1em;
	}
</style>

<Cell>
	<div>
		<code>
			{#if keyword}<span class="keyword">{keyword}</span>{/if}
			{#if name}<span /> <span class="name">{name}</span> <span />{/if}
			{#if allowedValues}
				<span>
					=
					<Pipe values={allowedValues} let:value>
						<Value>{value}</Value>
					</Pipe>
				</span>
			{/if}
			{#if instances}
				{#if name}={/if}
				<Pipe values={instances} let:value>
					<span class="instance">{value}</span>
				</Pipe>
			{/if}
		</code>
	</div>
	<div class="default">
		{#if $$slots.default}Default:{/if}
		<slot />
	</div>
</Cell>
