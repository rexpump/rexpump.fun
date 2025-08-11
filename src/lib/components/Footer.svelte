<script lang="ts">
	let currentYear = new Date().getFullYear();
</script>

<footer>
	<div class="footer-content">
		<div class="footer-top">
			<div class="footer-logo">
				<div class="logo-icon">🦖</div>
				<span>REXPUMP.FUN</span>
			</div>
			
			<div class="footer-nav">
				<a href="#features">FEATURES</a>
				<a href="#roadmap">ROADMAP</a>
				<a href="#team">TEAM</a>
				<a href="#contact">CONTACT</a>
			</div>
			
			<div class="footer-socials">
				<a href="https://x.com/RexPumpFun" target="_blank" rel="noreferrer" aria-label="Twitter">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
					</svg>
				</a>
				<a href="https://t.me/rexpump_fun" target="_blank" rel="noreferrer" aria-label="Telegram">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
					</svg>
				</a>
				<a href="https://discord.gg/hyjQUze7" target="_blank" rel="noreferrer" aria-label="Discord">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
						<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
					</svg>
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
		gap: 0.75rem;
		font-weight: 700;
		font-size: 1.2rem;
		letter-spacing: 0.05em;
		color: #fff;
	}

	.logo-icon {
		font-size: 1.8rem;
		filter: drop-shadow(0 0 8px #B1FD94);
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
		width: 40px;
		height: 40px;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.05);
		color: #a0a0b0;
		transition: all 0.3s ease;
		text-decoration: none;
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
