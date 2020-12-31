<script lang="ts">
	import { Button } from "@smui/core/button";
	import { UseState } from "@raythurnevoid/svelte-hooks";
	import { IFrameContent } from "src/components/configurator";
	import { SnackbarConfigurations } from "../types";
	import SnackbarWrapper from "./_Snackbar.svelte";

	let iframeContent: IFrameContent;

	let snackbarProps: SnackbarConfigurations = {} as SnackbarConfigurations;
	let propsState: UseState;

	function showSnackbar() {
		snackbarProps.open = true;
		snackbarProps = { ...snackbarProps };
	}

	function handleClosed() {
		snackbarProps.open = false;
		snackbarProps = { ...snackbarProps };
	}

	function handlePropsUpdate(props) {
		snackbarProps = props;
		propsState.setValue(props);
	}

	function updateIFrame() {
		iframeContent.setProps(snackbarProps);
	}
</script>

<svelte:options immutable={true} />

<UseState
	bind:this={propsState}
	value={snackbarProps}
	onUpdate={updateIFrame} />

<IFrameContent
	bind:this={iframeContent}
	on:update={(event) => handlePropsUpdate(event.detail.props)}>
	<Button on:click={showSnackbar}>Open snackbar</Button>

	<SnackbarWrapper {...snackbarProps} on:closed={handleClosed} />
</IFrameContent>
