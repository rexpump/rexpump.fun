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
			<a href="https://t.me/rexpump_fun" target="_blank" rel="noopener noreferrer" class="join-telegram-btn">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
				</svg>
				<span>Join Telegram</span>
				<div class="button-shine"></div>
			</a>
			
			<a href="https://x.com/RexPumpFun" target="_blank" rel="noopener noreferrer" class="join-twitter-btn">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
				</svg>
				<span>Join Twitter</span>
			</a>
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

	.join-telegram-btn,
	.join-twitter-btn {
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

	.join-telegram-btn {
		background: #B1FD94;
		color: #0c0b1a;
		box-shadow: 
			0 10px 30px rgba(177, 253, 148, 0.4),
			0 0 0 1px rgba(177, 253, 148, 0.3);
		text-decoration: none;
	}

	.join-telegram-btn:hover {
		transform: translateY(-3px);
		box-shadow: 
			0 15px 40px rgba(177, 253, 148, 0.6),
			0 0 0 1px rgba(177, 253, 148, 0.5);
		background: #9DF182;
	}

	.join-twitter-btn {
		background: transparent;
		color: #DA42FB;
		border: 2px solid #DA42FB;
		box-shadow: 0 0 20px rgba(218, 66, 251, 0.3);
		text-decoration: none;
	}

	.join-twitter-btn:hover {
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

	.join-telegram-btn:hover .button-shine {
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
