<script lang="ts">
	import { Events } from "src/components/components-api";
	import { Props } from "./_api";
</script>

<Props />
<Events
	forwardedHTMLEvents={['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'focus', 'blur']} />
