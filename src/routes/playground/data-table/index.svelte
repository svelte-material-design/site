<svelte:options immutable={true} />

<script lang="ts">
	import {
		DataTable,
		Head,
		Body,
		Row,
		Cell,
		HeadCell,
		HeadRow,
		Label,
		SortButton,
		Checkbox,
		PageSize,
		Pagination,
		Table,
	} from "@svelte-material-design/core/data-table";
	import type { SortEventDetail } from "@svelte-material-design/core/data-table";

	let valueSet: Set<RowData["name"]> = new Set();
	let value: string[] = Array.from(valueSet);
	let pageIndex: number = undefined;
	let pageSize: number = 4;

	let allRows: RowData[] = [
		{
			name: "Broom",
			description: "A wooden handled broom.",
			price: 15,
		},
		{
			name: "Dust Pan",
			description: "A plastic dust pan.",
			price: 8,
		},
		{
			name: "Mop",
			description: "A strong, durable mop.",
			price: 18,
		},
		{
			name: "Bucket",
			description: "A metal bucket.",
			price: 13,
		},
		{
			name: "Ray Gun",
			description: "An alien artifact.",
			price: 99.99,
		},
		{
			name: "Big gun",
			description: "To kick asses.",
			price: 50,
		},
		{
			name: "Compound V",
			description: "To get nice and strong.",
			price: 14.03,
		},
		{
			name: "Script Hook",
			description: "To shape the world like The Matrix.",
			price: 13,
		},
		{
			name: "Riff",
			description: "Lot of people will follows you.",
			price: 5,
		},
	];

	let rows: RowData[];
	initPagination();
	function initPagination() {
		pageIndex = undefined;
		rows = [...allRows];
	}

	function sort(sortData: SortEventDetail) {
		rows = rows.sort((a, b) => {
			if (a[sortData.columnId] > b[sortData.columnId]) return 1;
			else if (a[sortData.columnId] < b[sortData.columnId]) return -1;
			else return 0;
		});

		if (sortData.sortValue === "ascending") {
			rows = [...rows];
		} else if (sortData.sortValue === "descending") {
			rows = [...rows.reverse()];
		}
	}

	function handleRowChange(row: RowData, selected: boolean) {
		if (selected) {
			valueSet.add(row.name);
		} else {
			valueSet.delete(row.name);
		}

		value = Array.from(valueSet);
	}

	interface RowData {
		name: string;
		description: string;
		price: number;
		selected?: boolean;
	}
</script>

<DataTable {value} on:sort={(event) => sort(event.detail)}>
	<Table aria-label="Items list">
		<Head>
			<HeadRow>
				<HeadCell checkbox>
					<Checkbox />
				</HeadCell>
				<HeadCell columnId="name">
					<Label>Name</Label>
					<SortButton />
				</HeadCell>
				<HeadCell columnId="description">
					<Label>Description</Label>
					<SortButton />
				</HeadCell>
				<HeadCell columnId="price" numeric>
					<SortButton />
					<Label>Price</Label>
				</HeadCell>
			</HeadRow>
		</Head>
		<Body>
			{#if pageIndex != null}
				{#each rows.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize) as row (row.name)}
					<Row
						value={row.name}
						on:change={(event) => handleRowChange(row, event.detail.selected)}
					>
						<Cell checkbox>
							<Checkbox />
						</Cell>
						<Cell>{row.name}</Cell>
						<Cell>{row.description}</Cell>
						<Cell numeric>{row.price}</Cell>
					</Row>
				{/each}
			{/if}
		</Body>
	</Table>
	<Pagination length={rows.length} bind:pageIndex bind:pageSize>
		<div slot="pageSize">
			<PageSize pageSizeOptions={[4, 8, 12]}>Rows per page</PageSize>
		</div>
		<div slot="counter" let:first let:end let:length>
			{first}‑{end}
			of
			{length}
		</div>
	</Pagination>
</DataTable>

<div>
	{value}
</div>
