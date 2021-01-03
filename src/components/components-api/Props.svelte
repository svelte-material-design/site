<script lang="ts">
	import { Typography } from "@smui/core/typography";
	import { Row, Prop, Type, Value } from "./particles";
</script>

<style lang="scss">
	@use "@material/data-table";

	.props {
		display: grid;
		grid-template-columns: repeat(4, auto);
		grid-auto-rows: minmax(data-table.$minimum-cell-height, auto);
	}
</style>

<Typography variant="headline3">Props</Typography>
<div class="props">
	<Row>
		<span slot="name">
			<Prop>variant</Prop>
		</span>
		<span slot="type">
			<Type
				keyword="type"
				name="ButtonVariant"
				allowedValues={['"text"', '"raised"', '"unelevated"', '"outlined"']} />
		</span>
		<span slot="def">
			<Value>"text"</Value>
		</span>
		<span slot="description"> The variant to use. </span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>ripple</Prop>
		</span>
		<span slot="type">
			<Type keyword="boolean" />
		</span>
		<span slot="def">
			<Value>true</Value>
		</span>
		<span slot="description">
			If
			<code>false</code>, the ripple effect will be disabled.
		</span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>disabled</Prop>
		</span>
		<span slot="type">
			<Type keyword="boolean" />
		</span>
		<span slot="def">
			<Value>false</Value>
		</span>
		<span slot="description">
			If
			<code>true</code>, the button will be disabled.
		</span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>color</Prop>
		</span>
		<span slot="type">
			<Type
				keyword="type"
				name="ButtonColor"
				allowedValues={['"primary"', '"secondary"']} />
		</span>
		<span slot="def">
			<Value>"primary"</Value>
		</span>
		<span slot="description"> The color of the component. </span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>href</Prop>
		</span>
		<span slot="type">
			<Type keyword="string" />
		</span>
		<span slot="description">
			The URL to link to when the button is clicked. If defined, an
			<code>a</code>
			element will be used.
		</span>
	</Row>
	<Row>
		<span slot="name">
			<Prop readonly>dom</Prop>
		</span>
		<span slot="type">
			<Type instances={['HTMLButtonElement', 'HTMLAnchorElement']} />
		</span>
		<span slot="description">
			The root
			<code>HTMLElement</code>. It's
			<code>HTMLAnchorElement</code>
			when
			<code>href</code>
			is not empty; otherwise it's
			<code>HTMLButtonElement</code>.
		</span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>class</Prop>
		</span>
		<span slot="type">
			<Type keyword="string" />
		</span>
		<span slot="description">
			A string to be prepended into the
			<code>class</code>
			attribute of the root
			<code>HTMLElement</code>. It can be used to give one or more custom
			classes to the component's root element.
		</span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>style</Prop>
		</span>
		<span slot="type">
			<Type keyword="string" />
		</span>
		<span slot="description">
			A string to be appended into the
			<code>style</code>
			attribute of the root
			<code>HTMLElement</code>. It can be used to assign custom inline style to
			the component's root element.
		</span>
	</Row>
	<Row>
		<span slot="name">
			<Prop>id</Prop>
		</span>
		<span slot="type">
			<Type keyword="string" />
		</span>
		<span slot="description">
			A string that overwrite the value of the
			<code>id</code>
			attribute of the root
			<code>HTMLElement</code>. It can be used to assign custom id to the
			component's root element.
		</span>
	</Row>
</div>
