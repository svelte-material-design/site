<svelte:options immutable={true} />

<script lang="ts">
	import {
		Props,
		Signature,
		Prop,
		Name,
		Default,
		Description,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
	} from "src/components/components-api/props/common";
	import { CommonGroupsProps } from "src/components/components-api/props/common/groups";

</script>

<Props>
	<Prop>
		<Name>focusOnActivate</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>
			Sets whether tabs focus themselves when activated.
		</Description>
	</Prop>
	<Prop>
		<Name>activateOnKeyboardNavigation</Name>
		<Signature keyword="boolean">
			<Default value={true} />
		</Signature>
		<Description>
			Sets how tabs activate in response to keyboard interaction.
			<ul>
				<li>
					Automatic (<code>true</code>) activates as soon as a tab is focused
					with arrow keys;
				</li>
				<li>
					manual (<code>false</code>) activates only when the user presses
					space/enter.
				</li>
			</ul>
		</Description>
	</Prop>
	<Prop>
		<Name>transition</Name>
		<Signature keyword="boolean">
			<Default value={false} />
		</Signature>
		<Description>
			When <code>true</code> sets up the tab indicator to fade in on activation and
			fade out on deactivation
		</Description>
	</Prop>
	<CommonGroupsProps>
		<svelte:fragment slot="valueSignature">
			<Signature keyword="string" />
		</svelte:fragment>
	</CommonGroupsProps>
	<BaseComponentProps autoGeneratedId>
		<Dom instances={["HTMLDivElement"]} />
	</BaseComponentProps>
</Props>
