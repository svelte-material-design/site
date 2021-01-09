<script lang="ts">
	import { Name } from "./particles";
	import { Comma } from "../common/particles";
	import { Typography } from "@svelte-material-design/core/typography";

	export let events: string[];
</script>

<Typography variant="headline6">Forwarded HTML events</Typography>
<Comma values={events} let:value>
	<Name>{value}</Name>
</Comma>
