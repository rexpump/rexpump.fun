<script lang="ts">
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.ico" />
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
