<script lang="ts">
	import { IconType, Icon } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

<Icon
	{...$$restProps}
	{type}
	{component}
	{button}
	src={type === 'img' ? '/icons/emojis/grinning-face.png' : undefined}
	alt={type === 'img' ? 'Grinning face' : undefined}
	iconContent={button ? 'clear' : 'alarm'}>
	<polygon points="0,24 12,0 24,24" />
</Icon>
