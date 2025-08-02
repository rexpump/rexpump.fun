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
	</style>
</svelte:head>

{@render children?.()}
