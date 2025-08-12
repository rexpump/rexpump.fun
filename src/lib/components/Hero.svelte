<script lang="ts">
</script>

<section class="hero">
	<div class="hero-content">
		<h1 class="hero-title">REXPUMP.FUN</h1>
		
		<h2 class="hero-subtitle">
			UPCOMING MEME TOKEN LAUNCHPAD ON ZILLIQA
		</h2>
		
		<a href="#contact" class="cta-button">
			Join Community
		</a>
	</div>
</section>

<style>
	.hero {
		position: relative;
		text-align: center;
		padding: 4rem 0 6rem;
		min-height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		background: 
			linear-gradient(rgba(12, 11, 26, 0.8), rgba(12, 11, 26, 0.8)),
			url('/src/lib/assets/Header.png') center/cover no-repeat;
		box-shadow: inset 50px 0 100px -20px #0c0b1a, inset -50px 0 100px -20px #0c0b1a;
		margin-bottom: 0;
	}

	.hero-content {
		max-width: 800px;
		margin-bottom: 3rem;
		position: relative;
		z-index: 1;
	}

	.hero-title {
		font-size: clamp(3rem, 8vw, 5rem);
		font-weight: 900;
		color: #B1FD94;
		margin: 0 0 1rem 0;
		letter-spacing: 0.02em;
		text-shadow: 0 0 20px rgba(177, 253, 148, 0.5);
	}

	.hero-subtitle {
		font-size: clamp(1.2rem, 3vw, 2rem);
		font-weight: 600;
		color: #fff;
		margin: 0 0 2.5rem 0;
		line-height: 1.3;
		max-width: 600px;
		margin-left: auto;
		margin-right: auto;
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
	}

	.cta-button:hover {
		transform: translateY(-2px);
		box-shadow: 0 12px 35px rgba(218, 66, 251, 0.6);
	}

	@media (max-width: 768px) {
		.hero {
			padding: 3rem 0 4rem;
		}

		.cta-button {
			padding: 0.8rem 2rem;
			font-size: 0.9rem;
		}
	}
</style>
