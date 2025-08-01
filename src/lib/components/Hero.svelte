<script lang="ts">
	import { onMount } from 'svelte';

	let heroRef: HTMLElement;
	let mouseX = $state(0);
	let mouseY = $state(0);

	onMount(() => {
		function handleMouseMove(e: MouseEvent) {
			const rect = heroRef.getBoundingClientRect();
			mouseX = ((e.clientX - rect.left) / rect.width) * 100;
			mouseY = ((e.clientY - rect.top) / rect.height) * 100;
		}

		heroRef.addEventListener('mousemove', handleMouseMove);
		
		return () => {
			heroRef.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<section class="hero" bind:this={heroRef}>
	<div class="hero-bg" style="transform: translate({mouseX * 0.02}px, {mouseY * 0.02}px)"></div>
	
	<div class="hero-content">
		<div class="hero-title-container">
			<h1 class="hero-title">REXPUMP.FUN</h1>
			<div class="title-glow"></div>
		</div>
		
		<h2 class="hero-subtitle">
			UPCOMING MEME TOKEN LAUNCHPAD ON ZILLIQA
		</h2>
		
		<p class="hero-description">
			Revolutionary platform for creating and launching meme tokens with ease. 
			Built for the Zilliqa ecosystem with enhanced security and user-friendly interface.
		</p>
		
		<div class="hero-buttons">
			<button class="cta-button primary">
				<span>Join Waitlist</span>
				<div class="button-glow"></div>
			</button>
			<button class="cta-button secondary">
				<span>Learn More</span>
			</button>
		</div>
	</div>

	<div class="hero-visual">
		<div class="dino-container">
			<div class="dino-emoji">🦖</div>
			<div class="orbital-rings">
				<div class="ring ring-1"></div>
				<div class="ring ring-2"></div>
				<div class="ring ring-3"></div>
			</div>
		</div>
	</div>

	<div class="floating-elements">
		<div class="floating-element" style="left: 10%; top: 20%; animation-delay: 0s;">💎</div>
		<div class="floating-element" style="left: 85%; top: 15%; animation-delay: 1s;">🚀</div>
		<div class="floating-element" style="left: 15%; top: 80%; animation-delay: 2s;">⭐</div>
		<div class="floating-element" style="left: 80%; top: 85%; animation-delay: 1.5s;">💫</div>
	</div>
</section>

<style>
	.hero {
		position: relative;
		text-align: center;
		padding: 6rem 0;
		min-height: 90vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		border-radius: 20px;
		background: radial-gradient(ellipse at center, rgba(26, 25, 45, 0.8) 0%, rgba(12, 11, 26, 0.9) 100%);
	}

	.hero-bg {
		position: absolute;
		top: -50%;
		left: -50%;
		width: 200%;
		height: 200%;
		background: 
			radial-gradient(circle at 30% 70%, rgba(177, 253, 148, 0.15) 0%, transparent 40%),
			radial-gradient(circle at 70% 30%, rgba(218, 66, 251, 0.15) 0%, transparent 40%),
			radial-gradient(circle at 50% 50%, rgba(139, 59, 254, 0.1) 0%, transparent 50%);
		animation: rotate 20s linear infinite;
		z-index: -1;
	}

	@keyframes rotate {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}

	.hero-content {
		max-width: 800px;
		z-index: 2;
		margin-bottom: 4rem;
	}

	.hero-title-container {
		position: relative;
		margin-bottom: 2rem;
	}

	.hero-title {
		font-size: clamp(3rem, 8vw, 6rem);
		font-weight: 900;
		color: #B1FD94;
		margin: 0;
		letter-spacing: 0.05em;
		text-shadow: 
			0 0 20px rgba(177, 253, 148, 0.8),
			0 0 40px rgba(177, 253, 148, 0.6),
			0 0 60px rgba(177, 253, 148, 0.4);
		animation: titlePulse 3s ease-in-out infinite;
		position: relative;
		z-index: 2;
	}

	@keyframes titlePulse {
		0%, 100% { 
			text-shadow: 
				0 0 20px rgba(177, 253, 148, 0.8),
				0 0 40px rgba(177, 253, 148, 0.6),
				0 0 60px rgba(177, 253, 148, 0.4);
		}
		50% { 
			text-shadow: 
				0 0 30px rgba(177, 253, 148, 1),
				0 0 60px rgba(177, 253, 148, 0.8),
				0 0 90px rgba(177, 253, 148, 0.6);
		}
	}

	.title-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background: radial-gradient(ellipse, rgba(177, 253, 148, 0.3) 0%, transparent 70%);
		filter: blur(20px);
		z-index: 1;
		animation: glowPulse 2s ease-in-out infinite alternate;
	}

	@keyframes glowPulse {
		0% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
		100% { opacity: 1; transform: translate(-50%, -50%) scale(1.1); }
	}

	.hero-subtitle {
		font-size: clamp(1.5rem, 4vw, 2.5rem);
		font-weight: 700;
		margin: 0 0 1.5rem 0;
		line-height: 1.2;
		background: linear-gradient(135deg, #fff 0%, #a0a0b0 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-description {
		font-size: 1.2rem;
		color: #a0a0b0;
		line-height: 1.6;
		margin-bottom: 3rem;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
	}

	.hero-buttons {
		display: flex;
		gap: 1.5rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.cta-button {
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
	}

	.cta-button span {
		position: relative;
		z-index: 2;
	}

	.cta-button.primary {
		background: linear-gradient(135deg, #DA42FB 0%, #8B3BFE 100%);
		color: white;
		box-shadow: 
			0 10px 30px rgba(218, 66, 251, 0.4),
			0 0 0 1px rgba(218, 66, 251, 0.3);
	}

	.cta-button.primary:hover {
		transform: translateY(-3px);
		box-shadow: 
			0 15px 40px rgba(218, 66, 251, 0.6),
			0 0 0 1px rgba(218, 66, 251, 0.5);
	}

	.cta-button.secondary {
		background: transparent;
		color: #B1FD94;
		border: 2px solid #B1FD94;
		box-shadow: 0 0 20px rgba(177, 253, 148, 0.3);
	}

	.cta-button.secondary:hover {
		background: rgba(177, 253, 148, 0.1);
		transform: translateY(-3px);
		box-shadow: 0 10px 30px rgba(177, 253, 148, 0.4);
	}

	.button-glow {
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
		transition: left 0.5s ease;
	}

	.cta-button.primary:hover .button-glow {
		left: 100%;
	}

	.hero-visual {
		position: relative;
		z-index: 1;
	}

	.dino-container {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.dino-emoji {
		font-size: 8rem;
		filter: drop-shadow(0 0 30px rgba(177, 253, 148, 0.6));
		animation: dinoFloat 4s ease-in-out infinite;
		z-index: 2;
	}

	@keyframes dinoFloat {
		0%, 100% { transform: translateY(0px) rotate(0deg); }
		50% { transform: translateY(-20px) rotate(5deg); }
	}

	.orbital-rings {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.ring {
		position: absolute;
		border: 2px solid;
		border-radius: 50%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		opacity: 0.6;
	}

	.ring-1 {
		width: 200px;
		height: 200px;
		border-color: rgba(177, 253, 148, 0.4);
		animation: ringRotate 10s linear infinite;
	}

	.ring-2 {
		width: 300px;
		height: 300px;
		border-color: rgba(218, 66, 251, 0.3);
		animation: ringRotate 15s linear infinite reverse;
	}

	.ring-3 {
		width: 400px;
		height: 400px;
		border-color: rgba(139, 59, 254, 0.2);
		animation: ringRotate 20s linear infinite;
	}

	@keyframes ringRotate {
		0% { transform: translate(-50%, -50%) rotate(0deg); }
		100% { transform: translate(-50%, -50%) rotate(360deg); }
	}

	.floating-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1;
	}

	.floating-element {
		position: absolute;
		font-size: 2rem;
		animation: float 6s ease-in-out infinite;
		opacity: 0.7;
	}

	@keyframes float {
		0%, 100% { transform: translateY(0px); }
		50% { transform: translateY(-30px); }
	}

	@media (max-width: 768px) {
		.hero {
			padding: 4rem 0;
			min-height: 80vh;
		}

		.hero-buttons {
			flex-direction: column;
			align-items: center;
		}

		.cta-button {
			width: 100%;
			max-width: 300px;
		}

		.dino-emoji {
			font-size: 5rem;
		}

		.ring-1 { width: 150px; height: 150px; }
		.ring-2 { width: 220px; height: 220px; }
		.ring-3 { width: 290px; height: 290px; }

		.floating-element {
			font-size: 1.5rem;
		}
	}
</style>
