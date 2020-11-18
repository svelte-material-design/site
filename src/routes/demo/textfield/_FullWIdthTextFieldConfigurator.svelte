<script lang="ts">
	import { FullWidthTextFieldType } from "@smui/core/textfield";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/packages/checkbox";
	import IconTypeOption, {
		IconType,
	} from "src/components/configurator/common-options/IconTypeOption.svelte";
	import {
		getHelperTextCode,
		getIconCode,
	} from "src/components/configurator/snippets";
	import FullWidthTextField from "./_FullWidthTextField.svelte";
	import { Select, Option } from "@smui/core/select";

	let lineRipple: boolean = true;
	let helperText: boolean;
	let helperTextAsValidationMsg: boolean;
	let persistentHelperText: boolean;
	let characterCounter: boolean;
	let type: FullWidthTextFieldType;
	let usePrefix: boolean;
	let useSuffix: boolean;
	let readonly: boolean;

	let leadingIcon: IconType;
	let trailingIcon: IconType;
	let clearOnTrailingIconClick: boolean;

	let useDatalist: boolean;
	let usePlaceholder: boolean = true;
	let useTitle: boolean;
	let useMaxlength: boolean = true;
	let useMinlength: boolean;
	let useAutocomplete: boolean;
	let usePattern: boolean;
	let required: boolean;
	let formnovalidate: boolean;

	let value: any;
	let dirty: boolean;
	let invalid: boolean;

	let title: string;
	let placeholder: string;
	let autocomplete: string;
	let pattern: string;
	let prefix: string;
	let suffix: string;
	let maxlength: number;
	let minlength: number;

	$: if (!helperText) persistentHelperText = false;
	$: if (!useMaxlength) characterCounter = false;
	$: if (!trailingIcon) clearOnTrailingIconClick = false;

	$: title = useTitle ? "Title" : undefined;
	$: placeholder = usePlaceholder ? "Placeholder" : undefined;
	$: autocomplete = useAutocomplete ? "on" : undefined;
	$: pattern = usePattern ? "[0-9]{10}" : undefined;
	$: prefix = usePrefix ? "$" : undefined;
	$: suffix = useSuffix ? ".00" : undefined;
	$: maxlength = useMaxlength ? 18 : undefined;
	$: minlength = useMinlength ? 4 : undefined;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "FullWidthTextField",
		props: [
			"bind:value",
			"bind:dirty",
			"bind:invalid",
			`name="full-width-text-field"`,
			[!lineRipple, `lineRipple={false}`],
			[type, `type="${type}"`],
			[title, `title="${title}"`],
			[placeholder, `placeholder="${placeholder}"`],
			[autocomplete, `autocomplete="${autocomplete}"`],
			[pattern, `pattern="${pattern}"`],
			[prefix, `prefix="${prefix}"`],
			[suffix, `suffix="${suffix}"`],
			[minlength, `minlength={${minlength}}`],
			[maxlength, `maxlength={${maxlength}}`],
			[readonly, "readonly"],
			[formnovalidate, "formnovalidate"],
			[required, "required"],
			[invalid, "invalid"],
		],
		content: getContentCode(
			leadingIcon,
			trailingIcon,
			clearOnTrailingIconClick,
			helperText,
			helperTextAsValidationMsg,
			characterCounter,
			persistentHelperText,
			useDatalist
		),
	});

	function getContentCode(
		leadingIconValue: typeof leadingIcon,
		trailingIconValue: typeof trailingIcon,
		clearOnTrailingIconClickValue: typeof clearOnTrailingIconClick,
		helperTextValue: typeof helperText,
		helperTextAsValidationMsgValue: typeof helperTextAsValidationMsg,
		characterCounterValue: typeof characterCounter,
		persistentHelperTextValue: typeof persistentHelperText,
		useDatalistValue: typeof useDatalist
	) {
		return `
			${getLeadingIconCode(leadingIconValue)}
			${getTrailingIconCode(trailingIconValue, clearOnTrailingIconClickValue)}
			${getHelperTextCode({
				text: helperTextValue ? "Helper Text" : undefined,
				validationMsg: helperTextAsValidationMsgValue,
				characterCounter: characterCounterValue,
				persistent: persistentHelperTextValue,
				indentSize: 3,
				indentFirstLine: false,
			})}
			${getOptionsCode(useDatalistValue)}
		`;
	}

	function getOptionsCode(useDatalistValue: typeof useDatalist) {
		if (useDatalistValue) {
			return `
			<div slot="options">
				<option value="Red Dead Redemption" />
				<option value="Grand Theft Auto" />
				<option value="Max Payne" />
			</div>
		`;
		} else {
			return "";
		}
	}

	function getLeadingIconCode(leadingIconValue: typeof leadingIcon) {
		if (leadingIconValue) {
			return `
			<span slot="leadingIcon">
				${getIconCode({
					type:
						leadingIconValue === "material-icon" ? "icon" : leadingIconValue,
					position: "leading",
					content: leadingIconValue === "material-icon" ? "event" : undefined,
					indentSize: 4,
					indentFirstLine: false,
				})}
			</span>
		`;
		} else {
			return "";
		}
	}

	function getTrailingIconCode(
		trailingIconValue: typeof trailingIcon,
		clearOnTrailingIconClickValue: typeof clearOnTrailingIconClick
	) {
		if (trailingIconValue) {
			return `
			<span slot="trailingIcon">
				${getIconCode({
					type:
						trailingIconValue === "material-icon" ? "icon" : trailingIconValue,
					position: "trailing",
					content:
						trailingIconValue === "material-icon"
							? clearOnTrailingIconClick
								? "clear"
								: "alarm"
							: undefined,
					indentSize: 4,
					indentFirstLine: false,
					additionalProps: clearOnTrailingIconClickValue
						? [`role="button"`, `on:click={clear}`]
						: [],
				})}
			</span>
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
		<FullWidthTextField
			bind:value
			bind:dirty
			bind:invalid
			{lineRipple}
			{title}
			{type}
			{placeholder}
			{helperText}
			{helperTextAsValidationMsg}
			{persistentHelperText}
			{characterCounter}
			{prefix}
			{suffix}
			{minlength}
			{maxlength}
			{required}
			{readonly}
			{formnovalidate}
			{autocomplete}
			{pattern}
			{useDatalist}
			{leadingIcon}
			{trailingIcon}
			{clearOnTrailingIconClick} />
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
				<Select bind:value={type} nullable={false}>
					<span slot="label">Type</span>
					<div slot="options">
						<Option value="text">Text</Option>
						<Option value="search">Search</Option>
					</div>
				</Select>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={lineRipple} />
				<span slot="label">Line ripple</span>
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
				<Checkbox bind:checked={usePlaceholder} />
				<span slot="label">Placeholder</span>
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
				<Checkbox bind:checked={readonly} />
				<span slot="label">Read only</span>
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
				<Checkbox bind:checked={usePrefix} />
				<span slot="label">Prefix</span>
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
				<Checkbox bind:checked={useSuffix} />
				<span slot="label">Suffix</span>
			</FormField>
		</div>
		<div>
			<IconTypeOption
				allowEmpty={true}
				bind:value={leadingIcon}
				label="Leading icon" />
		</div>
		<div>
			<IconTypeOption
				allowEmpty={true}
				bind:value={trailingIcon}
				label="Trailing icon" />
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useDatalist} />
				<span slot="label">Use datalist</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={clearOnTrailingIconClick}
					disabled={!trailingIcon} />
				<span slot="label">Clear on trailing icon click</span>
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
				<Checkbox bind:checked={usePattern} />
				<span slot="label">Pattern</span>
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
				<Checkbox bind:checked={formnovalidate} />
				<span slot="label">Form no validate</span>
			</FormField>
		</div>
	</div>
</Configurator>
