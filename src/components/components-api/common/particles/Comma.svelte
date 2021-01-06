<script lang="ts">
	import { Join } from ".";

	export let values: string[];
</script>

<Join {values} separator=", " let:value>
	<slot {value} />
</Join>
