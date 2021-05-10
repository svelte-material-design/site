import type { DataTableConfigurations } from "./types";
import { source } from "common-tags";
import {
	generateSvelteTagCode,
	getImportCode,
	removeEmptyLines,
} from "src/components/configurator";

export function script(configurations: DataTableConfigurations) {
	const {
		selectionType,
		showPagination,
		allowSorting,
		showLinearProgress,
	} = configurations;

	const imports = removeEmptyLines(
		getImportCode(
			[
				"DataTable",
				"Head",
				"Body",
				"Row",
				"Cell",
				"HeadCell",
				"HeadRow",
				"Label",
				"Table",
				[showPagination, "PageSize"],
				[showPagination, "Pagination"],
				[selectionType, "Checkbox"],
				[allowSorting, "SortButton"],
				[showLinearProgress, "LinearProgress"],
			],
			"data-table"
		)
	);

	const paginationCode = showLinearProgress
		? "\n" +
		  source`
		let pageIndex: number = 0;
		let pageSize: number = 4;
	` +
		  "\n"
		: "";

	const code = source`
		<script>
			${imports}
			${paginationCode}
			let value;
		</script>`;

	return code;
}

export function template(configurations: DataTableConfigurations) {
	const { selectionType, nullable } = configurations;

	const code = generateSvelteTagCode({
		tag: "DataTable",
		props: [
			[selectionType, "bind:value"],
			[nullable, `nullable`],
		],
		content: source`
			<Table>
				${getHeadCode(configurations)}
				${getBodyCode(configurations)}
				${getLinearProgressCode(configurations)}
				${getPaginationCode(configurations)}
			</Table>
		`,
	});

	return removeEmptyLines(code);
}

function getHeadCode(configurations: DataTableConfigurations) {
	const {
		selectionType,
		allowSorting,
		showSelectAll,
		priceColAlignEnd,
	} = configurations;

	const selectionColumn = selectionType
		? source`
		<HeadCell checkbox>
			<Checkbox${showSelectAll ? ` style="display: none;"` : ""} />
		</HeadCell>
	`
		: "";

	const priceCellContent = priceColAlignEnd
		? source`
		${allowSorting ? "<SortButton />" : ""}
		<Label>Price</Label>
	`
		: `
		<Label>Price</Label>
		${allowSorting ? "<SortButton />" : ""}
	`;

	return source`
		<Head>
			<HeadRow>
				${selectionColumn}
				<HeadCell data-column-id="name">
					<Label>Name</Label>
					${allowSorting ? "<SortButton />" : ""}
				</HeadCell>
				<HeadCell data-column-id="description">
					<Label>Description</Label>
					${allowSorting ? "<SortButton />" : ""}
				</HeadCell>
				<HeadCell data-column-id="price"${priceColAlignEnd ? " alignEnd" : ""}>
					${priceCellContent}
				</HeadCell>
			</HeadRow>
		</Head>
	`;
}

function getBodyCode(configurations: DataTableConfigurations) {
	const { selectionType, priceColAlignEnd, items } = configurations;

	const selectionColumn = selectionType
		? source`
		<Cell checkbox>
			<Checkbox />
		</HeadCell>
	`
		: "";

	return source`
		<Body>
			${items
				.map((item) => {
					return source`
					<Row value="${item.value}">
						${selectionColumn}
						<Cell>
							<Label>${item.name}</Label>
						</Cell>
						<Cell>
							<Label>${item.description}</Label>
						</Cell>
						<Cell${priceColAlignEnd ? " alignEnd" : ""}>
							<Label>${item.price}</Label>
						</Cell>
					</Row>
				`;
				})
				.join("\n")}
		</Body>
	`;
}

function getPaginationCode(configurations: DataTableConfigurations) {
	const { showPagination, items } = configurations;

	return showPagination
		? source`
		<Pagination length={${items.length}} bind:pageIndex bind:pageSize>
			<div slot="pageSize">
				<PageSize pageSizeOptions={[4, 8, 12]}>Rows per page</PageSize>
			</div>
			<div slot="counter" let:first let:end let:length>
				{first}‑{end}
				of
				{length}
			</div>
		</Pagination>
	`
		: "";
}

function getLinearProgressCode(configurations: DataTableConfigurations) {
	const { showLinearProgress } = configurations;

	return showLinearProgress
		? source`
		<LinearProgress />
	`
		: "";
}
