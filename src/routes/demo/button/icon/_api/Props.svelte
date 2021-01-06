<script lang="ts">
	import {
		Prop,
		Name,
		Signature,
		Default,
		Description,
		Props,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/common/props";
</script>

<Props>
	<Prop>
		<Name>type</Name>
		<Signature
			keyword="type"
			name="IconType"
			allowedValues={['"icon"', '"svg"', '"img"']}>
			<Default>"icon"</Default>
		</Signature>
		<Description>
			Define the tag used to create the icon element in the following way:
			<ul>
				<li>when <code>"icon"</code> the tag will be <code>{'<i />'}</code></li>
				<li>
					when
					<code>"svg"</code>
					the tag will be
					<code>{'<svg />'}</code>
				</li>
				<li>
					when
					<code>"img"</code>
					the tag will be
					<code>{'<img />'}</code>
				</li>
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
	<BaseComponentProps>
		<Dom
			keyword="type"
			name="IconDOM"
			instances={['HTMLSpanElement', 'HTMLSVGElement', 'HTMLImageElement']}>
			<slot name="additional-dom-desc">
				Type depends on the
				<code>type</code>
				prop:
				<ul>
					<li>
						when
						<code>"icon"</code>
						it will be
						<code>HTMLSpanElement</code>
					</li>
					<li>
						when
						<code>"svg"</code>
						it will be
						<code>HTMLSVGElement</code>
					</li>
					<li>
						when
						<code>"img"</code>
						it will be
						<code>HTMLImageElement</code>
					</li>
				</ul>
			</slot>
		</Dom>
	</BaseComponentProps>
</Props>
