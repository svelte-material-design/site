<script lang="ts">
	import { createEventDispatcher } from "svelte";

	let initialized: boolean = false;

	const dispatch = createEventDispatcher<{
		update: {
			props: any;
		};
	}>();

	if (typeof window !== "undefined") {
		window.postMessage("init", "*");
		window.addEventListener("message", (event) => {
			if (event.data.type === "propsInit") {
				initialized = true;
			}
			if (event.data.type === "props") {
				handleMessage(event.data.props);
			}
		});
	}

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

{#if initialized}
	<slot />
{/if}
