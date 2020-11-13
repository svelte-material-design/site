<script lang="ts">
	import { TextArea } from "@smui/core/textfield";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSCSSCode,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/packages/checkbox";
	import { getHelperTextCode } from "src/components/configurator/snippets";
	import HelperText from "./_HelperText.svelte";

	let fullWidth: boolean;
	let resizable: boolean;
	let customStyle: boolean;
	let label: boolean = true;
	let helperText: boolean;
	let helperTextAsValidationMsg: boolean;
	let persistentHelperText: boolean;
	let characterCounter: boolean;
	let readonly: boolean;

	let usePlaceholder: boolean;
	let useSize: boolean;
	let useTitle: boolean;
	let useMaxlength: boolean = true;
	let useMinlength: boolean;
	let useCols: boolean;
	let useRows: boolean;
	let useHardWrap: boolean;
	let required: boolean;

	let value: any;
	let dirty: boolean;
	let invalid: boolean;

	let className: string;
	let title: string;
	let placeholder: string;
	let size: number;
	let maxlength: number;
	let minlength: number;

	$: if (!helperText) persistentHelperText = false;
	$: if (!useMaxlength) characterCounter = false;

	$: className = customStyle ? "shaped-text-area" : undefined;

	$: title = useTitle ? "Title" : undefined;
	$: placeholder = usePlaceholder ? "Placeholder" : undefined;
	$: size = useSize ? 10 : undefined;
	$: placeholder = usePlaceholder ? "Placeholder" : undefined;
	$: maxlength = useMaxlength ? 18 : undefined;
	$: minlength = useMinlength ? 4 : undefined;
	$: cols = useCols ? 30 : undefined;
	$: rows = useRows ? 5 : undefined;
	let wrap: "hard";
	$: wrap = useHardWrap ? "hard" : undefined;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "TextArea",
		props: [
			"bind:value",
			"bind:dirty",
			"bind:invalid",
			`name="input-field"`,
			[className, `class="${className}"`],
			[title, `title="${title}"`],
			[placeholder, `placeholder="${placeholder}"`],
			[size, `size={${size}}`],
			[minlength, `minlength={${minlength}}`],
			[maxlength, `maxlength={${maxlength}}`],
			[cols, `cols={${cols}}`],
			[rows, `rows={${rows}}`],
			[wrap, `wrap="${wrap}"`],
			[fullWidth, `fullWidth`],
			[resizable, `resizable`],
			[readonly, "readonly"],
			[required, "required"],
			[invalid, "invalid"],
		],
		content: getContentCode(
			label,
			helperText,
			helperTextAsValidationMsg,
			characterCounter,
			persistentHelperText
		),
	});

	$: scssCode = generateSCSSCode({
		content: getSCSSCode(customStyle),
	});

	function getContentCode(
		labelValue: typeof label,
		helperTextValue: typeof helperText,
		helperTextAsValidationMsgValue: typeof helperTextAsValidationMsg,
		characterCounterValue: typeof characterCounter,
		persistentHelperTextValue: typeof persistentHelperText
	) {
		return `
			${labelValue ? `<span slot="label">Label</span>` : ""}
			${getHelperTextCode({
				text: helperTextValue ? "Helper Text" : undefined,
				validationMsg: helperTextAsValidationMsgValue,
				characterCounter: characterCounterValue,
				persistent: persistentHelperTextValue,
				indentSize: 3,
				indentFirstLine: false,
			})}
		`;
	}

	function getSCSSCode(customStyleValue: typeof customStyle) {
		if (customStyleValue) {
			return `
				@use "@material/textfield";

				.mdc-text-field.shaped-text-area {
					@include textfield.textarea-shape-radius(16px);
				}
			`;
		} else {
			return "";
		}
	}
</script>

<style>
	.preview-container {
		width: 80%;
		border: 1px solid rgba(0, 0, 0, 0.1);
		padding: 1em;
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		{#if label}
			<TextArea
				bind:value
				bind:dirty
				bind:invalid
				name="text-area"
				class={className}
				{title}
				{placeholder}
				{fullWidth}
				{resizable}
				{minlength}
				{maxlength}
				{required}
				{readonly}
				{cols}
				{rows}
				{wrap}>
				<span slot="label">Label</span>
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			</TextArea>
		{:else}
			<TextArea
				bind:value
				bind:dirty
				bind:invalid
				name="text-area"
				class={className}
				{title}
				{placeholder}
				{fullWidth}
				{resizable}
				{minlength}
				{maxlength}
				{required}
				{readonly}
				{cols}
				{rows}
				{wrap}>
				<HelperText
					{helperText}
					validationMsg={helperTextAsValidationMsg}
					persistent={persistentHelperText}
					{characterCounter} />
			</TextArea>
		{/if}
	</div>
	<div slot="values">
		<div>
			value:
			{#if value != null && typeof value === 'string'}
				"{value}"
			{:else}{value}{/if}
		</div>
		<div>dirty: {dirty}</div>
		<div>invalid: {invalid}</div>
	</div>
	<div slot="optionsSidebar" class="options-sidebar">
		<div>
			<FormField>
				<Checkbox bind:checked={customStyle} />
				<span slot="label">Custom style</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={fullWidth} />
				<span slot="label">Full width</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={label} />
				<span slot="label">Show Label</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={resizable} />
				<span slot="label">Resizable</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={helperText} />
				<span slot="label">Helper text</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={readonly} />
				<span slot="label">Read only</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={helperTextAsValidationMsg} />
				<span slot="label" style="white-space: initial;">
					Helper text as validation message
				</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={invalid} />
				<span slot="label">Invalid</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={persistentHelperText} disabled={!helperText} />
				<span slot="label">Persistent helper text</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={usePlaceholder} />
				<span slot="label">Placeholder</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={characterCounter} disabled={!useMaxlength} />
				<span slot="label">Character Counter</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useTitle} />
				<span slot="label">Title</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useMaxlength} />
				<span slot="label">Max Length</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useMinlength} />
				<span slot="label">Min Length</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useCols} />
				<span slot="label">Use cols</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useRows} />
				<span slot="label">Use rows</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={required} />
				<span slot="label">Required</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useHardWrap} />
				<span slot="label">Use hard wrap</span>
			</FormField>
		</div>
	</div>
</Configurator>
