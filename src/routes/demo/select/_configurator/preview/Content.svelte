<svelte:options immutable={true} />

<script lang="ts">
	import {
		Content,
		LeadingIcon as SelectLeadingIcon,
	} from "@svelte-material-design/core/select";
	import type { SelectConfigurations } from "../types";
	import { ContentComponents } from ".";
	import { LeadingIcon } from "src/components/configurator/smui-components/icons";

	export let configurations: SelectConfigurations;
</script>

{#if configurations.label && configurations.leadingIcon}
	<Content>
		<span slot="label">{configurations.label}</span>
		<svelte-fragment slot="leading">
			<LeadingIcon
				component={SelectLeadingIcon}
				type={configurations.leadingIcon}
			/>
		</svelte-fragment>
		<ContentComponents bind:configurations />
	</Content>
{:else if configurations.label}
	<Content>
		<span slot="label">{configurations.label}</span>
		<ContentComponents bind:configurations />
	</Content>
{:else if configurations.leadingIcon}
	<Content>
		<svelte-fragment slot="leading">
			<LeadingIcon
				component={SelectLeadingIcon}
				type={configurations.leadingIcon}
			/>
		</svelte-fragment>
		<ContentComponents bind:configurations />
	</Content>
{:else}
	<Content>
		<ContentComponents bind:configurations />
	</Content>
{/if}
