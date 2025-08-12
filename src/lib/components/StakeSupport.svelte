<script lang="ts">
	import { onMount } from 'svelte';
	import { STAKE_POOLS, STAKE_COPY } from '$lib/config/staking';

	let stakeSupportRef: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.3 }
		);

		if (stakeSupportRef) {
			observer.observe(stakeSupportRef);
		}

		return () => observer.disconnect();
	});
</script>

<section class="section--tight container-x" bind:this={stakeSupportRef} aria-labelledby="stake-support-heading">
	<div class="stake-support-section">
		<div class="stake-support-background"></div>
		
		<div class="stake-support-content stack-lg" class:visible={isVisible}>
			<header class="section-header stack-sm">
				<p class="eyebrow">{STAKE_COPY.eyebrow}</p>
				<h2 id="stake-support-heading">{STAKE_COPY.heading}</h2>
				<p class="subhead">{STAKE_COPY.subhead}</p>
			</header>

			<div class="pools-grid" class:visible={isVisible}>
				{#each STAKE_POOLS as pool, index}
					<article 
						class="pool-card" 
						class:visible={isVisible}
						style="animation-delay: {index * 0.2}s;"
					>
						<div class="pool-header">
							<h3>{pool.title}</h3>
							<span class="pool-pill">{pool.pill}</span>
						</div>

						<p class="pool-description">{pool.description}</p>

						<ul class="pool-tags">
							{#each pool.tags as tag}
								<li class="tag-chip">{tag}</li>
							{/each}
						</ul>

						<div class="pool-cta">
							<a
								href={pool.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={`Open ${pool.title} staking portal in a new tab`}
								class="cta-button"
							>
								{pool.ctaLabel}
							</a>
						</div>

						<div class="card-glow"></div>
					</article>
				{/each}
			</div>

			<p class="disclaimer">{STAKE_COPY.disclaimer}</p>
		</div>
	</div>
</section>

<style>
	.stake-support-section {
		position: relative;
		text-align: center;
		background: linear-gradient(135deg, rgba(26, 25, 45, 0.95) 0%, rgba(12, 11, 26, 0.9) 100%);
		padding: 6rem 3rem;
		border-radius: 24px;
		overflow: hidden;
		border: 1px solid rgba(177, 253, 148, 0.2);
		backdrop-filter: blur(20px);
	}

	.stake-support-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: 
			radial-gradient(circle at 20% 80%, rgba(177, 253, 148, 0.1) 0%, transparent 40%),
			radial-gradient(circle at 80% 20%, rgba(218, 66, 251, 0.1) 0%, transparent 40%),
			radial-gradient(circle at 50% 50%, rgba(139, 59, 254, 0.05) 0%, transparent 50%);
		z-index: -1;
	}

	.stake-support-content {
		position: relative;
		z-index: 2;
		opacity: 0;
		transform: translateY(30px);
		transition: all 1s ease;
	}

	.stake-support-content.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.section-header {
		max-width: 700px;
		margin: 0 auto;
	}

	.eyebrow {
		color: #B1FD94;
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin: 0;
	}

	h2 {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 900;
		margin: 0;
		background: linear-gradient(135deg, #fff 0%, #B1FD94 50%, #DA42FB 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: 0.02em;
		line-height: 1.2;
	}

	.subhead {
		max-width: 600px;
		margin: 0 auto;
		color: #a0a0b0;
		line-height: 1.7;
		font-size: 1.2rem;
	}

	.pools-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: 2.5rem;
		margin: 0 auto;
		max-width: 800px;
	}

	.pools-grid.visible .pool-card {
		opacity: 1;
		transform: translateY(0);
	}

	.pool-card {
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
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	.pool-card:hover {
		transform: translateY(-10px);
		border-color: #B1FD94;
		box-shadow: 
			0 20px 40px rgba(0, 0, 0, 0.3),
			0 0 0 1px #B1FD94;
	}

	.pool-card:hover .card-glow {
		opacity: 1;
		transform: scale(1.2);
	}

	.pool-header {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.pool-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #fff;
		letter-spacing: 0.02em;
		margin: 0;
	}

	.pool-pill {
		display: inline-block;
		background: rgba(177, 253, 148, 0.2);
		color: #B1FD94;
		padding: 0.4rem 1rem;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		letter-spacing: 0.05em;
		border: 1px solid rgba(177, 253, 148, 0.3);
		align-self: flex-start;
	}

	.pool-description {
		color: #a0a0b0;
		line-height: 1.6;
		font-size: 1rem;
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}

	.pool-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		list-style: none;
		padding: 0;
		margin: 0 0 2rem 0;
	}

	.tag-chip {
		background: rgba(255, 255, 255, 0.05);
		color: #a0a0b0;
		padding: 0.3rem 0.8rem;
		border-radius: 12px;
		font-size: 0.8rem;
		font-weight: 500;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.pool-cta {
		margin-top: auto;
	}

	.cta-button {
		background: linear-gradient(135deg, #DA42FB 0%, #8B3BFE 100%);
		color: white;
		border: none;
		padding: 1rem 2.5rem;
		border-radius: 50px;
		font-size: 1rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		box-shadow: 0 8px 25px rgba(218, 66, 251, 0.4);
		text-decoration: none;
		display: inline-block;
		width: 100%;
		text-align: center;
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 35px rgba(218, 66, 251, 0.6);
	}

	.card-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) scale(0.8);
		width: 200px;
		height: 200px;
		background: radial-gradient(circle, #B1FD94 0%, transparent 70%);
		opacity: 0;
		transition: all 0.5s ease;
		filter: blur(40px);
		z-index: -1;
	}

	.disclaimer {
		color: #a0a0b0;
		font-size: 0.85rem;
		max-width: 600px;
		margin: 0 auto;
		text-align: center;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		.stake-support-section {
			padding: 4rem 2rem;
			margin: 6rem 0;
		}

		.pools-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.pool-card {
			padding: 2.5rem 2rem;
		}



		.pool-header {
			text-align: center;
			align-items: center;
		}

		.pool-pill {
			align-self: center;
		}
	}

	@media (max-width: 480px) {
		.pools-grid {
			grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		}
	}
</style>
