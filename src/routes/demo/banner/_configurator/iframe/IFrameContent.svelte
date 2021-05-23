<svelte:options immutable={true} />

<script lang="ts">
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { IFrameContent } from "src/components/configurator";
	import {
		createConfiguratorStore,
		setConfiguratorContext,
	} from "../ConfiguratorContext";
	import { Preview } from "..";

	const context$ = createConfiguratorStore();
	setConfiguratorContext(context$);

	const { configurations$ } = context$;

	let iframeContent: IFrameContent;

	let propsState: UseState;

	function handlePropsUpdate(newProps) {
		$configurations$ = newProps;
		propsState.setValue($configurations$);
	}

	function updateIFrame() {
		iframeContent.setProps({
			...$configurations$,
		});
	}

</script>

<UseState
	bind:this={propsState}
	value={$configurations$}
	onUpdate={updateIFrame}
/>

<IFrameContent
	bind:this={iframeContent}
	on:update={(event) => handlePropsUpdate(event.detail.props)}
>
	<Preview />
</IFrameContent>
