<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";
	import { TabBar } from "src/components/configurator/tab-bar";

	export let segment: string;
	const layoutPath = setLayoutPath(`${getLayoutPath()}/checkbox`);

	let currentTab: "checkbox" | "checkbox-group" =
		segment === "checkbox-group" ? "checkbox-group" : "checkbox";
</script>

{#if segment === "iframe"}
	<slot />
{:else}
	<section>
		<Title module="checkbox">Checkbox</Title>
		<TabBar
			bind:active={currentTab}
			tabs={[
				{ key: "checkbox", label: "Checkbox", href: layoutPath },
				{
					key: "checkbox-group",
					label: "Checkbox group",
					href: `${layoutPath}/checkbox-group`,
				},
			]}
		/>
		<slot />
	</section>
{/if}
