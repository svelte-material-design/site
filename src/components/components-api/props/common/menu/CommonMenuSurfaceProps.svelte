<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
		Default,
	} from "src/components/components-api/props";
	import { Open } from "src/components/components-api/props/common/menu";
	import { Variant } from "src/components/components-api/props/common";

	export let tag: string;
	export let anchorName: string = "MenuSurfaceAnchor";
	export let anchorMarginName: string = "MenuSurfaceAnchorMargin";
	export let variantName: string = "MenuSurfaceVariant";
	export let anchorCornerName: string = "MenuSurfaceAnchorCorner";
</script>

<Open {tag} />
<Prop>
	<Name>quickOpen</Name>
	<Signature keyword="boolean" />
	<Description>
		When <code>true</code> the <code>{`<${tag} />`}</code> should open and close
		without animation.
	</Description>
</Prop>
<Prop>
	<Name>anchor</Name>
	<Signature keyword="interface" name={anchorName}>
		<Default>The root's <code>parentElement</code>.</Default>
	</Signature>
	<Description
		>The anchor element for the positioning logic or in alternative an object
		with the x and y values for absolute positioning. Absolute positioning is
		relative to the closest <code>position: relative</code> parent.</Description
	>
</Prop>
<Prop>
	<Name>anchorCorner</Name>
	<Signature
		keyword="type"
		name={anchorCornerName}
		allowedValues={["top-start", "top-end", "bottom-start", "bottom-end"]}
	/>
	<Description>
		Sets the corner that the menu surface will be anchored to.
	</Description>
</Prop>
<Prop>
	<Name>anchorFlipRtl</Name>
	<Signature keyword="boolean" />
	<Description>
		When <code>true</code> the anchor corner values flip in RTL context.
	</Description>
</Prop>
<Prop>
	<Name>anchorMargin</Name>
	<Signature keyword="interface" name={anchorMarginName} />
	<Description>
		Sets the distance from the anchor point that the menu surface should be
		shown.
	</Description>
</Prop>
<Prop>
	<Name>hoisted</Name>
	<Signature keyword="boolean" />
	<Description>
		Sets whether the <code>{`<${tag} />`}</code> has been hoisted to the body so
		that the offsets are calculated relative to the page and not the
		<code>anchor</code>.
	</Description>
</Prop>
<Variant name={variantName} allowedValues={["fixed", "fullwidth"]} />
