<script lang="ts">
	import { IconType, Icon } from ".";

	export let type: IconType;
	export let component: any;
	export let button: boolean = false;
</script>

<Icon {type} {component} {button}>
	{#if type === 'material-icon'}
		{button ? 'clear' : 'alarm'}
	{:else if type === 'svg'}
		<polygon points="0,24 12,0 24,24" />
	{/if}
</Icon>
