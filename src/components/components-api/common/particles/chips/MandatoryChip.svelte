<script lang="ts">
	import classes from "./chips.module.scss";
	import { Chip, Text } from "@svelte-material-design/core/chips";
</script>

<Chip class={classes.mandatoryChip}>
	<Text>mandatory</Text>
</Chip>
