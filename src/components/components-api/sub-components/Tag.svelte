<svelte:options immutable={true} />

<script lang="ts">
	import { Cell } from "../common/table";
	import { Tag } from "../common";
	import { MandatoryChip } from "../common/particles/chips";
	import { getLink } from "src/components/layout/module-layout/context";
	import { stores } from "@sapper/app";
	import { beforeUpdate } from "svelte";

	export let mandatory: boolean = false;
	let exported_href: string = undefined;
	export { exported_href as href };

	// let href$ = getLink$(exported_href, {
	// 	type: "api",
	// });

	const { page } = stores();
	let hrefx: string;

	$: {
		$page;
	}

	beforeUpdate(() => {
		hrefx = getLink(exported_href, {
			type: "api",
		});
	});

</script>

<Cell>
	<div>
		<a href={hrefx}>
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
