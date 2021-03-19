<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
	import { BaseInputFieldSubComponents } from "src/components/components-api/sub-components/common/input";
</script>

<BaseInputFieldSubComponents
	componentName="InputField"
	inputComponentName="Input"
	inputComponentHref="input"
	inputElement="input"
>
	<svelte-fragment slot="content">
		<SubComponent indentation={1}>
			<Tag href="prefix">Prefix</Tag>
			<Description>
				A content placed before the <code>Input</code> component. No more than 1
				must be used.
			</Description>
		</SubComponent>
		<SubComponent indentation={1}>
			<Tag href="suffix">Suffix</Tag>
			<Description>
				A content placed after the <code>Input</code> component. No more than 1 must
				be used.
			</Description>
		</SubComponent>
		<SubComponent indentation={1}>
			<Tag href="icon">Icon</Tag>
			<Description>Can be used as both leading or trailing icon.</Description>
		</SubComponent>
	</svelte-fragment>
</BaseInputFieldSubComponents>
