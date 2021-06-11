<script lang="ts">
	import {
		Props,
		SlotProp,
		SlotPropName,
		Signature,
		Description,
		Prop,
		Name,
		Default,
	} from "src/components/components-api/props";
	import {
		BaseComponentProps,
		Dom,
		Value,
	} from "src/components/components-api/props/common";

</script>

<Props>
	<Prop>
		<Name>min</Name>
		<Signature keyword="number">
			<Default value={0} />
		</Signature>
		<Description
			>The minimum value the <code>{`<Thumb />`}</code> can have. Cannot be
			negative or greater/equal to the <code>max</code> prop.</Description
		>
	</Prop>
	<Prop>
		<Name>max</Name>
		<Signature keyword="number">
			<Default value={100} />
		</Signature>
		<Description
			>The maximum value the <code>{`<Thumb />`}</code> can have. smaller/equal
			to the <code>min</code> prop.</Description
		>
	</Prop>
	<Value readwrite>
		<svelte:fragment slot="signature">
			<Signature keyword="number">
				<Default><code>min</code>.</Default>
			</Signature>
		</svelte:fragment>
		The current value of the <code>{`<Thumb />`}</code>.
	</Value>
	<BaseComponentProps>
		<Dom instances={["HTMLInputElement"]} />
	</BaseComponentProps>
	<SlotProp>
		<SlotPropName>value</SlotPropName>
		<Signature keyword="number" />
		<Description>
			The same as <code>value</code> prop.
		</Description>
	</SlotProp>
</Props>
