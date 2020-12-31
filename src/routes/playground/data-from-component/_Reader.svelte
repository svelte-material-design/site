<script lang="ts">
	import { onMount, tick } from "svelte";
	import { Use } from "@raythurnevoid/svelte-hooks";

	export let value: string;
	let valueOnInit = value;
	let valueOnMounting: string;
	let valueOnMounted: string;
	let valueOnEffect: string;

	onMount(async () => {
		valueOnMounting = value;
		await tick();
		valueOnMounted = value;
	});

	function effect() {
		valueOnEffect = value;
	}
</script>

<Use effect hook={effect} />

<div>Value on init: {valueOnInit}</div>
<div>Value on mounting: {valueOnMounting}</div>
<div>Value on mounted: {valueOnMounted}</div>
<div>Value on effect: {valueOnEffect}</div>
<div>Value: {value}</div>
