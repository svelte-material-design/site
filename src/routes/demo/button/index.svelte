<script lang="ts">
	import { Events } from "src/components/components-api";
	import { Props } from "./_api";
	import { ApiTitle } from "src/components/components-api/common";
</script>

<ApiTitle>Button</ApiTitle>
<Props />
<Events
	forwardedHTMLEvents={['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'focus', 'blur']} />
