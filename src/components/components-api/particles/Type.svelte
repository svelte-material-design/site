<script lang="ts">
	import { Value, Pipe } from ".";

	export let keyword: string;
	export let name: string = undefined;
	export let allowedValues: string[] = undefined;
	export let instances: string[] = undefined;
</script>

<style>
	pre {
		display: inline;
	}

	.keyword {
		color: #ab0d90;
	}

	.name {
		color: #1a1aa8;
	}
</style>

<code>
	{#if keyword}<span class="keyword">{keyword}</span>{/if}
	{#if name && allowedValues}
		<span />
		<span class="name">{name}</span>
		<span />
		<span>
			=
			<Pipe values={allowedValues} let:value>
				<Value>{value}</Value>
			</Pipe>
		</span>
	{/if}
	{#if instances}
		<Pipe values={instances} let:value><span class="name">{value}</span></Pipe>
	{/if}
</code>
