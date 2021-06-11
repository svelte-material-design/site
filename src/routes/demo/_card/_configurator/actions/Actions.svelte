<svelte:options immutable={true} />

<script lang="ts">
	import {
		Actions,
		ActionButtons,
		ActionIcons,
		ActionIcon,
		Icon,
		ActionIconToggle,
		IconOn,
		IconOff,
		ActionButton,
		Label,
	} from "@svelte-material-design/core/card";
	import type { CardConfigurations } from "../types";

	export let configurations: CardConfigurations;

</script>

{#if configurations.actionsLayout}
	<Actions fullBleed={configurations.actionsLayout === "full-bleed"}>
		{#if configurations.actionsLayout === "full-bleed"}
			<ActionButton>
				<Label>Action</Label>
				<Icon>arrow_forward</Icon>
			</ActionButton>
		{:else}
			{#if configurations.actionsLayout === "single" || configurations.actionsLayout === "multi" || configurations.actionsLayout === "all"}
				<ActionButtons>
					<ActionButton>
						<Label>Action</Label>
						<Icon>refresh</Icon>
					</ActionButton>
					{#if configurations.actionsLayout === "multi" || configurations.actionsLayout === "all"}
						<ActionButton>
							<Label>Another</Label>
						</ActionButton>
					{/if}
				</ActionButtons>
			{/if}
			{#if configurations.actionsLayout === "icons" || configurations.actionsLayout === "all"}
				<ActionIcons>
					<ActionIconToggle title="Add to favorites">
						<IconOn>favorite</IconOn>
						<IconOff>favorite_border</IconOff>
					</ActionIconToggle>
					<ActionIcon title="Share">
						<Icon>share</Icon>
					</ActionIcon>
					<ActionIcon title="More options">
						<Icon>more_vert</Icon>
					</ActionIcon>
				</ActionIcons>
			{/if}
		{/if}
	</Actions>
{/if}
