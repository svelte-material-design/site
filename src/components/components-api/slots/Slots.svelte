<script lang="ts">
	import { Section } from "../common";
</script>

<Section title="Slots" cols={2}>
	<slot slot="table" name="table" />
	<slot />
</Section>
