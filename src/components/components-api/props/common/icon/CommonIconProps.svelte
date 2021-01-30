<script lang="ts">
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { IconType } from ".";
</script>

<IconType />
<BaseComponentProps>
	<Dom
		keyword="type"
		name="IconDOM"
		instances={["HTMLSpanElement", "HTMLSVGElement", "HTMLImageElement"]}
	>
		Type depends on the
		<code>type</code>
		prop:
		<ul>
			<li>when <code>"icon"</code> it will be <code>HTMLSpanElement</code></li>
			<li>when <code>"svg"</code> it will be <code>HTMLSVGElement</code></li>
			<li>when <code>"img"</code> it will be <code>HTMLImageElement</code></li>
		</ul>
	</Dom>
</BaseComponentProps>
