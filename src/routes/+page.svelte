<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Features from '$lib/components/Features.svelte';
	import Roadmap from '$lib/components/Roadmap.svelte';
	import Team from '$lib/components/Team.svelte';
	import Community from '$lib/components/Community.svelte';
	import StakeSupport from '$lib/components/StakeSupport.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Rexpump.fun: Launch & Trade Meme Coins on Zilliqa!</title>
	<meta name="description" content="Launch and trade meme coins on Zilliqa in minutes. No-code token creator, fair-launch tools, liquidity, live analytics and alerts. Secure and fast.">
</svelte:head>

<div class="container">
	<Header />
	<main>
		<Hero />
		<Features />
		<Roadmap />
		<Team />
		<Community />
		<StakeSupport />
	</main>
	<Footer />
</div>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	:global(body) {
		background: linear-gradient(135deg, #0c0b1a 0%, #1a1429 50%, #0c0b1a 100%);
		color: #fff;
		font-family: 'IBM Plex Sans', sans-serif;
		line-height: 1.6;
		overflow-x: hidden;
	}

	:global(body::before) {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: 
			radial-gradient(circle at 20% 80%, rgba(177, 253, 148, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 80% 20%, rgba(218, 66, 251, 0.1) 0%, transparent 50%),
			radial-gradient(circle at 40% 40%, rgba(139, 59, 254, 0.05) 0%, transparent 50%);
		pointer-events: none;
		z-index: -1;
	}

	:global(h1, h2, h3) {
		font-family: 'Joystix', 'IBM Plex Sans', sans-serif;
	}

	:global(code, pre) {
		font-family: 'IBM Plex Mono', monospace;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	main {
		display: flex;
		flex-direction: column;
		gap: 8rem;
		margin-top: 2rem;
	}

	@media (max-width: 768px) {
		.container {
			padding: 0 1rem;
		}
		main {
			gap: 4rem;
		}
	}
</style>
