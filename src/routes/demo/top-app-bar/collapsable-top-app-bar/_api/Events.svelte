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
	<svelte-fragment slot="table">
		<Event>
			<Name>change</Name>
			<Signature keyword="type" name="OnTopAppBarCollapsedChange" />
			<Description>
				Event fired when the
				<code>collapsed</code>
				value change following a user scroll action.
			</Description>
		</Event>
		<Event>
			<Name>nav</Name>
			<Signature keyword="type" name="OnTopAppBarNav" />
			<Description>
				Event fired when the user click on the
				<code>{'<Navigationicon />'}</code>
				or the
				<code>{'<NavigationButton />'}</code>.
			</Description>
		</Event>
	</svelte-fragment>
</Events>
