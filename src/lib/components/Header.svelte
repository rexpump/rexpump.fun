<script lang="ts">
	import { onMount } from 'svelte';
	import logo from '$lib/assets/rex-logo.svg';
	import twitterIcon from '$lib/assets/twitter-icon.svg';
	import telegramIcon from '$lib/assets/telegram-icon.svg';
	import discordIcon from '$lib/assets/discord-icon.svg';

	let isMenuOpen = $state(false);
	let isMobile = $state(false);

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<header>
	<div class="logo">
		<img src={logo} alt="Rexpump Logo" />
		<span>REXPUMP.FUN</span>
	</div>

	<nav class:open={isMenuOpen} class:mobile={isMobile}>
		<a href="#roadmap">ROADMAP</a>
		<a href="#team">TEAM</a>
		<a href="#contact">CONTACT</a>
		<div class="socials">
			<a href="https://x.com/RexPumpFun" target="_blank" rel="noreferrer">
				<img src={twitterIcon} alt="X (Twitter)" />
			</a>
			<a href="https://t.me/rexpump_fun" target="_blank" rel="noreferrer">
				<img src={telegramIcon} alt="Telegram" />
			</a>
			<a href="https://discord.com" target="_blank" rel="noreferrer">
				<img src={discordIcon} alt="Discord" />
			</a>
		</div>
	</nav>

	<button class="hamburger" class:hidden={!isMobile} onclick={() => (isMenuOpen = !isMenuOpen)} aria-label="button">
		<span></span>
		<span></span>
		<span></span>
	</button>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem clamp(1rem, 5vw, 2rem);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
		max-width: 1400px;
		margin: 0 auto;
		width: 100%;
	}

	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'Joystix', monospace;
		font-size: clamp(1rem, 3vw, 1.2rem);
		font-weight: bold;
		color: #ffffff;
	}

	.logo img {
		height: clamp(24px, 5vw, 30px);
	}

	.logo span {
		color: #ffea00;
	}

	nav {
		display: flex;
		gap: clamp(1rem, 3vw, 2rem);
		align-items: center;
	}

	nav a {
		text-decoration: none;
		color: #ffffff;
		font-family: 'Joystix', monospace;
		font-size: clamp(0.8rem, 2vw, 0.9rem);
		letter-spacing: 0.05em;
		transition: color 0.3s;
	}

	nav a:hover {
		color: #b1fd94;
	}

	.socials {
		display: flex;
		gap: clamp(0.5rem, 2vw, 1rem);
	}

	.socials img {
		height: clamp(16px, 4vw, 20px);
	}

	.hamburger {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		gap: 5px;
		z-index: 10;
	}

	.hamburger span {
		width: 25px;
		height: 3px;
		background: #ffffff;
		transition: all 0.3s;
	}

	nav.mobile {
		display: none;
	}

	nav.mobile.open {
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 100%;
		right: 0;
		background: #0c0b1a;
		padding: 1rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		gap: 1rem;
		align-items: flex-end;
	}

	.hidden {
		display: none;
	}

	@media (min-width: 769px) {
		nav {
			display: flex !important;
		}
		.hamburger {
			display: none;
		}
	}
</style>
