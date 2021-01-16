<script lang="ts">
	import { Cell } from "../common/table";

	export let readonly: boolean = false;
	export let readwrite: boolean = false;
</script>

<Cell>
	<code>
		<b>
			<slot />
		</b>
	</code>
</Cell>
