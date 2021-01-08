<script lang="ts">
	import {
		Actions,
		ActionButtons,
		IconActions,
		IconAction,
		Icon,
		IconActionToggle,
		IconOn,
		IconOff,
		Action,
		ActionIcon,
		ActionLabel,
	} from "@smui/core/card";
	import { ActionsLayout } from "../types";

	export let actionsLayout: ActionsLayout = undefined;
</script>

{#if actionsLayout}
	<Actions fullBleed={actionsLayout === 'full-bleed'}>
		{#if actionsLayout === 'full-bleed'}
			<Action>
				<ActionLabel>Action</ActionLabel>
				<ActionIcon>arrow_forward</ActionIcon>
			</Action>
		{:else}
			{#if actionsLayout === 'single' || actionsLayout === 'multi' || actionsLayout === 'all'}
				<ActionButtons>
					<Action>
						<ActionLabel>Action</ActionLabel>
						<ActionIcon>refresh</ActionIcon>
					</Action>
					{#if actionsLayout === 'multi' || actionsLayout === 'all'}
						<Action>
							<ActionLabel>Another</ActionLabel>
						</Action>
					{/if}
				</ActionButtons>
			{/if}
			{#if actionsLayout === 'icons' || actionsLayout === 'all'}
				<IconActions>
					<IconActionToggle title="Add to favorites">
						<IconOn>favorite</IconOn>
						<IconOff>favorite_border</IconOff>
					</IconActionToggle>
					<IconAction title="Share">
						<Icon>share</Icon>
					</IconAction>
					<IconAction title="More options">
						<Icon>more_vert</Icon>
					</IconAction>
				</IconActions>
			{/if}
		{/if}
	</Actions>
{/if}
