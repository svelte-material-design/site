<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { IFrameContent } from "src/components/configurator";
	import type { CollapsableTopAppBarConfigurations } from "../types";
	import Preview from "./Preview.svelte";

	let iframeContent: IFrameContent;

	let configurations = {} as CollapsableTopAppBarConfigurations;
	let propsState: UseState;

	function handlePropsUpdate(newProps) {
		configurations = newProps;
		propsState.setValue(configurations);
	}

	function updateIFrame(...deps) {
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
	<Preview bind:configurations />
</IFrameContent>
