<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Default,
		Description,
		Props,
		Signature,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";

</script>

<Props>
	<Prop>
		<Name>aspectRatio</Name>
		<Signature
			keyword="type"
			name="AspectRatio"
			allowedValues={["square", "16x9"]}
		>
			<Default value={"square"} />
		</Signature>
		<Description>The aspect ratio of the media content.</Description>
	</Prop>
	<BaseComponentProps>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
