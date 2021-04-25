<svelte:options immutable={true} />

<script lang="ts">
	import { Button, Label, Icon } from "@smui/core/button";
	import { Checkbox } from "@smui/core/checkbox";
	import {
		ChipSet,
		ChipSetVariant,
		SMUIChipRemoveEventDetail,
	} from "@smui/core/chips";
	import Chip from "./_Chip.svelte";
	import { StringList } from "@raythurnevoid/strings-filter";
	import { FormField } from "@smui/core/form-field";
	import { Select, Option } from "@smui/core/select";
	import {
		Configurator,
		generateSvelteCode,
		indentCode,
	} from "src/components/configurator";
	import { IconTypeOption } from "src/components/configurator/smui-components/icons";
	import type { IconType } from "src/components/configurator/smui-components/icons";

	import { tick } from "svelte";

	let variant: ChipSetVariant;
	let entryAnimation: boolean;
	let value: any[];

	let chips: ChipConf[] = [];

	let selectedChipValue: string;
	$: selectedChip = { ...getSelectedChip(chips, selectedChipValue) };

	initialData();

	let svelteCode: string;
	let chipSvelteCode: string;
	let scssCode: string;
	$: {
		svelteCode = generateSvelteCode({
			tag: "ChipSet",
			props: props(variant, entryAnimation),
			content: indentCode({ code: chipSvelteCode || "" }),
		});
	}

	$: {
		tick().then(() => {
			chipSvelteCode = chips
				.map((chip) => chip.instance?.getSvelteCode())
				.join("\n");
		});
	}

	function addChip() {
		chips = [
			...chips,
			{
				leadingIcon: undefined,
				trailingIcon: undefined,
				ripple: true,
				selected: false,
				useCheckmark: true,
				value: `Chip ${
					chips.length > 0
						? Number(chips[chips.length - 1].value.split(" ")[1]) + 1
						: 0
				}`,
			},
		];
	}

	function initialData() {
		variant = undefined;
		entryAnimation = true;

		chips = [];
		for (let i = 0; i < 3; i++) addChip();
		selectedChipValue = chips[0].value;
	}

	function props(
		variantValue: typeof variant,
		entryAnimationValue: typeof entryAnimation
	): StringList {
		return [
			[variantValue, "bind:value"],
			[variantValue, `variant="${variantValue}"`],
			[!entryAnimationValue, "entryAnimation={false}"],
		];
	}

	function getSelectedChip(
		_chips: typeof chips,
		_selectedChipValue: typeof selectedChipValue
	) {
		return chips.find((chip) => chip.value === selectedChipValue);
	}

	function setSelectedChipValue(conf: keyof ChipConf, value: any) {
		if (getSelectedChip(chips, selectedChipValue)) {
			(getSelectedChip(chips, selectedChipValue)[conf] as any) = value;
		}

		chips = [...chips];
	}

	interface ChipConf {
		value: string;
		ripple: boolean;
		trailingIcon: IconType;
		leadingIcon: IconType;
		selected: boolean;
		useCheckmark: boolean;
		instance?: Chip;
	}
</script>
