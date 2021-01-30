<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { IFrameContent } from "src/components/configurator";
	import type { CollapsableTopAppBarConfigurations } from "../types";
	import Preview from "./Preview.svelte";

	let iframeContent: IFrameContent;

	let props = {} as CollapsableTopAppBarConfigurations;
	let collapsed: boolean;
	let propsState: UseState;

	function handlePropsUpdate(newProps) {
		props = newProps;
		propsState.setValue(props);
	}

	function updateIFrame(...deps) {
		iframeContent.setProps({
			...props,
			collapsed,
		});
	}

	$: if (iframeContent) updateIFrame(collapsed);
</script>

<UseState bind:this={propsState} value={props} onUpdate={updateIFrame} />

<IFrameContent
	bind:this={iframeContent}
	on:update={(event) => handlePropsUpdate(event.detail.props)}
>
	<Preview {...props} bind:collapsed />
</IFrameContent>
