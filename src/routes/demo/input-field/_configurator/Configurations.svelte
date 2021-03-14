<svelte:options immutable={true} />

<script lang="ts">
	import { Section } from "src/components/configurator/molecules/configurations";
	import { getConfiguratorContext } from "./ConfiguratorContext";
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import {
		BaseInputConfigurations,
		BaseInputFieldConfigurations,
	} from "src/components/configurator/smui-components/input";

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
</Section>
<BaseInputFieldConfigurations bind:configurations={$configurations$} />
<Section>
	<Checkbox
		label="Line Ripple"
		bind:checked={$configurations$.lineRipple}
		on:change={updateInstance}
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
<BaseInputConfigurations bind:configurations={$configurations$} />
<Section>
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
		label="Size"
		checked={!!$configurations$.size}
		on:change={(e) => {
			$configurations$.size = e.detail.checked ? 10 : undefined;
			updateInstance();
		}}
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
