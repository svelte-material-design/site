<svelte:options immutable={true} />

<script lang="ts">
	import { Paper, Title, Content } from "@svelte-material-design/core/paper";
	import { DiscreteSlider } from "@svelte-material-design/core/slider";
	import { Radio, RadioGroup } from "@svelte-material-design/core/radio";
	import { FormField } from "@svelte-material-design/core/form-field";

	let elevation = 1;
	let color = "default";

</script>

<div>
	Elevation and transition:
	<br />

	<div class="paper-container">
		<Paper transition {elevation} {color} class="paper-demo">
			<Title>Elevated Paper</Title>
			<Content>
				If you add the
				<code>transition</code>
				property, elevation changes will animate.

				<br /><br />

				<Paper elevation={0}>
					<div>
						<FormField align="end" style="display: flex;">
							<DiscreteSlider bind:value={elevation} min={0} max={24} />
							<span
								slot="label"
								style="padding-right: 12px; width: max-content; display: block;"
								>Elevation</span
							>
						</FormField>
					</div>

					<div>
						<RadioGroup bind:value={color}>
							<FormField>
								<Radio value="default" />
								<span slot="label">Default</span>
							</FormField>
							<FormField>
								<Radio value="primary" />
								<span slot="label">Primary</span>
							</FormField>
							<FormField>
								<Radio value="secondary" />
								<span slot="label">Secondary</span>
							</FormField>
						</RadioGroup>
					</div>
				</Paper>
			</Content>
		</Paper>
	</div>
</div>
