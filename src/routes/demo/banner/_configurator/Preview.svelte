<svelte:options immutable={true} />

<script lang="ts">
	import {
		Banner,
		Text,
		Actions,
		Action,
		Label,
		Graphic,
		Icon,
		Content,
	} from "@svelte-material-design/core/banner";
	import { getConfiguratorContext } from "./ConfiguratorContext";

	const { configurations$ } = getConfiguratorContext();

	function updateInstance() {
		$configurations$ = { ...$configurations$ };
	}

</script>

<Banner
	bind:open={$configurations$.open}
	stacked={$configurations$.stacked}
	fixed={$configurations$.fixed}
	centered={$configurations$.centered}
	on:closed={updateInstance}
	on:opened={updateInstance}
>
	<Content>
		<Graphic>
			<Icon>report_problem</Icon>
		</Graphic>
		<Text>
			There was a problem processing a transaction on your credit card.
		</Text>
	</Content>
	<Actions>
		<Action type="secondary">
			<Label>Secondary</Label>
		</Action>
		<Action type="primary">
			<Label>Primary</Label>
		</Action>
	</Actions>
</Banner>
