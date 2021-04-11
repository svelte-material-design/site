<script lang="ts">
	import { Ripple } from "@smui/core/ripple";

	let rippleTarget: HTMLSpanElement;
</script>

<svelte:head>
	<title>Ripple - SMUI</title>
</svelte:head>

<section>
	<h2>Ripple</h2>

	<p tabindex="0">
		<Ripple color="surface" />
		SMUI ripples can be added to arbitrary elements, like this
		<code>p</code>
		element. Try clicking it to see the ripple.
	</p>

	<p>
		Unbounded with hook:
		<span bind:this={rippleTarget} tabindex="0" class="unbounded">
			&copy;
		</span>
		<Ripple target={rippleTarget} color="surface" />
	</p>

	<p tabindex="0">
		<Ripple color="primary" />
		Primary color.
	</p>

	<p tabindex="0">
		<Ripple color="secondary" />
		Secondary color.
	</p>
</section>

<style>
	p {
		padding: 10px;
		border-radius: 5px;
	}

	.unbounded {
		display: inline-flex;
		width: 50px;
		height: 50px;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		font-size: 20px;
	}
</style>
