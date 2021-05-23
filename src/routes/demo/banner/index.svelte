<svelte:options immutable={true} />

<script lang="ts">
	import { Props, Events, Slots } from "./_api";
	import { ApiTitle } from "src/components/components-api/common";
	import { SubComponents } from "./_api";
	import { Configurator } from "./_configurator";
	import { Page } from "src/components/layout/module-layout";

</script>

<Page>
	<Configurator />
</Page>

<SubComponents />
<ApiTitle>Banner</ApiTitle>
<Props />
<Events />
<Slots />
