<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
		Ripple,
	} from "src/components/components-api/props/common";
</script>

<Props>
	<Ripple />
	<BaseComponentProps>
		<Dom instances={['HTMLDivElement']} />
	</BaseComponentProps>
</Props>
