<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import { Href, Open } from "src/components/components-api/props/common";
	import {
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import Default from "src/components/components-api/props/Default.svelte";

</script>

<Props>
	<Open />
	<Href />
	<Prop>
		<Name>escapeKeyAction</Name>
		<Signature keyword="string">
			<Default value={"close"} />
		</Signature>
		<Description>
			Sets the action reflected when the Escape key is pressed. Setting to
			<code>""</code>
			disables closing the dialog via Escape key.
		</Description>
	</Prop>
	<Prop>
		<Name>scrimClickAction</Name>
		<Signature keyword="string">
			<Default value={"close"} />
		</Signature>
		<Description>
			Sets the action reflected when the scrim is clicked. Setting to
			<code>""</code>
			disables closing the dialog via Escape key.
		</Description>
	</Prop>
	<Prop>
		<Name>autoStackButtons</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>
			Sets whether stacked/unstacked action button layout is automatically.
		</Description>
	</Prop>
	<Prop>
		<Name>stackedButtons</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>Force the stacked action button layout.</Description>
	</Prop>
	<Prop>
		<Name>initialFocus</Name>
		<Signature keyword="HTMLElement" />
		<Description>
			Force the element to focus on dialog open. By default it look for an
			<code>{`<Action />`}</code>
			with <code>default</code> prop set to <code>true</code>. Default actions
			should be preferred on this prop.
		</Description>
	</Prop>
	<!-- <Prop>
		<Name>fullscreen</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			When <code>true</code> the dialog opens in fullscreen.
		</Description>
	</Prop> -->
</Props>
