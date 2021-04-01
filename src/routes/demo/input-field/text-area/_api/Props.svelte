<svelte:options immutable={true} />

<script lang="ts">
	import { Props } from "src/components/components-api/props";
	import {
		BaseInputFieldProps,
		WritableInputFieldProps,
		InputFieldCommonProps,
	} from "src/components/components-api/props/common/input";
</script>

<Props>
	<BaseInputFieldProps />
	<WritableInputFieldProps />
	<InputFieldCommonProps nativeInputElement="textarea" />
</Props>
