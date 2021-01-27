<script lang="ts">
	import { Events } from "src/components/components-api/events";
	import {
		OnInput,
		OnChange,
	} from "src/components/components-api/events/common";
</script>

<Events>
	<OnInput name="OnSliderInputEvent" />
	<OnChange name="OnSliderChangeEvent" />
</Events>
