<script lang="ts">
	import logo from '$lib/assets/rex-logo.svg';
	import twitterIcon from '$lib/assets/twitter-icon.svg';
	import telegramIcon from '$lib/assets/telegram-icon.svg';
	import discordIcon from '$lib/assets/discord-icon.svg';

	let currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="footer-content">
		<div class="footer-top">
			<div class="footer-logo">
				<img src={logo} alt="Rexpump Logo" />
				<span>REXPUMP.FUN</span>
			</div>
			
			<div class="footer-nav">
				<a href="#features">FEATURES</a>
				<a href="#roadmap">ROADMAP</a>
				<a href="#team">TEAM</a>
				<a href="#contact">CONTACT</a>
			</div>
			
			<div class="footer-socials">
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
		</div>
		
		<div class="footer-divider"></div>
		
		<div class="footer-bottom">
			<p>© {currentYear} Rexpump.fun. All rights reserved.</p>
		</div>
	</div>
</footer>

<style>
	footer {
		position: relative;
		margin-top: 6rem;
		background: 
			linear-gradient(rgba(12, 11, 26, 0.95), rgba(12, 11, 26, 0.95)),
			url('/src/lib/assets/footor.png') center/cover no-repeat;
		border-radius: 16px 16px 0 0;
		overflow: hidden;
	}

	.footer-content {
		padding: 3rem 2rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-top {
		display: grid;
		grid-template-columns: 1fr 2fr 1fr;
		align-items: center;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.footer-logo {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: 'Joystix', monospace;
		font-size: clamp(1rem, 3vw, 1.2rem);
		font-weight: bold;
		color: #ffffff;
	}

	.footer-logo img {
		height: clamp(24px, 5vw, 30px);
	}

	.footer-logo span {
		color: #ffea00;
	}

	.footer-nav {
		display: flex;
		gap: 2rem;
		justify-content: center;
	}

	.footer-nav a {
		text-decoration: none;
		color: #a0a0b0;
		font-size: 0.9rem;
		font-weight: 500;
		letter-spacing: 0.05em;
		transition: color 0.3s ease;
	}

	.footer-nav a:hover {
		color: #B1FD94;
	}

	.footer-socials {
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
	}

	.footer-socials a {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer-socials a:hover {
		background: rgba(177, 253, 148, 0.1);
		color: #B1FD94;
	}

	.footer-divider {
		height: 1px;
		background: rgba(177, 253, 148, 0.2);
		margin: 2rem 0;
	}

	.footer-bottom {
		text-align: center;
	}

	.footer-bottom p {
		color: #a0a0b0;
		font-size: 0.9rem;
		margin: 0;
	}

	@media (max-width: 768px) {
		.footer-content {
			padding: 2rem 1rem;
		}

		.footer-top {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.footer-nav {
			order: 2;
			flex-wrap: wrap;
			gap: 1.5rem;
		}

		.footer-socials {
			order: 3;
			justify-content: center;
		}
	}
</style>
