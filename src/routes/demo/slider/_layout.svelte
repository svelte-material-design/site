<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";
	import { Title } from "src/components/components-api";
	import { TabBar } from "src/components/configurator/tab-bar";

	export let segment: string;
	const layoutPath = setLayoutPath(`${getLayoutPath()}/slider`);

	let currentTab: "slider" | "checkbox-group" =
		segment === "checkbox-group" ? "checkbox-group" : "slider";
</script>

{#if segment === "iframe"}
	<slot />
{:else}
	<section>
		<Title module="slider">Slider</Title>
		<TabBar
			bind:active={currentTab}
			tabs={[
				{ key: "slider", label: "Slider", href: layoutPath },
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
