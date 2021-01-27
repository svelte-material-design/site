<script lang="ts">
	import { Row } from "../common/table";
	import { getSlotsContext } from "./SlotsContext";

	export let indentation: number = getSlotsContext() ? 1 : 0;
</script>

<Row {indentation}>
	<slot />
</Row>
