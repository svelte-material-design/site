<svelte:options immutable={true} />

<script lang="ts">
	import { Cell } from "../common/table";
	import { Tag } from "../common";
	import { MandatoryChip } from "../common/particles/chips";
	import { getLink } from "src/components/layout/module-layout/context";
	import { stores } from "@sapper/app";

	export let mandatory: boolean = false;
	export let href: string = undefined;

	const { page } = stores();

</script>

<Cell>
	<div>
		<a
			href={getLink(href, {
				type: "api",
			})}
		>
			<Tag>
				<slot />
			</Tag>
		</a>
		{#if mandatory}
			<MandatoryChip />
		{/if}
	</div>
</Cell>

<style>
	a {
		text-decoration: none;
	}

	a[href]:hover {
		text-decoration: underline;
	}

</style>
