<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon/favicon.ico" />
	<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="favicon/favicon.svg" />
	<link rel="shortcut icon" href="/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="/favicon/site.webmanifest" />
	<style>
		@font-face {
			font-family: 'IBM Plex Sans';
			src: url('/IBM_Plex_Mono,IBM_Plex_Sans 2/IBM_Plex_Sans/static/IBMPlexSans-Regular.ttf') format('truetype');
			font-weight: 400;
			font-style: normal;
		}
		@font-face {
			font-family: 'IBM Plex Sans';
			src: url('/IBM_Plex_Mono,IBM_Plex_Sans 2/IBM_Plex_Sans/static/IBMPlexSans-Medium.ttf') format('truetype');
			font-weight: 500;
			font-style: normal;
		}
		@font-face {
			font-family: 'IBM Plex Sans';
			src: url('/IBM_Plex_Mono,IBM_Plex_Sans 2/IBM_Plex_Sans/static/IBMPlexSans-SemiBold.ttf') format('truetype');
			font-weight: 600;
			font-style: normal;
		}
		@font-face {
			font-family: 'IBM Plex Sans';
			src: url('/IBM_Plex_Mono,IBM_Plex_Sans 2/IBM_Plex_Sans/static/IBMPlexSans-Bold.ttf') format('truetype');
			font-weight: 700;
			font-style: normal;
		}
		@font-face {
			font-family: 'IBM Plex Mono';
			src: url('/IBM_Plex_Mono,IBM_Plex_Sans 2/IBM_Plex_Mono/IBMPlexMono-Regular.ttf') format('truetype');
			font-weight: 400;
			font-style: normal;
		}
		@font-face {
			font-family: 'IBM Plex Mono';
			src: url('/IBM_Plex_Mono,IBM_Plex_Sans 2/IBM_Plex_Mono/IBMPlexMono-Bold.ttf') format('truetype');
			font-weight: 700;
			font-style: normal;
		}
		@font-face {
			font-family: 'Joystix';
			src: url('/joystix/joystix monospace.otf') format('opentype');
			font-weight: normal;
			font-style: normal;
		}

		/* Глобальные токены для единого вертикального ритма */
		.section {
			padding: 3.5rem 0;
		}

		.section--tight {
			padding: 2.5rem 0;
		}

		.container-x {
			max-width: 1400px;
			margin: 0 auto;
			padding: 0 2rem;
		}

		.stack-sm > * + * {
			margin-top: 0.75rem;
		}

		.stack > * + * {
			margin-top: 1.5rem;
		}

		.stack-lg > * + * {
			margin-top: 2rem;
		}

		@media (min-width: 640px) {
			.section {
				padding: 5rem 0;
			}

			.section--tight {
				padding: 3.5rem 0;
			}

			.stack-sm > * + * {
				margin-top: 1rem;
			}

			.stack > * + * {
				margin-top: 2rem;
			}

			.stack-lg > * + * {
				margin-top: 2.5rem;
			}
		}

		@media (min-width: 1024px) {
			.section {
				padding: 7rem 0;
			}

			.section--tight {
				padding: 5rem 0;
			}
		}

		/* Утилиты для адаптивной типографики в стиле Tailwind */
		.break-words {
			overflow-wrap: break-word;
			word-wrap: break-word;
		}

		.break-all {
			word-break: break-all;
		}

		.break-normal {
			overflow-wrap: normal;
			word-wrap: normal;
			word-break: normal;
		}

		.leading-tight {
			line-height: 1.25;
		}

		.tracking-tight {
			letter-spacing: -0.025em;
		}

		.tracking-normal {
			letter-spacing: 0em;
		}

		.tracking-wide {
			letter-spacing: 0.025em;
		}

		.text-center {
			text-align: center;
		}

		.mx-auto {
			margin-left: auto;
			margin-right: auto;
		}

		.max-w-xl {
			max-width: 36rem;
		}

		.max-w-2xl {
			max-width: 42rem;
		}

		.uppercase {
			text-transform: uppercase;
		}

		@media (min-width: 640px) {
			.sm\\:break-normal {
				overflow-wrap: normal;
				word-wrap: normal;
				word-break: normal;
			}

			.sm\\:tracking-wide {
				letter-spacing: 0.025em;
			}

			.sm\\:text-lg {
				font-size: 1.125rem;
				line-height: 1.75rem;
			}

			.sm\\:text-5xl {
				font-size: 3rem;
				line-height: 1;
			}
		}

		@media (min-width: 768px) {
			.md\\:text-6xl {
				font-size: 3.75rem;
				line-height: 1;
			}
		}

		.text-base {
			font-size: 1rem;
			line-height: 1.5rem;
		}

		.text-4xl {
			font-size: 2.25rem;
			line-height: 2.5rem;
		}
	</style>
</svelte:head>

{@render children?.()}
