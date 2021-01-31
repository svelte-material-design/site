<svelte:options immutable={true} />

<script lang="ts">
	import {
		Events,
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
</script>

<Events>
	<Event>
		<Name>change</Name>
		<Signature keyword="type" name="OnMultiSelectionGroupChangeEvent" />
		<Description>
			Event fired when the
			<code>value</code>
			change following a user click.
		</Description>
	</Event>
	<Event>
		<Name>optionsChange</Name>
		<Signature keyword="type" name="OnSelectionGroupOptionsChangeEvent" />
		<Description>
			Event fired when a child <code>{"<Checkbox />"}</code> is added/removed or
			when the <code>value</code> of an existing child gets updated.
		</Description>
	</Event>
</Events>
