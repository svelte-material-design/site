<script lang="ts">
	import { createEventDispatcher, onMount } from "svelte";

	let mounted: boolean = false;

	const dispatch = createEventDispatcher<{
		update: {
			props: any;
		};
	}>();

	if (typeof window !== "undefined") {
		window.postMessage("init", "*");
		window.addEventListener("message", (event) => {
			if (event.data.type === "props") {
				handleMessage(event.data.props);
			}
		});
	}

	onMount(() => {
		mounted = true;
	});

	function handleMessage(props) {
		dispatch("update", { props });
	}

	export function setProps(props) {
		window.postMessage(
			{
				type: "update",
				props: props,
			},
			"*"
		);
	}
</script>

{#if mounted}
	<slot />
{/if}
