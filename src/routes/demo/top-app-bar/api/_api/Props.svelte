<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
		Variant,
	} from "src/components/components-api/props/common";
	import { CommonTopAppBarProps } from "./common";

</script>

<Props>
	<Variant
		name="TopAppBarVariant"
		allowedValues={["standard", "fixed", "fullwidth"]}
		defaultValue="standard"
	>
		<slot>Fixed TopAppBar won't hide on user scrolls.</slot>
	</Variant>
	<CommonTopAppBarProps />
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
