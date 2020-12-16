<script lang="ts">
	import { Option, Select, SelectVariant } from "@smui/core/select";
	import PreviewSelect from "./_Select.svelte";
	import { FormField } from "@smui/core/form-field";
	import {
		Configurator,
		generateSCSSCode,
		generateSvelteCode,
	} from "src/components/configurator";
	import { Checkbox } from "@smui/core/checkbox";
	import {
		getHelperTextCode,
		getIconCode,
	} from "src/components/configurator/snippets";
	import {
		IconTypeOption,
		IconType,
	} from "src/components/configurator/smui-components/icons";
	import ShapeRadiusOption from "src/components/configurator/common-options/ShapeRadiusOption.svelte";
	import DensityOption from "src/components/configurator/common-options/DensityOption.svelte";

	let name = "select";

	let variant: SelectVariant;
	let ripple: boolean = true;
	let lineRipple: boolean = true;
	let nullable: boolean = true;
	let leadingIcon: IconType;

	let customStyle: boolean;
	let shapeRadius: string;
	let density: number;

	let label: boolean = true;
	let helperText: boolean;
	let helperTextAsValidationMsg: boolean;
	let persistentValidationMsg: boolean;

	let readonly: boolean;
	let useTitle: boolean;
	let required: boolean;
	let disabled: boolean = false;

	let value: string;
	let dirty: boolean;
	let invalid: boolean;

	let className: string;

	$: if (!helperText) helperTextAsValidationMsg = false;
	$: if (!helperText || !helperTextAsValidationMsg)
		persistentValidationMsg = false;

	$: className = customStyle ? "shaped-text-area" : undefined;

	$: title = useTitle ? "Title" : undefined;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "Select",
		props: [
			"bind:value",
			"bind:dirty",
			"bind:invalid",
			`name="${name}"`,
			[className, `class="${className}"`],
			[title, `title="${title}"`],
			[variant !== "filled", `variant="${variant}"`],
			[shapeRadius, `shapeRadius="${shapeRadius}"`],
			[density, `density={${density}}`],
			[shapeRadius, `shapeRadius="${shapeRadius}"`],
			[nullable === false, "nullable={false}"],
			[!ripple, "ripple={false}"],
			[!lineRipple, "lineRipple={false}"],
			[disabled, "disabled"],
			[readonly, "readonly"],
			[invalid, "invalid"],
			[required, "required"],
		],
		content: getContentCode(
			label,
			leadingIcon,
			helperText,
			helperTextAsValidationMsg,
			persistentValidationMsg
		),
	});

	$: scssCode = generateSCSSCode({
		content: getSCSSCode(customStyle),
	});

	function getContentCode(
		labelValue: typeof label,
		leadingIconValue: typeof leadingIcon,
		helperTextValue: typeof helperText,
		helperTextAsValidationMsgValue: typeof helperTextAsValidationMsg,
		persistentValidationMsgValue: typeof persistentValidationMsg
	) {
		return `
			${labelValue ? `<span slot="label">Label</span>` : ""}
			${getLeadingIconCode(leadingIconValue)}
			<div slot="options">
				<Option />
				<Option value="superman">Superman</Option>
				<Option value="cpt-america">Capitan America</Option>
				<Option value="homelander">Homelander</Option>
			</div>
			${getHelperTextCode({
				text: helperTextValue ? "Helper Text" : undefined,
				props: [
					[helperTextAsValidationMsgValue, "validationMsg"],
					[persistentValidationMsgValue, "persistentValidationMsg"],
				],
				indentSize: 3,
				indentFirstLine: false,
			})}
		`;
	}

	function getLeadingIconCode(leadingIconValue: typeof leadingIcon) {
		if (leadingIconValue) {
			return `
			<span slot="leadingIcon">
				${getIconCode(
					{
						indentSize: 4,
						indentFirstLine: false,
						content: leadingIconValue === "material-icon" ? "event" : undefined,
					},
					{
						type:
							leadingIconValue === "material-icon" ? "icon" : leadingIconValue,
						position: "leading",
					}
				)}
			</span>
			`;
		} else {
			return "";
		}
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

<style lang="scss">
	.preview-container {
		height: 10em;
		padding: 1em;
		align-items: start !important;
	}

	.options-sidebar {
		:global(.mdc-select) {
			width: 100%;
		}
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview" class="preview-container">
		<div>
			<PreviewSelect
				bind:value
				bind:dirty
				bind:invalid
				{name}
				{title}
				label={label ? 'American hero' : undefined}
				class={customStyle ? (variant === 'filled' ? 'shaped' : 'shaped-outline') : undefined}
				{variant}
				{shapeRadius}
				{density}
				{ripple}
				{lineRipple}
				{disabled}
				{required}
				{readonly}
				{nullable}
				{leadingIcon}
				{helperText}
				{helperTextAsValidationMsg}
				{persistentValidationMsg} />
		</div>
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
			<IconTypeOption
				allowEmpty={true}
				bind:value={leadingIcon}
				label="Leading icon" />
		</div>
		<ShapeRadiusOption bind:value={shapeRadius} bind:customStyle />
		<div>
			<DensityOption bind:density />
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={label} />
				<span slot="label">Show Label</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={ripple} />
				<span slot="label">Ripple</span>
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
				<Checkbox bind:checked={readonly} />
				<span slot="label">Read only</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox
					bind:checked={helperTextAsValidationMsg}
					disabled={!helperText} />
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
				<Checkbox
					bind:checked={persistentValidationMsg}
					disabled={!helperText && !helperTextAsValidationMsg} />
				<span slot="label" style="white-space: initial;">
					Persistent Validation message
				</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={disabled} />
				<span slot="label">Disabled</span>
			</FormField>
		</div>
		<div>
			<FormField>
				<Checkbox bind:checked={nullable} />
				<span slot="label">Nullable</span>
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
				<Checkbox bind:checked={required} />
				<span slot="label">Required</span>
			</FormField>
		</div>
	</div>
</Configurator>
