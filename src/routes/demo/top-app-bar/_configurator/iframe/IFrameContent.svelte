<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { IFrameContent } from "src/components/configurator";
	import type { TopAppBarConfigurations } from "../types";
	import Preview from "./Preview.svelte";

	let iframeContent: IFrameContent;

	let configurations = {} as TopAppBarConfigurations;
	let propsState: UseState;

	function handlePropsUpdate(newProps) {
		configurations = newProps;
		propsState.setValue(configurations);
	}

	function updateIFrame() {
		iframeContent.setProps({
			...configurations,
		});
	}
</script>

<UseState
	bind:this={propsState}
	value={configurations}
	onUpdate={updateIFrame}
/>

<IFrameContent
	bind:this={iframeContent}
	on:update={(event) => handlePropsUpdate(event.detail.props)}
>
	<Preview {configurations} />
</IFrameContent>
