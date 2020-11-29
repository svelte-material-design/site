<script lang="ts">
	import { measure } from "./_measure";

	let initPerf: number;
	let initWithValuePerf: number;
	let addPerf: number;
	let removePerf: number;
	let arrayFromPerf: number;
	let findPerf: number;
	let sortPerf: number;

	if (typeof window !== "undefined") {
		let set: Set<string>;
		initPerf = measure(() => {
			set = new Set();
		});

		let setWithValue: Set<string>;
		initWithValuePerf = measure(() => {
			setWithValue = new Set(["withValue"]);
		});

		addPerf = measure(() => {
			set.add("newValue");
			set = new Set(set);
		});

		removePerf = measure(() => {
			set.delete("newValue");
			set = new Set(set);
		});

		set = new Set(["val3", "val2", "val1"]);

		arrayFromPerf = measure(() => {
			const arr = Array.from(set);
		});

		findPerf = measure(() => {
			const arr = Array.from(set);
			const res = arr.find((e) => e === "val1");
		});

		sortPerf = measure(() => {
			const arr = Array.from(set);
			const res = arr.sort((a, b) => {
				if (a < b) return -1;
				if (a > b) return 1;
			});
			set = new Set(arr);
		});
	}
</script>

<svelte:options immutable={true} />

<ul>
	<li><span> Init perf: {initPerf} </span></li>
	<li><span> Init with value perf: {initWithValuePerf} </span></li>
	<li><span> Add perf: {addPerf} </span></li>
	<li><span> Remove perf: {removePerf} </span></li>
	<li><span> Array.from perf: {arrayFromPerf} </span></li>
	<li><span> Find perf: {findPerf} </span></li>
	<li><span> Sort perf: {sortPerf} </span></li>
</ul>
