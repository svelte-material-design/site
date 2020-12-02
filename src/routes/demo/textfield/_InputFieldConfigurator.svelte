<script lang="ts">
	import { InputFieldVariant, InputFieldType } from "@smui/core/textfield";
	import InputField from "./_InputField.svelte";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSCSSCode,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Select, Option } from "@smui/core/select";
	import { Checkbox } from "@smui/core/checkbox";
	import IconTypeOption, {
		IconType,
	} from "src/components/configurator/common-options/icons/IconTypeOption.svelte";
	import { DiscreteSlider } from "@smui/core/slider";
	import {
		getIconCode,
		getHelperTextCode,
	} from "src/components/configurator/snippets";

	let ripple: boolean = true;
	let lineRipple: boolean = true;
	let variant: InputFieldVariant;
	let customStyle: boolean;
	let label: boolean = true;
	let helperText: boolean;
	let helperTextAsValidationMsg: boolean;
	let persistentHelperText: boolean;
	let characterCounter: boolean;
	let type: InputFieldType;
	let usePrefix: boolean;
	let useSuffix: boolean;
	let readonly: boolean;

	let densitySlider: number;

	let leadingIcon: IconType;
	let trailingIcon: IconType;
	let clearOnTrailingIconClick: boolean;

	let useDatalist: boolean;
	let usePlaceholder: boolean;
	let useSize: boolean;
	let useTitle: boolean;
	let useMaxlength: boolean = true;
	let useMinlength: boolean;
	let useAutocomplete: boolean;
	let usePattern: boolean;
	let required: boolean;
	let formnovalidate: boolean;
	let useStep: boolean;
	let useMin: boolean;
	let useMax: boolean;

	let value: any;
	let dirty: boolean;
	let invalid: boolean;

	let className: string;
	let title: string;
	let placeholder: string;
	let size: number;
	let autocomplete: string;
	let pattern: string;
	let prefix: string;
	let suffix: string;
	let maxlength: number;
	let minlength: number;
	let step: number;
	let min: number;
	let max: number;
	let density: number;

	$: if (!helperText) persistentHelperText = false;
	$: if (!useMaxlength) characterCounter = false;
	$: if (!trailingIcon) clearOnTrailingIconClick = false;

	$: className = customStyle
		? variant === "filled"
			? "shaped"
			: "shaped-outline"
		: undefined;

	$: title = useTitle ? "Title" : undefined;
	$: placeholder = usePlaceholder ? "Placeholder" : undefined;
	$: size = useSize ? 10 : undefined;
	$: autocomplete = useAutocomplete ? "on" : undefined;
	$: pattern = usePattern ? "[0-9]{10}" : undefined;
	$: prefix = usePrefix ? "$" : undefined;
	$: suffix = useSuffix ? ".00" : undefined;
	$: maxlength = useMaxlength ? 18 : undefined;
	$: minlength = useMinlength ? 4 : undefined;
	$: step = useStep ? 2 : undefined;
	$: min = useMin ? 4 : undefined;
	$: max = useMax ? 10 : undefined;
	$: density = densitySlider ? densitySlider * -1 : undefined;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "InputField",
		props: [
			"bind:value",
			"bind:dirty",
			"bind:invalid",
			`name="input-field"`,
			[className, `class="${className}"`],
			[variant !== "filled", `variant="${variant}"`],
			[!ripple, `ripple={false}`],
			[!lineRipple, `lineRipple={false}`],
			[density, `density={${density}}`],
			[type, `type="${type}"`],
			[title, `title="${title}"`],
			[placeholder, `placeholder="${placeholder}"`],
			[size, `size={${size}}`],
			[autocomplete, `autocomplete="${autocomplete}"`],
			[pattern, `pattern="${pattern}"`],
			[prefix, `prefix="${prefix}"`],
			[suffix, `suffix="${suffix}"`],
			[minlength, `minlength={${minlength}}`],
			[maxlength, `maxlength={${maxlength}}`],
			[step, `step={${step}}`],
			[min, `min={${min}}`],
			[max, `max={${max}}`],
			[readonly, "readonly"],
			[formnovalidate, "formnovalidate"],
			[required, "required"],
			[invalid, "invalid"],
		],
		content: getContentCode(
			label,
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

	$: scssCode = generateSCSSCode({
		content: getSCSSCode(customStyle, variant),
	});

	function getContentCode(
		labelValue: typeof label,
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
			${labelValue ? `<span slot="label">Label</span>` : ""}
			${getLeadingIconCode(leadingIconValue)}
			${getTrailingIconCode(trailingIconValue, clearOnTrailingIconClickValue)}
			${getHelperTextCode({
				text: helperTextValue ? "Helper Text" : undefined,
				props: [
					[persistentHelperTextValue, `persistent`],
					[helperTextAsValidationMsgValue, `validationMsg`],
				],
				characterCounter: characterCounterValue,
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
					additionalProps: clearOnTrailingIconClickValue
						? [`role="button"`, `on:click={clear}`]
						: [],
					indentSize: 4,
					indentFirstLine: false,
				})}
			</span>
			`;
		} else {
			return "";
		}
	}

	function getSCSSCode(
		customStyleValue: typeof customStyle,
		variantValue: typeof variant
	) {
		if (customStyleValue) {
			if (variantValue === "filled") {
				return `
					@use "@material/textfield";

					.shaped {
						@include textfield.shape-radius(16px);
					}
						`;
			} else if (variantValue === "outlined") {
				return `
					@use "@material/textfield";

					.shaped-outline {
						@include textfield.outline-shape-radius(50%);
					}
				`;
			}
		} else {
			return "";
		}
	}
</script>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<InputField
			class={className}
			bind:value
			bind:dirty
			bind:invalid
			{ripple}
			{lineRipple}
			{variant}
			{type}
			{label}
			{helperText}
			{helperTextAsValidationMsg}
			{persistentHelperText}
			{characterCounter}
			{prefix}
			{suffix}
			{readonly}
			{placeholder}
			{size}
			{title}
			{maxlength}
			{minlength}
			{autocomplete}
			{pattern}
			{required}
			{formnovalidate}
			{useDatalist}
			{step}
			{min}
			{max}
			{leadingIcon}
			{trailingIcon}
			{clearOnTrailingIconClick}
			{density} />
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
				<Select bind:value={variant} nullable={false}>
					<span slot="label">Variant</span>
					<div slot="options">
						<Option value="filled">Filled</Option>
						<Option value="outlined">Outlined</Option>
					</div>
				</Select>
			</FormField>
		</div>
		<div>
			<FormField>
				<Select bind:value={type} nullable={false}>
					<span slot="label">Type</span>
					<div slot="options">
						<Option value="text">Text</Option>
						<Option value="number">Number</Option>
						<Option value="email">Email</Option>
						<Option value="search">Search</Option>
						<Option value="tel">Tel</Option>
						<Option value="url">Url</Option>
						<Option value="password">Password</Option>
						<Option value="month">Month</Option>
						<Option value="week">Week</Option>
						<Option value="date">Date</Option>
						<Option value="datetime-local">Datetime Local</Option>
						<Option value="time">Time</Option>
					</div>
				</Select>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={ripple} />
				<span slot="label">Ripple</span>
			</FormField>
			<FormField>
				<Checkbox bind:checked={lineRipple} />
				<span slot="label">Line Ripple</span>
			</FormField>
		</div>
		<div>
			<FormField vertical>
				<Label>
					Density:
					{densitySlider ? `-${densitySlider}` : 'default'}
				</Label>
				<DiscreteSlider bind:value={densitySlider} max={4} step={1} />
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
				<Checkbox bind:checked={customStyle} />
				<span slot="label">Custom style</span>
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
				<Checkbox bind:checked={persistentHelperText} disabled={!helperText} />
				<span slot="label">Persistent helper text</span>
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
			<FormField>
				<Checkbox bind:checked={characterCounter} disabled={!useMaxlength} />
				<span slot="label">Character Counter</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={invalid} />
				<span slot="label">Invalid</span>
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
				<Checkbox bind:checked={useStep} />
				<span slot="label">Step</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useMin} />
				<span slot="label">Min</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={useMax} />
				<span slot="label">Max</span>
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
				<Checkbox bind:checked={useSize} />
				<span slot="label">Size</span>
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
				<Checkbox bind:checked={useAutocomplete} />
				<span slot="label">Autocomplete</span>
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
