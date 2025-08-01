<script lang="ts">
	import logo from '$lib/assets/rex-logo.svg';
	import twitterIcon from '$lib/assets/twitter-icon.svg';
	import telegramIcon from '$lib/assets/telegram-icon.svg';
	import discordIcon from '$lib/assets/discord-icon.svg';
</script>

<header>
	<div class="logo">
		<img src={logo} alt="Rexpump Logo" />
		<span>REXPUMP.FUN</span>
	</div>
	<nav>
		<a href="#roadmap">ROADMAP</a>
		<a href="#team">TEAM</a>
		<a href="#contact">CONTACT</a>
	</nav>
	<div class="socials">
		<a href="https://twitter.com" target="_blank" rel="noreferrer">
			<img src={twitterIcon} alt="Twitter" />
		</a>
		<a href="https://telegram.com" target="_blank" rel="noreferrer">
			<img src={telegramIcon} alt="Twitter" />
		</a>
		<a href="https://discord.com" target="_blank" rel="noreferrer">
			<img src={discordIcon} alt="Discord" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1.5rem 0;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}
	.logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-weight: bold;
		font-size: 1.2rem;
	}
	.logo img {
		height: 30px;
	}
	nav {
		display: flex;
		gap: 2rem;
	}
	nav a {
		text-decoration: none;
		color: #fff;
		font-size: 0.9rem;
		letter-spacing: 0.05em;
	}
	.socials {
		display: flex;
		gap: 1rem;
	}
	.socials img {
		height: 20px;
	}
</style>

