<svelte:options immutable={true} />

<script lang="ts">
	import {
		Option,
		Options,
		Input,
		OptionContent,
		PrimaryText,
		SecondaryText,
		OptionIcon,
	} from "@svelte-material-design/core/select";
	import { SelectConfigurations } from "../types";
	import { ListItem } from "src/components/configurator/smui-components/list";

	export let configurations: SelectConfigurations;
</script>

<Input />
<Options>
	{#if configurations.showEmptyOption}
		<Option value="" />
	{/if}
	{#each configurations.items as item}
		<ListItem
			component={Option}
			contentComponent={OptionContent}
			primaryTextComponent={PrimaryText}
			secondaryTextComponent={SecondaryText}
			iconComponent={OptionIcon}
			bind:configurations={item}
			listConfigurations={{
				...configurations,
				itemsStyle: "textual",
			}}
		/>
	{/each}
</Options>
