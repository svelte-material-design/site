<svelte:options immutable={true} />

<script lang="ts">
	import {
		Option,
		Options,
		Input,
		OptionContent,
		PrimaryText,
		SecondaryText,
		OptionLeadingIcon,
		OptionTrailingIcon,
		Separator,
	} from "@svelte-material-design/core/select";
	import type { SelectConfigurations } from "../types";
	import { ListItem } from "src/components/configurator/smui-components/list";

	export let configurations: SelectConfigurations;
</script>

<Input />
<Options itemsRows={configurations.itemsRows} dense={configurations.dense}>
	{#if configurations.showEmptyOption}
		<Option value="" />
	{/if}
	{#each configurations.items as item, index}
		<ListItem
			component={Option}
			contentComponent={OptionContent}
			primaryTextComponent={PrimaryText}
			secondaryTextComponent={SecondaryText}
			leadingIconComponent={OptionLeadingIcon}
			trailingIconComponent={OptionTrailingIcon}
			bind:configurations={item}
			listConfigurations={{
				...configurations,
				itemsStyle: "textual",
			}}
		/>
		{#if index === 0 && configurations.separator}
			<Separator
				insetPadding={configurations.separatorInsetPadding}
				insetLeading={configurations.separatorInsetLeading}
				insetTrailing={configurations.separatorInsetTrailing}
			/>
		{/if}
	{/each}
</Options>
