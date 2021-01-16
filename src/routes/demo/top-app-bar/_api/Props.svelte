<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { CommonTopAppBarProps } from "./common";
</script>

<Props>
	<Prop>
		<Name>variant</Name>
		<Signature keyword="type" name="TopAppBarVariant" />
		<Description>
			The variant of the TopAppBar. Fixed TopAppBar won't hide on user scrolls.
		</Description>
	</Prop>
	<CommonTopAppBarProps />
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
