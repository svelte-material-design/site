<script lang="ts">
	import Prism from "svelte-prism/src/Prism.svelte";
	import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace";
	import "prismjs/components/prism-scss.js";
	import "./Code.scss";

	export let source: string;
	export let language: "html" | "scss";

	function transformSource(src: string) {
		src = src.replace(/\$\{escape\}/g, "\n");

		return src;
	}
</script>

<Prism {language} transform={transformSource} {source} />
