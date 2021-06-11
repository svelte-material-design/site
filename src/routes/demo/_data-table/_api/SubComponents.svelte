<svelte:options immutable={true} />

<script lang="ts">
	import {
		SubComponents,
		SubComponent,
		Tag,
		Description,
	} from "src/components/components-api/sub-components";
</script>

<SubComponents>
	<SubComponent>
		<Tag href="table-container" mandatory>TableContainer</Tag>
		<Description>The table component.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="table" mandatory>Table</Tag>
		<Description>The table component.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="head" mandatory>Head</Tag>
		<Description>The table's head.</Description>
	</SubComponent>
	<SubComponent indentation={3}>
		<Tag href="head-row" mandatory>HeadRow</Tag>
		<Description>The table's head row.</Description>
	</SubComponent>
	<SubComponent indentation={4}>
		<Tag href="head-cell" mandatory>HeadCell</Tag>
		<Description>The table's head cell.</Description>
	</SubComponent>
	<SubComponent indentation={5}>
		<Tag href="label">Label</Tag>
		<Description>The header cell's label.</Description>
	</SubComponent>
	<SubComponent indentation={5}>
		<Tag href="sort-button">SortButton</Tag>
		<Description>The header cell's sort button.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="body" mandatory>Body</Tag>
		<Description>The table's body.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="row" mandatory>Row</Tag>
		<Description>The table's body row.</Description>
	</SubComponent>
	<SubComponent indentation={3}>
		<Tag href="cell" mandatory>Cell</Tag>
		<Description>The table's body cell.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="linear-progress">LinearProgress</Tag>
		<Description>Linear progress to show when loading data.</Description>
	</SubComponent>
	<SubComponent indentation={1}>
		<Tag href="pagination">Pagination</Tag>
		<Description>The pagination component.</Description>
	</SubComponent>
	<SubComponent indentation={2}>
		<Tag href="page-size">PageSize</Tag>
		<Description>
			Allows the user to select the number of items to display per page.
		</Description>
	</SubComponent>
</SubComponents>
