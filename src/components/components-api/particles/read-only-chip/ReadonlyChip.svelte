<script lang="ts">
	import classes from "./ReadonlyChip.module.scss";
	import { Chip, Text } from "@smui/core/chips";

	export let readonly: boolean = false;
</script>

<Chip class={classes['readonly-chip']}>
	<Text>readonly</Text>
</Chip>
