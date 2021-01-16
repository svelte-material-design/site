<script lang="ts">
	import { Keyword } from "../../common/particles/atoms";

	export let bold: boolean = false;
</script>

<code class="event-name" class:bold>
	<Keyword>on:</Keyword><!--
	--><slot />
</code>

<style lang="scss">
	.event-name {
		color: #ab0d90;
	}

	.bold {
		font-weight: bold;
	}
</style>
