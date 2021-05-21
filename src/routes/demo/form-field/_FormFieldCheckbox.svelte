<svelte:options immutable={true} />

<script lang="ts">
	import { FormField } from "@svelte-material-design/core/form-field";
	import { Checkbox } from "@svelte-material-design/core/checkbox";

	let checked = false;

</script>

<div>
	<FormField>
		<Checkbox bind:checked />
		<span slot="label"
			>I agree to the terms and conditions of the software,
			<small style="opacity: .7"
				>and hereby sign away my life just to check my freaking messages.</small
			></span
		>
	</FormField>
</div>

<pre class="status">Checked: {checked ? 'Yes, muahahah.' : 'Not yet.'}</pre>
