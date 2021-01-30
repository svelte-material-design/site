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
	} from "@smui/core/card";
	import type { ActionsLayout } from "../types";

	export let actionsLayout: ActionsLayout = undefined;
</script>

{#if actionsLayout}
	<Actions fullBleed={actionsLayout === "full-bleed"}>
		{#if actionsLayout === "full-bleed"}
			<ActionButton>
				<Label>Action</Label>
				<Icon>arrow_forward</Icon>
			</ActionButton>
		{:else}
			{#if actionsLayout === "single" || actionsLayout === "multi" || actionsLayout === "all"}
				<ActionButtons>
					<ActionButton>
						<Label>Action</Label>
						<Icon>refresh</Icon>
					</ActionButton>
					{#if actionsLayout === "multi" || actionsLayout === "all"}
						<ActionButton>
							<Label>Another</Label>
						</ActionButton>
					{/if}
				</ActionButtons>
			{/if}
			{#if actionsLayout === "icons" || actionsLayout === "all"}
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
