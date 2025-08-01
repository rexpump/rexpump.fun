<script lang="ts">
	import { onMount } from 'svelte';

	let communityRef: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.3 }
		);

		if (communityRef) {
			observer.observe(communityRef);
		}

		return () => observer.disconnect();
	});
</script>

<section id="contact" class="community-section" bind:this={communityRef}>
	<div class="community-background"></div>
	
	<div class="community-content" class:visible={isVisible}>
		<div class="icon-container">
			<div class="community-icon">🚀</div>
			<div class="icon-ring"></div>
		</div>
		
		<h2>JOIN THE REXPUMP.FUN COMMUNITY</h2>
		
		<p>
			Whether you're looking to create your own token or take part in the exciting new projects, 
			Rexpump.fun has got the tools and support you need to succeed in the Zilliqa ecosystem.
		</p>
		
		<div class="cta-buttons">
			<button class="learn-more-btn">
				<span>Learn More</span>
				<div class="button-shine"></div>
			</button>
			
			<button class="join-discord-btn">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
				</svg>
				<span>Join Discord</span>
			</button>
		</div>

		<div class="community-stats">
			<div class="stat">
				<div class="stat-number">1000+</div>
				<div class="stat-label">Community Members</div>
			</div>
			<div class="stat">
				<div class="stat-number">50+</div>
				<div class="stat-label">Projects Launched</div>
			</div>
			<div class="stat">
				<div class="stat-number">24/7</div>
				<div class="stat-label">Support Available</div>
			</div>
		</div>
	</div>

	<div class="floating-particles">
		{#each Array(8) as _, i}
			<div 
				class="particle" 
				style="
					left: {Math.random() * 100}%;
					top: {Math.random() * 100}%;
					animation-delay: {Math.random() * 5}s;
					animation-duration: {3 + Math.random() * 4}s;
				"
			></div>
		{/each}
	</div>
</section>

<style>
	.community-section {
		position: relative;
		text-align: center;
		background: linear-gradient(135deg, rgba(26, 25, 45, 0.95) 0%, rgba(12, 11, 26, 0.9) 100%);
		padding: 6rem 3rem;
		border-radius: 24px;
		margin: 8rem 0;
		overflow: hidden;
		border: 1px solid rgba(177, 253, 148, 0.2);
		backdrop-filter: blur(20px);
	}

	.community-background {
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

	.community-content {
		position: relative;
		z-index: 2;
		opacity: 0;
		transform: translateY(30px);
		transition: all 1s ease;
	}

	.community-content.visible {
		opacity: 1;
		transform: translateY(0);
	}

	.icon-container {
		position: relative;
		margin: 0 auto 3rem;
		width: 100px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.community-icon {
		font-size: 4rem;
		filter: drop-shadow(0 0 20px #B1FD94);
		animation: iconFloat 3s ease-in-out infinite;
		z-index: 2;
	}

	@keyframes iconFloat {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-15px) rotate(10deg); }
	}

	.icon-ring {
		position: absolute;
		top: -20px;
		left: -20px;
		right: -20px;
		bottom: -20px;
		border: 2px solid #B1FD94;
		border-radius: 50%;
		opacity: 0.6;
		animation: ringPulse 2s ease-in-out infinite;
	}

	@keyframes ringPulse {
		0%, 100% { transform: scale(1); opacity: 0.6; }
		50% { transform: scale(1.2); opacity: 0.8; }
	}

	h2 {
		font-size: clamp(2rem, 5vw, 3.5rem);
		font-weight: 900;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, #fff 0%, #B1FD94 50%, #DA42FB 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: 0.02em;
		line-height: 1.2;
	}

	p {
		max-width: 700px;
		margin: 0 auto 3rem auto;
		color: #a0a0b0;
		line-height: 1.7;
		font-size: 1.2rem;
	}

	.cta-buttons {
		display: flex;
		gap: 2rem;
		justify-content: center;
		margin-bottom: 4rem;
		flex-wrap: wrap;
	}

	.learn-more-btn,
	.join-discord-btn {
		position: relative;
		padding: 1.2rem 3rem;
		border: none;
		border-radius: 50px;
		font-size: 1.1rem;
		font-weight: 700;
		cursor: pointer;
		transition: all 0.3s ease;
		overflow: hidden;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.learn-more-btn {
		background: #B1FD94;
		color: #0c0b1a;
		box-shadow: 
			0 10px 30px rgba(177, 253, 148, 0.4),
			0 0 0 1px rgba(177, 253, 148, 0.3);
	}

	.learn-more-btn:hover {
		transform: translateY(-3px);
		box-shadow: 
			0 15px 40px rgba(177, 253, 148, 0.6),
			0 0 0 1px rgba(177, 253, 148, 0.5);
		background: #9DF182;
	}

	.join-discord-btn {
		background: transparent;
		color: #DA42FB;
		border: 2px solid #DA42FB;
		box-shadow: 0 0 20px rgba(218, 66, 251, 0.3);
	}

	.join-discord-btn:hover {
		background: rgba(218, 66, 251, 0.1);
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(218, 66, 251, 0.4);
	}

	.button-shine {
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
		transition: left 0.5s ease;
	}

	.learn-more-btn:hover .button-shine {
		left: 100%;
	}

	.community-stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		max-width: 800px;
		margin: 0 auto;
	}

	.stat {
		padding: 2rem 1rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
		backdrop-filter: blur(10px);
	}

	.stat:hover {
		transform: translateY(-5px);
		background: rgba(177, 253, 148, 0.1);
		border-color: rgba(177, 253, 148, 0.3);
	}

	.stat-number {
		font-size: 2.5rem;
		font-weight: 900;
		color: #B1FD94;
		margin-bottom: 0.5rem;
		text-shadow: 0 0 10px rgba(177, 253, 148, 0.5);
	}

	.stat-label {
		color: #a0a0b0;
		font-size: 0.95rem;
		font-weight: 500;
	}

	.floating-particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.particle {
		position: absolute;
		width: 4px;
		height: 4px;
		background: #B1FD94;
		border-radius: 50%;
		opacity: 0.6;
		animation: particleFloat 6s ease-in-out infinite;
		box-shadow: 0 0 6px #B1FD94;
	}

	@keyframes particleFloat {
		0%, 100% { 
			transform: translateY(0px) scale(1);
			opacity: 0.6;
		}
		50% { 
			transform: translateY(-30px) scale(1.2);
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.community-section {
			padding: 4rem 2rem;
			margin: 6rem 0;
		}

		.cta-buttons {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}

		.learn-more-btn,
		.join-discord-btn {
			width: 100%;
			max-width: 300px;
			justify-content: center;
		}

		.community-stats {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.stat {
			padding: 1.5rem 1rem;
		}

		.stat-number {
			font-size: 2rem;
		}
	}
</style>
