<script lang="ts">
	import { Pipe } from ".";
	import { Value } from "./atoms";
	import { Cell } from "../table";

	export let keyword: string;
	export let name: string = undefined;
	export let allowedValues: string[] = undefined;
	export let instances: string[] = undefined;
</script>

<Cell>
	<div>
		<code>
			{#if keyword}<span class="keyword">{keyword}</span>{/if}
			{#if name}<span /> <span class="name">{name}</span> <span />{/if}
			{#if allowedValues}
				<span>
					=
					<Pipe values={allowedValues} let:value>
						<Value {value} />
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
		<slot />
	</div>
</Cell>

<style>
	.keyword {
		color: #ab0d90;
	}

	.instance {
		color: #1a1aa8;
	}

	.default {
		padding-left: 0.2em;
		color: gray;
	}
</style>
