<script lang="ts">
	import { List, Item, Content, LeadingIcon, TrailingIcon } from "@svelte-material-design/core/list";
	import { getImgPlaceholderSrc } from "src/functions/imgPlacehoder";

	let avatarImg = getImgPlaceholderSrc({
		height: 40,
		width: 40,
		text: "40x40",
	});
</script>

<List>
	<Item let:leadingClassName let:trailingClassName>
		<LeadingIcon class={leadingClassName}>alarm</LeadingIcon>
		<Content>1</Content>
		<TrailingIcon class={trailingClassName}>alarm</TrailingIcon>
	</Item>
	<Item let:leadingClassName let:trailingClassName>
		<LeadingIcon class={leadingClassName} type="svg"
			><circle cx="12" cy="12" r="12" /></LeadingIcon
		>
		<Content>2</Content>
		<TrailingIcon class={trailingClassName} type="svg"
			><circle cx="12" cy="12" r="12" /></TrailingIcon
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
