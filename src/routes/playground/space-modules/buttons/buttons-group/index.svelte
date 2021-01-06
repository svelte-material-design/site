<script lang="ts">
	import "./index.scss";
	import { Button, Label } from "@smui/core/button";
	import { Group } from "@svelte-material-design/space-modules/buttons/buttons-group";
</script>

<Group>
	<Button>
		<Label>One</Label>
	</Button>
	<Button>
		<Label>Two</Label>
	</Button>
	<Button>
		<Label>Three</Label>
	</Button>
</Group>
<Group variant="raised">
	<Button variant="raised">
		<Label>One</Label>
	</Button>
	<Button variant="raised">
		<Label>Two</Label>
	</Button>
	<Button variant="raised">
		<Label>Three</Label>
	</Button>
</Group>
<Group variant="unelevated">
	<Button variant="unelevated">
		<Label>One</Label>
	</Button>
	<Button variant="unelevated">
		<Label>Two</Label>
	</Button>
	<Button variant="unelevated">
		<Label>Three</Label>
	</Button>
</Group>
<Group variant="outlined">
	<Button variant="outlined">
		<Label>One</Label>
	</Button>
	<Button variant="outlined">
		<Label>Two</Label>
	</Button>
	<Button variant="outlined">
		<Label>Three</Label>
	</Button>
</Group>

<Group variant="outlined" style="display: flex;">
	<Button variant="unelevated" color="primary" style="flex-grow: 3;">
		<Label>Primary</Label>
	</Button>
	<Button variant="unelevated" color="secondary" style="flex-grow: 1;">
		<Label>Secondary</Label>
	</Button>
	<Button variant="unelevated" color="secondary" style="flex-grow: 1;">
		<Label>Secondary</Label>
	</Button>
</Group>
