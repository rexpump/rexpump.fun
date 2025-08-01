<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Team from '$lib/components/Team.svelte';
	import Community from '$lib/components/Community.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="container">
	<Header />
	<main>
		<Hero />
		<Features />
		<Roadmap />
		<Team />
		<Community />
	</main>
	<Footer />
</div>

<style>
	:global(body) {
		background-color: #0c0b1a;
		color: #fff;
		font-family: 'Arial', sans-serif;
		margin: 0;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

    main {
        display: flex;
        flex-direction: column;
        gap: 6rem;
        margin-top: 4rem;
    }
</style>
