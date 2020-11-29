<script lang="ts">
	import { measure } from "./_measure";

	let initPerf: number;
	let initWithValuePerf: number;
	let addPerf: number;
	let removePerf: number;
	let findPerf: number;
	let sortPerf: number;

	if (typeof window !== "undefined") {
		let arr: string[];
		initPerf = measure(() => {
			arr = [];
		});

		let setWithValue: string[];
		initWithValuePerf = measure(() => {
			setWithValue = ["withValue"];
		});

		arr = ["val1", "val2"];

		addPerf = measure(() => {
			arr.push("val");
			arr = [...arr];
		});

		removePerf = measure(() => {
			const index = arr.indexOf("val");
			arr = arr.slice(0, index).concat(arr.slice(index + 1));
		});

		arr = ["val3", "val2", "val1"];

		findPerf = measure(() => {
			const res = arr.find((e) => e === "val1");
		});

		sortPerf = measure(() => {
			arr.sort((a, b) => {
				if (a < b) return -1;
				if (a > b) return 1;
			});
			arr = [...arr];
		});
	}
</script>

<svelte:options immutable={true} />

<ul>
	<li><span> Init perf: {initPerf} </span></li>
	<li><span> Init with value perf: {initWithValuePerf} </span></li>
	<li><span> Add perf: {addPerf} </span></li>
	<li><span> Remove perf: {removePerf} </span></li>
	<li><span> Array.from perf: - </span></li>
	<li><span> Find perf: {findPerf} </span></li>
	<li><span> Sort perf: {sortPerf} </span></li>
</ul>
