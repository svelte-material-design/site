<svelte:options immutable={true} />

<script lang="ts">
	import { FormField } from "@svelte-material-design/core/form-field";
	import { Radio, RadioGroup } from "@svelte-material-design/core/radio";

	let selected = "yes";

</script>

<div>
	<RadioGroup bind:value={selected}>
		{#each ["yes", "no"] as option}
			<FormField style="margin-right: 1em;">
				<Radio value={option} />
				<span slot="label"
					>{`${option[0].toUpperCase()}${option.slice(1)}`}</span
				>
			</FormField>
		{/each}
	</RadioGroup>
</div>

<pre class="status">Selected: {selected}</pre>
