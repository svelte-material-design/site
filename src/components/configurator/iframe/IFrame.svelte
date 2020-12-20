<script lang="ts">
	import { onMount, tick, createEventDispatcher } from "svelte";

	export let src: string;
	export let title: string;
	export let props: any;

	const dispatch = createEventDispatcher<{
		update: {
			props: any;
		};
	}>();

	let iframe: HTMLIFrameElement;
	let iframeReady: boolean = false;

	$: if (iframe && iframeReady) updateProps(props);

	let currentPath: string;
	onMount(async () => {
		currentPath = window.location.href;

		await tick();

		iframe.contentWindow.addEventListener("message", (event) => {
			if (event.data === "init") {
				iframeReady = true;
			}

			if (event.data.type === "update") {
				dispatch("update", {
					props: event.data.props,
				});
			}
		});
	});

	function updateProps(...deps) {
		iframe.contentWindow.postMessage({ type: "props", props }, "*");
	}
</script>

<style>
	iframe {
		width: 100%;
		border: none;
	}
</style>

<svelte:options immutable={true} />

{#if currentPath}
	<iframe bind:this={iframe} src="{currentPath}{src}" {title} />
{/if}
