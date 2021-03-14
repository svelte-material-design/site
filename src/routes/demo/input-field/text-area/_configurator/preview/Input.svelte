<svelte:options immutable={true} />

<script lang="ts">
	import { TextArea } from "@svelte-material-design/core/textfield";
	import { InputFieldConfigurations } from "../types";

	export let configurations: InputFieldConfigurations;
</script>

<TextArea
	readonly={configurations.readonly ? true : undefined}
	title={configurations.title}
	placeholder={configurations.placeholder}
	size={configurations.size}
	maxlength={configurations.maxlength}
	rows={configurations.rows}
	cols={configurations.cols}
	wrap={configurations.wrap}
	resizable={configurations.resizable}
	name="input-field"
/>
