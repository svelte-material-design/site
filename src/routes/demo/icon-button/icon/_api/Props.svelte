<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
		IconType,
	} from "src/components/components-api/common/props";
</script>

<Props>
	<IconType />
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
