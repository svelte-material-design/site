<script lang="ts">
	import { setLayoutPath, getLayoutPath } from "src/contexts";

	setLayoutPath(`${getLayoutPath()}/collapsable-top-app-bar`);
</script>

<slot />
