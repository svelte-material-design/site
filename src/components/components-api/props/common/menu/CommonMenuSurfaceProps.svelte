<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { Open } from "src/components/components-api/props/common/menu";
	import { Variant } from "src/components/components-api/props/common";

	export let tag: string;
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
	<Name>anchorCorner</Name>
	<Signature
		keyword="type"
		name="MenuSurfaceAnchorCorner"
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
	<Signature keyword="interface" name="MenuSurfaceAnchorMargin" />
	<Description>
		Sets the distance from the anchor point that the menu surface should be
		shown.
	</Description>
</Prop>
<Variant name="MenuSurfaceVariant" allowedValues={["fixed", "fullwidth"]} />
