import { BaseInputFieldConfigurations } from "./types";
import type { StringList } from "@raythurnevoid/strings-filter";

export function getBaseImports(
	configurations: BaseInputFieldConfigurations
): StringList {
	const { characterCounter } = configurations;

	return ["Content", [characterCounter, "CharacterCounter"]] as StringList;
}

export function getBaseInputProps(
	configurations: BaseInputFieldConfigurations
): StringList {
	const { readonly, title, placeholder, size, maxlength } = configurations;

	return [
		[readonly, "readonly"],
		[title, `title="${title}"`],
		[placeholder, `placeholder="${placeholder}"`],
		[size, `size="${size}"`],
		[maxlength, `maxlength={${maxlength}}`],
	] as StringList;
}

export function getBaseInputFieldProps(
	configurations: BaseInputFieldConfigurations
): StringList {
	const { ripple, disabled } = configurations;

	return [
		"bind:value",
		"bind:invalid",
		[ripple, "ripple"],
		[disabled, "disabled"],
		,
	] as StringList;
}
