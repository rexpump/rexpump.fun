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

<header class="container-x">
	<div class="header-content">
		<div class="logo">
			<img src={logo} alt="Rexpump Logo" />
			<span>REXPUMP.FUN</span>
		</div>

		<nav id="mobile-nav" class:open={isMenuOpen} class:mobile={isMobile}>
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
				<a href="https://discord.gg/hyjQUze7" target="_blank" rel="noreferrer">
					<img src={discordIcon} alt="Discord" />
				</a>
			</div>
		</nav>

		<button 
			class="hamburger" 
			class:hidden={!isMobile} 
			onclick={() => (isMenuOpen = !isMenuOpen)} 
			aria-label="Toggle navigation menu"
			aria-expanded={isMenuOpen}
			aria-controls="mobile-nav"
		>
			<span></span>
			<span></span>
			<span></span>
		</button>
	</div>
</header>

<style>
	header {
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
	}

	.header-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 0;
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
		gap: 0.3rem;
		z-index: 10;
		padding: 0.5rem;
		border-radius: 0.25rem;
		transition: all 0.3s ease;
	}

	.hamburger:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.hamburger span {
		width: 1.5rem;
		height: 0.2rem;
		background: #ffffff;
		border-radius: 0.1rem;
		transition: all 0.3s ease;
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
		background: linear-gradient(135deg, rgba(26, 25, 45, 0.95) 0%, rgba(12, 11, 26, 0.9) 100%);
		padding: 1.5rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 0.75rem;
		backdrop-filter: blur(20px);
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
		align-items: flex-end;
		opacity: 1;
		transform: translateY(0);
		transition: all 0.3s ease;
		min-width: 200px;
	}

	nav.mobile.open > * + * {
		margin-top: 1rem;
	}

	nav.mobile.open a {
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;
		transition: all 0.3s ease;
		min-height: 2.75rem;
		display: flex;
		align-items: center;
	}

	nav.mobile.open a:hover {
		background: rgba(177, 253, 148, 0.1);
		color: #B1FD94;
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
