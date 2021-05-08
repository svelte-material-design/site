<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		Prop,
		Default,
		Name,
		Signature,
		Description,
	} from "src/components/components-api/props";
	import { BaseLinearProgressProps } from "src/components/components-api/props/common/linear-progress";
</script>

<Props>
	<Prop>
		<Name readwrite>progress</Name>
		<Signature keyword="number">
			<Default value={0} />
		</Signature>
		<Description
			>Sets the progress bar to this value. Value should be between [0, 1].</Description
		>
	</Prop>
	<Prop>
		<Name readwrite>buffer</Name>
		<Signature keyword="number">
			<Default value={0} />
		</Signature>
		<Description
			>Sets the buffer bar to this value. Value should be between [0, 1].</Description
		>
	</Prop>
	<BaseLinearProgressProps />
</Props>
