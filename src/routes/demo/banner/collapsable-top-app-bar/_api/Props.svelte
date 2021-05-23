<script lang="ts">
	import {
		Props,
		Prop,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { CommonTopAppBarProps } from "../../_api/common";
</script>

<Props>
	<Prop>
		<Name readonly>collapsed</Name>
		<Signature keyword="boolean" />
		<Description>
			When
			<code>true</code>
			the top-app-bar is collapsed. If
			<code>alwaysCollapsed</code>
			is set to
			<code>true</code>
			then
			<code>collapsed</code>
			is always
			<code>true</code>.
		</Description>
	</Prop>
	<Prop>
		<Name>alwaysCollapsed</Name>
		<Signature keyword="boolean" />
		<Description>
			If
			<code>true</code>
			the top-app-bar is always collapsed.
		</Description>
	</Prop>
	<CommonTopAppBarProps />
	<BaseComponentProps>
		<Dom instances={['HTMLDivElement']} />
	</BaseComponentProps>
</Props>
