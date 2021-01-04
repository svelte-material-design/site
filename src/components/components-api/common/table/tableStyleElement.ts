export function createStyleElement(
	tableClassName: string,
	cellClassName: string,
	cols: number
) {
	return `
		<style>
			#${tableClassName} .${cellClassName}:nth-child(1n + ${cols + 1}) {
				border-top-style: solid;
			}
		</style>
	`;
}
