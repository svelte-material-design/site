<script lang="ts">
	import { TrailingIcon } from "@svelte-material-design/core/textfield";
	import type { IconType } from "src/components/configurator/smui-components/icons";

	export let type: IconType;
	export let clearOnTrailingIconClick: boolean;
</script>

{#if type === "material-icon"}
	<TrailingIcon role={clearOnTrailingIconClick ? "button" : undefined} on:click>
		{clearOnTrailingIconClick ? "clear" : "alarm"}
	</TrailingIcon>
{:else if type === "svg"}
	<TrailingIcon
		role={clearOnTrailingIconClick ? "button" : undefined}
		on:click
		type="svg"
		props={{ viewBox: "0 0 24 24" }}
	>
		<polygon points="0,24 12,0 24,24" />
	</TrailingIcon>
{:else if type === "img"}
	<TrailingIcon
		role={clearOnTrailingIconClick ? "button" : undefined}
		on:click
		type="img"
		props={{ src: "/icons/emojis/grinning-face.png", alt: "Grinning face" }}
	/>
{/if}
