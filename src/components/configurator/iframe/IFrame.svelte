<svelte:options immutable={true} />

<script lang="ts">
	import { getLayoutPath } from "src/components/layout/module-layout/context";
	import { onMount, tick, createEventDispatcher } from "svelte";
	import { UseState } from "@raythurnevoid/svelte-hooks/ts";

	export let src: string;
	export let title: string;
	export let props: any;

	const dispatch = createEventDispatcher<{
		update: {
			props: any;
		};
	}>();

	let propsState: UseState;
	let iframe: HTMLIFrameElement;
	let iframeReady: boolean = false;

	let currentPath: string = getLayoutPath();
	onMount(async () => {
		await tick();

		iframe.contentWindow.addEventListener("message", (event) => {
			if (event.data === "init") {
				iframeReady = true;
				updateProps();
				iframe.contentWindow.postMessage({ type: "propsInit" }, "*");
			}

			if (event.data.type === "update") {
				props = { ...event.data.props };
				propsState.setValue(props);
				dispatch("update", {
					props: event.data.props,
				});
			}
		});
	});

	function updateProps() {
		if (iframe && iframeReady)
			iframe.contentWindow.postMessage({ type: "props", props }, "*");
	}

</script>

<UseState bind:this={propsState} value={props} onUpdate={updateProps} />

{#if currentPath}
	<iframe bind:this={iframe} src="{currentPath}/{src || 'iframe'}" {title} />
{/if}

<style>
	iframe {
		width: 100%;
		border: none;
		height: 100%;
	}

</style>
