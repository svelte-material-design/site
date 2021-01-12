<script lang="ts">
	import {
		Event,
		Name,
		Description,
		Signature,
	} from "src/components/components-api/events";
</script>

<Event>
	<Name>nav</Name>
	<Signature keyword="type" name="OnTopAppBarNavClick" />
	<Description>
		Event fired when the user click on the
		<code>{'<Navigationicon />'}</code>
		or the
		<code>{'<NavigationButton />'}</code>.
	</Description>
</Event>
