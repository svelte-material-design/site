<script lang="ts">
	import { createEventDispatcher, onMount, tick } from "svelte";
	import { Use } from "@smui/core/packages/common/src/hooks";

	const value: string = "value";

	const dispatch = createEventDispatcher<{
		init: string;
	}>();

	onMount(async () => {
		dispatch("init", "mounting");
		await tick();
		dispatch("init", "mounted");
	});

	function fireInit() {
		dispatch("init", value);
	}
</script>

<Use effect hook={() => dispatch('init', 'effect')} />

<slot />
