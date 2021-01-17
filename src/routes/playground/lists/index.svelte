<script lang="ts">
	import { List, Item, Content, Icon } from "@svelte-material-design/core/list";
	import { getImgPlaceholderSrc } from "src/functions/imgPlacehoder";

	let avatarImg = getImgPlaceholderSrc({
		height: 40,
		width: 40,
		text: "40x40",
	});
</script>

<List>
	<Item let:leadingClassName let:trailingClassName>
		<Icon class={leadingClassName}>alarm</Icon>
		<Content>1</Content>
		<Icon class={trailingClassName}>alarm</Icon>
	</Item>
	<Item let:leadingClassName let:trailingClassName>
		<Icon class={leadingClassName} type="svg"
			><circle cx="12" cy="12" r="12" /></Icon
		>
		<Content>2</Content>
		<Icon class={trailingClassName} type="svg"
			><circle cx="12" cy="12" r="12" /></Icon
		>
	</Item>
</List>

<List type="avatar">
	<Item let:leadingClassName>
		<img class={leadingClassName} src={avatarImg} alt="avatar" />
		<Content>1</Content>
	</Item>
	<Item let:leadingClassName>
		<img class={leadingClassName} src={avatarImg} alt="avatar" />
		<Content>2</Content>
	</Item>
</List>
