<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { CommonListSubComponents } from "src/components/components-api/sub-components/common/lists";
</script>

<SubComponents>
	<CommonListSubComponents>
		<svelte-fragment slot="item">
			<SubComponent indentation={2}>
				<Tag href="checkbox">Checkbox</Tag>
				<Description>
					A checkbox which selection is syncronized with the list item. It must
					be used when <code>role</code> is <code>"group"</code>.
				</Description>
			</SubComponent>
			<SubComponent indentation={2}>
				<Tag href="radio">Radio</Tag>
				<Description>
					A radio which selection is syncronized with the list item. It must be
					used when <code>role</code> is <code>"radiogroup"</code>.
				</Description>
			</SubComponent>
		</svelte-fragment>
	</CommonListSubComponents>
</SubComponents>
