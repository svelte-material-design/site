<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import { LABEL_TEXT } from "./constants";
	import { Typography } from "@svelte-material-design/core/typography";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}
</script>

<Section>
	<Select
		bind:value={$configurations$.variant}
		label="Variant"
		nullable={false}
		options={[
			{ label: "Filled", value: "filled" },
			{ label: "Outlined", value: "outlined" },
		]}
		on:change={updateInstance}
	/>
	<Select
		bind:value={$configurations$.type}
		label="Type"
		nullable={false}
		options={[
			{ label: "Text", value: "text" },
			{ label: "Number", value: "number" },
			{ label: "Email", value: "email" },
			{ label: "Search", value: "search" },
			{ label: "Tel", value: "tel" },
			{ label: "Url", value: "url" },
			{ label: "Password", value: "password" },
			{ label: "Month", value: "month" },
			{ label: "Week", value: "week" },
			{ label: "Date", value: "date" },
			{ label: "Datetime", value: "datetime-local" },
			{ label: "Time", value: "time" },
		]}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Ripple"
		bind:checked={$configurations$.ripple}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Line Ripple"
		bind:checked={$configurations$.lineRipple}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Show label"
		checked={!!$configurations$.label}
		on:change={(e) => {
			$configurations$.label = e.detail.checked ? LABEL_TEXT : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Prefix"
		checked={!!$configurations$.prefix}
		on:change={(e) => {
			$configurations$.prefix = e.detail.checked ? "$" : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Suffix"
		checked={!!$configurations$.suffix}
		on:change={(e) => {
			$configurations$.suffix = e.detail.checked ? ".00" : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Disabled"
		bind:checked={$configurations$.disabled}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Invalid"
		bind:checked={$configurations$.invalid}
		on:change={updateInstance}
	/>
</Section>
<Section>
	<Checkbox
		label="Helper text"
		checked={!!$configurations$.helperText}
		on:change={(e) => {
			$configurations$.helperText = e.detail.checked
				? "Helper text"
				: undefined;
			if (!e.detail.checked) {
				$configurations$.helperTextAsValidationMsg = false;
			}
			updateInstance();
		}}
	/>
	<Checkbox
		label="Persistent helper text"
		disabled={!$configurations$.helperText}
		bind:checked={$configurations$.persistentHelperText}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Validation message"
		disabled={!$configurations$.helperText}
		bind:checked={$configurations$.helperTextAsValidationMsg}
		on:change={(e) => {
			$configurations$.helperText = e.detail.checked
				? "Invalid"
				: "Helper text";
			updateInstance();
		}}
	/>
	<Checkbox
		label="Character Counter"
		disabled={!$configurations$.maxlength}
		bind:checked={$configurations$.characterCounter}
		on:change={updateInstance}
	/>
</Section>
<Section>
	<IconTypeOption
		allowEmpty={true}
		bind:value={$configurations$.leadingIcon}
		label="Leading icon"
		on:change={updateInstance}
	/>
	<IconTypeOption
		allowEmpty={true}
		bind:value={$configurations$.trailingIcon}
		label="Trailing icon"
		on:change={updateInstance}
	/>
	<Checkbox
		label="Clear on trailing icon click"
		bind:checked={$configurations$.clearOnTrailingIconClick}
		on:change={updateInstance}
	/>
</Section>
<Typography variant="body2">Input configurations</Typography>
<Section>
	<Checkbox
		label="Max length"
		checked={!!$configurations$.maxlength}
		on:change={(e) => {
			$configurations$.characterCounter = false;
			$configurations$.maxlength = e.detail.checked ? 20 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Min length"
		checked={!!$configurations$.minlength}
		on:change={(e) => {
			$configurations$.minlength = e.detail.checked ? 5 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Step"
		checked={!!$configurations$.step}
		on:change={(e) => {
			$configurations$.step = e.detail.checked ? 0.5 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Min"
		checked={!!$configurations$.min}
		on:change={(e) => {
			$configurations$.min = e.detail.checked ? 5 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Max"
		checked={!!$configurations$.max}
		on:change={(e) => {
			$configurations$.max = e.detail.checked ? 20 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Placeholder"
		checked={!!$configurations$.placeholder}
		on:change={(e) => {
			$configurations$.placeholder = e.detail.checked
				? "Placeholder"
				: undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Title"
		checked={!!$configurations$.title}
		on:change={(e) => {
			$configurations$.title = e.detail.checked ? "Title" : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Size"
		checked={!!$configurations$.size}
		on:change={(e) => {
			$configurations$.size = e.detail.checked ? 10 : undefined;
			updateInstance();
		}}
	/>
	<Checkbox
		label="Read only"
		bind:checked={$configurations$.readonly}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Use datalist"
		bind:checked={$configurations$.useDatalist}
		on:change={updateInstance}
	/>
	<Checkbox
		label="Pattern"
		checked={!!$configurations$.pattern}
		on:change={(e) => {
			$configurations$.pattern = e.detail.checked ? "[a-z]+" : undefined;
			updateInstance();
		}}
	/>
</Section>
