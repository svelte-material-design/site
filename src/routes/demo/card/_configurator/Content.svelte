<script lang="ts">
	import { Content, Title, SubTitle } from "@svelte-material-design/core/card";

	export let title: string;
	export let subtitle: string;
	export let text: string;
</script>

{#if title || subtitle || text}
	<Content>
		{#if title}
			<Title>{title}</Title>
		{/if}
		{#if subtitle}
			<SubTitle>{subtitle}</SubTitle>
		{/if}
		{text}
	</Content>
{/if}
