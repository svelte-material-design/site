<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Default,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import { CommonSliderProps } from "../../_api/common";
</script>

<Props>
	<Prop>
		<Name>step</Name>
		<Signature keyword="number">
			<Default value={1} />
		</Signature>
		<Description
			>The size of the <code>{`<Thumb />`}</code> steps. Mirrors the native
			<code>{`<input type="slider" />`}</code>
			<code>step</code> attribute.</Description
		>
	</Prop>
	<Prop>
		<Name>tickMarks</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description
			>If <code>true</code>, a tick mark will be shown for each step.</Description
		>
	</Prop>
	<CommonSliderProps />
</Props>
