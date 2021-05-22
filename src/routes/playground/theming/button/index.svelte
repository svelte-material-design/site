<script lang="ts">
	import { Button, Icon, Label } from "@smui/core/button";

	let containerFillColor = "secondary";
	let disabledContainerFillColor = "lightgreen";
	let iconColor = "yellow";
	let disabledIconColor = "blue";
	let inkColor = "black";
	let disabledInkColor = "fuchsia";

	let density = 4;
	let height = "3em";
	let shapeRadius = "10px";

	let outlineColor = "black";
	let disabledOutlineColor = "fuchsia";
</script>

<div>
	<Button {inkColor} {containerFillColor} variant="raised">
		<Label>Test</Label>
	</Button>
	<Button {inkColor} {containerFillColor} variant="unelevated">
		<Label>Test</Label>
	</Button>
	<Button {inkColor} variant="outlined">
		<Label>Test</Label>
	</Button>
	<Button {inkColor}>
		<Label>Test</Label>
	</Button>
	<Button color="secondary">
		<Label>Test</Label>
	</Button>
	<Button color="secondary" variant="unelevated">
		<Label>Test</Label>
	</Button>
	<Button {disabledContainerFillColor} variant="raised" disabled>
		<Label>Test</Label>
	</Button>
	<Button {iconColor} variant="raised">
		<Icon>directions</Icon>
		<Label>Test</Label>
	</Button>
	<Button {disabledIconColor} variant="raised" disabled>
		<Icon>directions</Icon>
		<Label>Test</Label>
	</Button>
	<Button
		{disabledInkColor}
		{disabledContainerFillColor}
		disabled
		variant="unelevated">
		<Icon>directions</Icon>
		<Label>Test</Label>
	</Button>
</div>
<div>
	<Button {density} variant="unelevated">
		<Icon>directions</Icon>
		<Label>Test</Label>
		<Icon>directions</Icon>
	</Button>
	<Button {height} variant="unelevated">
		<Icon>directions</Icon>
		<Label>Test</Label>
		<Icon>directions</Icon>
	</Button>
	<Button {shapeRadius} variant="unelevated">
		<Icon>directions</Icon>
		<Label>Test</Label>
		<Icon>directions</Icon>
	</Button>
	<Button shapeRadius="rounded" density="4" variant="outlined">
		<Icon>directions</Icon>
		<Label>Test</Label>
		<Icon>directions</Icon>
	</Button>
</div>
<div>
	<Button {shapeRadius} {outlineColor} variant="outlined">
		<Label>Test</Label>
	</Button>
	<Button {shapeRadius} {disabledOutlineColor} variant="outlined" disabled>
		<Label>Test</Label>
	</Button>
</div>
