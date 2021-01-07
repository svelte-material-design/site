<script lang="ts">
	import { IconType, Icon } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

<Icon {...$$restProps} {type} {component} {button} iconContent="favorite">
	<circle cx="12" cy="12" r="12" />
</Icon>
