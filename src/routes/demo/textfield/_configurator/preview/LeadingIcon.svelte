<script lang="ts">
	import { LeadingIcon } from "@svelte-material-design/core/textfield";
	import type { IconType } from "src/components/configurator/smui-components/icons";

	export let type: IconType;
</script>

{#if type === "material-icon"}
	<LeadingIcon>event</LeadingIcon>
{:else if type === "svg"}
	<LeadingIcon type="svg" props={{ viewBox: "0 0 24 24" }}>
		<circle cx="12" cy="12" r="12" />
	</LeadingIcon>
{:else if type === "img"}
	<LeadingIcon
		type="img"
		props={{
			src: "/icons/emojis/upside-down-face.png",
			alt: "Upside down face",
		}}
	/>
{/if}
