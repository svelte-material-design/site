<script lang="ts">
	import { Switch, SwitchGroup } from "@smui/core/switch";
	import { FormField, Label } from "@smui/core/form-field";
	import {
		Configurator,
		generateSvelteCode,
		generateSvelteTagCode,
	} from "src/components/configurator";
	import SwitchOptions from "./_SwitchOptions.svelte";
	import MultipleItemControls from "src/components/configurator/common-options/multiple-items/MultipleItemControls.svelte";
	import MultipleItemSelector from "src/components/configurator/common-options/multiple-items/MultipleItemSelector.svelte";
	import { getSwitchCode } from "./_switchCode";

	let multipleItemsControls: MultipleItemControls;

	let switches: SwitchProps[] = [];
	let selectedSwitchId: SwitchProps["id"];
	let selectedSwitch: SwitchProps = {} as any;

	let value: string[] = null;

	let svelteCode: string;
	let scssCode: string;

	$: svelteCode = generateSvelteCode({
		tag: "SwitchGroup",
		props: ["bind:value"],
		content: switches
			.map((item) => {
				return getSwitchCode({
					label: item.useLabel ? item.label : undefined,
					name: item.name,
					ripple: item.ripple,
					disabled: item.disabled,
					readonly: item.readonly,
					title: item.useTitle ? item.title : undefined,
					ariaLabel: item.useAriaLabel ? item.ariaLabel : undefined,
					required: item.required,
					bindValue: false,
					bindDirty: false,
				});
			})
			.join("\n"),
	});

	function createSwitchItem(index) {
		const value = `switch:${index}`;
		const label = `Switch ${index}`;
		return {
			id: value,
			name: `switch[]`,
			value,
			checked: false,
			dirty: false,
			ripple: true,
			disabled: false,
			readonly: false,
			required: false,
			label: label,
			title: label,
			ariaLabel: label,
			useLabel: true,
			useTitle: false,
			useAriaLabel: false,
		} as SwitchProps;
	}

	interface SwitchProps {
		id: string;
		value: string;
		checked: boolean;
		dirty: boolean;
		name: string;
		ripple: boolean;
		readonly: boolean;
		disabled: boolean;
		label: string;
		title: string;
		ariaLabel: string;
		useLabel: boolean;
		useTitle: boolean;
		useAriaLabel: boolean;
		required: boolean;
	}
</script>

<style lang="scss">
	[slot="preview"] {
		min-height: 10em;

		> div {
			display: flex;
			flex-direction: column;

			:global(.switch-group-confgurator__item) {
				height: 3.5em;
			}
		}
	}
</style>

<svelte:options immutable={true} />

<Configurator {svelteCode} {scssCode}>
	<div slot="preview">
		<div>
			<SwitchGroup bind:value>
				{#each switches as switchItem (switchItem.id)}
					<FormField class="switch-group-confgurator__item">
						<Switch
							bind:checked={switchItem.checked}
							bind:dirty={switchItem.dirty}
							value={switchItem.value}
							name={switchItem.name}
							ripple={switchItem.ripple}
							disabled={switchItem.disabled}
							readonly={switchItem.readonly}
							title={switchItem.useTitle ? switchItem.title : undefined}
							ariaLabel={switchItem.useAriaLabel ? switchItem.ariaLabel : undefined}
							required={switchItem.required}
							on:change={multipleItemsControls.updateItemsInstance} />
						{#if switchItem.useLabel}
							<Label>{switchItem.label}</Label>
						{/if}
					</FormField>
				{/each}
			</SwitchGroup>
		</div>
	</div>
	<div slot="values">
		<div>
			value:
			{#if Array.isArray(value)}[{value}]{:else}{value}{/if}
		</div>
	</div>
	<div slot="optionsSidebar">
		<MultipleItemSelector
			label="Selected Switch"
			items={switches}
			bind:selectedItemId={selectedSwitchId} />
		<SwitchOptions
			bind:ripple={selectedSwitch.ripple}
			bind:useLabel={selectedSwitch.useLabel}
			bind:checked={selectedSwitch.checked}
			bind:dirty={selectedSwitch.dirty}
			bind:readonly={selectedSwitch.readonly}
			bind:disabled={selectedSwitch.disabled}
			bind:useAriaLabel={selectedSwitch.useAriaLabel}
			bind:useTitle={selectedSwitch.useTitle}
			bind:required={selectedSwitch.required}
			on:change={multipleItemsControls.updateItemsInstance} />
		<MultipleItemControls
			bind:this={multipleItemsControls}
			bind:items={switches}
			bind:selectedItem={selectedSwitch}
			bind:selectedItemId={selectedSwitchId}
			itemFactory={createSwitchItem} />
	</div>
</Configurator>
