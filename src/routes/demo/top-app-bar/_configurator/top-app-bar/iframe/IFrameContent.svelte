<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { IFrameContent } from "src/components/configurator";
	import { TopAppBarConfigurations } from "../types";
	import Preview from "./Preview.svelte";

	let iframeContent: IFrameContent;

	let props = {} as TopAppBarConfigurations;
	let propsState: UseState;

	function handlePropsUpdate(newProps) {
		props = newProps;
		propsState.setValue(props);
	}

	function updateIFrame() {
		iframeContent.setProps(props);
	}
</script>

<svelte:options immutable={true} />

<UseState bind:this={propsState} value={props} onUpdate={updateIFrame} />

<IFrameContent
	bind:this={iframeContent}
	on:update={(event) => handlePropsUpdate(event.detail.props)}>
	<Preview {...props} />
</IFrameContent>
