<script lang="ts">
	import { Cell } from "../common/table";
	import { Tag } from "../common";
	import { MandatoryChip } from "../particles/chips";
	import { getLayoutPath } from "src/contexts";
	import { stores } from "@sapper/app";

	export let mandatory: boolean = false;
	export let href: string = undefined;

	const { page } = stores();

	$: tagLink = $page.path !== getLink() ? getLink() : undefined;

	function getLink() {
		return href ? `${getLayoutPath()}/${href}` : undefined;
	}
</script>

<style>
	a {
		text-decoration: none;
	}

	a[href]:hover {
		text-decoration: underline;
	}
</style>

<Cell>
	<div>
		<a href={tagLink}>
			<Tag>
				<slot />
			</Tag>
		</a>
		{#if mandatory}
			<MandatoryChip />
		{/if}
	</div>
</Cell>
