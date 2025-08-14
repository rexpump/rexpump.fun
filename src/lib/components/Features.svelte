<script lang="ts">
	import { onMount } from 'svelte';

	let featuresRef: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.3 }
		);

		if (featuresRef) {
			observer.observe(featuresRef);
		}

		return () => observer.disconnect();
	});

	const features = [
		{
			icon: '◉',
			title: 'Open-Source Architecture',
			description: 'The Rexpump.fun protocol is fully open-source and will undergo external comprehensive audits for maximum transparency.',
			color: '#B1FD94'
		},
		{
			icon: '◈',
			title: 'User-Friendly Interface',
			description: 'Creating and launching a meme token is as simple as filling out a form with insights for platform users.',
			color: '#DA42FB'
		},
		{
			icon: '◆',
			title: 'Enhanced Security',
			description: 'Each created contract is an exact copy of the audited base contract, ensuring a secure & safe environment.',
			color: '#8B3BFE'
		}
	];
</script>

<section id="features" class="section container-x" bind:this={featuresRef}>
	<div class="stack-lg">
		<header class="intro stack-sm" class:visible={isVisible}>
			<h2>BUILT FOR THE ZILLIQA</h2>
			<p>Rexpump.fun offering a seamless and efficient platform for new token creation and engagement.</p>
		</header>
		
		<div class="features-grid" class:visible={isVisible}>
			{#each features as feature, index}
				<div 
					class="feature-card" 
					class:visible={isVisible}
					style="animation-delay: {index * 0.2}s; --accent-color: {feature.color}"
				>
					<div class="feature-icon">
						{feature.icon}
					</div>
					<div class="feature-content">
						<h3>{feature.title}</h3>
						<p>{feature.description}</p>
					</div>
					<div class="feature-glow"></div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#features {
		text-align: center;
		position: relative;
	}

	.intro {
		max-width: 700px;
		margin: 0 auto;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.intro.visible {
		opacity: 1;
		transform: translateY(0);
	}

	h2 {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 900;
		margin-bottom: 1.5rem;
		background: linear-gradient(135deg, #fff 0%, #B1FD94 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: 0.02em;
	}

	.intro p {
		color: #a0a0b0;
		line-height: 1.7;
		font-size: 1.2rem;
		max-width: 500px;
		margin: 0 auto;
	}

	.features-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
	}

	.features-grid.visible .feature-card {
		opacity: 1;
		transform: translateY(0);
	}

	.feature-card {
		position: relative;
		background: linear-gradient(135deg, rgba(26, 25, 45, 0.8) 0%, rgba(18, 17, 35, 0.9) 100%);
		padding: 3rem 2.5rem;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		text-align: left;
		transition: all 0.5s ease;
		opacity: 0;
		transform: translateY(50px);
		overflow: hidden;
		backdrop-filter: blur(10px);
	}

	.feature-card:hover {
		transform: translateY(-10px);
		border-color: var(--accent-color);
		box-shadow: 
			0 20px 40px rgba(0, 0, 0, 0.3),
			0 0 0 1px var(--accent-color);
	}

	.feature-card:hover .feature-glow {
		opacity: 1;
		transform: scale(1.2);
	}

	.feature-card:hover .feature-icon {
		transform: scale(1.2) rotate(10deg);
		filter: drop-shadow(0 0 20px var(--accent-color));
	}

	.feature-icon {
		font-size: 3.5rem;
		margin-bottom: 1.5rem;
		transition: all 0.3s ease;
		display: inline-block;
		filter: drop-shadow(0 0 10px var(--accent-color));
	}

	.feature-content h3 {
		font-size: 1.5rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #fff;
		letter-spacing: 0.02em;
	}

	.feature-content p {
		color: #a0a0b0;
		line-height: 1.6;
		font-size: 1rem;
	}

	.feature-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.8);
		width: 200px;
		height: 200px;
		background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
		opacity: 0;
		transition: all 0.5s ease;
		filter: blur(40px);
		z-index: -1;
	}

	@media (max-width: 768px) {
		.features-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.feature-card {
			padding: 2.5rem 2rem;
			text-align: center;
		}


	}

	@media (max-width: 480px) {
		.features-grid {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		}
	}
</style>
