<svelte:options immutable={true} />

<script lang="ts">
	import {
		Checkbox,
		Select,
	} from "src/components/configurator/atoms/configurations";
	import { TabIndicatorTransition } from "@svelte-material-design/core/tab-bar";

	export let focusOnActivate: boolean = true;
	export let activateOnKeyboardNavigation: boolean = true;
	export let transition: TabIndicatorTransition;
</script>

<Checkbox bind:checked={focusOnActivate} label="Focus on activate" />
<Checkbox
	bind:checked={activateOnKeyboardNavigation}
	label="Activate on keyboard navigation"
/>
<Select
	bind:value={transition}
	label="Tab indicator transition"
	nullable={false}
	options={[
		{ value: "slide", label: "Slide" },
		{ value: "fade", label: "Fade" },
	]}
/>
