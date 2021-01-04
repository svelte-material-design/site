<script lang="ts">
	import { getCellClass } from "./TableContext";

	const cols = getCellClass();
</script>

<hr style="grid-col-span: {cols}" />
