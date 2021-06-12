<svelte:options immutable={true} />

<script lang="ts">
	import {
		Banner,
		Text,
		Actions,
		ActionButton,
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
	stackedOnMobile={$configurations$.stackedOnMobile}
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
		<ActionButton type="secondary">
			<Label>Secondary</Label>
		</ActionButton>
		<ActionButton type="primary">
			<Label>Primary</Label>
		</ActionButton>
	</Actions>
</Banner>
