export function getUnevenImageSize(
	counter: number,
	base: number,
	variance: number,
	preAdd: (num: number) => number = (num) => num,
	mod: number = 2
) {
	const mid = (counter % mod ? Math.cos : Math.sin)(counter) * variance;
	return base + Math.floor(preAdd(mid));
}
