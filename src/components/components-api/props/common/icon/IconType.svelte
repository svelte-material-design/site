<svelte:options immutable={true} />

<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Description,
		Default,
	} from "src/components/components-api/props";

</script>

<Prop>
	<Name>type</Name>
	<Signature
		keyword="type"
		name="IconType"
		allowedValues={["icon", "svg", "img"]}
	>
		<Default value="icon" />
	</Signature>
	<Description>
		Define the tag used to create the icon element in the following way:
		<ul>
			<li>when <code>"icon"</code> the tag will be <code>{"<i />"}</code></li>
			<li>when <code>"svg"</code> the tag will be <code>{"<svg />"}</code></li>
			<li>when <code>"img"</code> the tag will be <code>{"<img />"}</code></li>
		</ul>
		<b>Note</b>
		<br />
		When
		<code>"icon"</code>
		is used, a default class
		<code>"material-icons"</code>
		will be applied to the element if none is passed.
	</Description>
</Prop>
