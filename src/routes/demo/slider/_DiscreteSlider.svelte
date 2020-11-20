<script lang="ts">
	import { DiscreteSlider } from "@smui/core/slider";
	import { FormField } from "@smui/core/form-field";

	let value = 0;
</script>

<div>
	Discrete with min/max/step:

	<DiscreteSlider bind:value min={-10} max={10} step={2} discrete />
</div>

<pre class="status">Value: {value}</pre>
