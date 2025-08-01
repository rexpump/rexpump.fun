<script lang="ts">
	import { onMount } from 'svelte';

	let roadmapRef: HTMLElement;
	let isVisible = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				isVisible = entry.isIntersecting;
			},
			{ threshold: 0.3 }
		);

		if (roadmapRef) {
			observer.observe(roadmapRef);
		}

		return () => observer.disconnect();
	});

	const roadmapData = [
		{
			stage: 'Stage 1',
			title: 'Planning & Design',
			duration: '(Weeks 1-2)',
			tasks: [
				'Decide what features the platform needs',
				'Draw how the platform will look and how it all works',
				'List what users and the site can do',
				'Plan the main parts of the site, what runs behind the scenes'
			]
		},
		{
			stage: 'Stage 2',
			title: 'Smart Contracts',
			duration: '(Weeks 3-5)',
			tasks: [
				'Write the blockchain code that handles token sales',
				'Get a security company to check it works properly',
				'Set up automatic checks to avoid bugs'
			]
		},
		{
			stage: 'Stage 3',
			title: 'Backend & Media',
			duration: '(Weeks 6-7)',
			tasks: [
				'Set up image/video upload',
				'Make sure images load fast worldwide',
				'Create an API that serves website media files'
			]
		},
		{
			stage: 'Stage 4',
			title: 'Frontend & Launch',
			duration: '(Weeks 8-12)',
			tasks: [
				'Build the site to match the UI design',
				'Create a dashboard for project creators and investors',
				'Thoroughly test everything on the main network',
				'Write easy guides so anyone can use the platform'
			]
		}
	];
</script>

<section id="roadmap" bind:this={roadmapRef}>
	<div class="section-header" class:visible={isVisible}>
		<h2>ROADMAP: AROUND 12 WEEKS FROM START TO FULL LAUNCH</h2>
	</div>
	
	<div class="roadmap-grid" class:visible={isVisible}>
		{#each roadmapData as item, index}
			<div 
				class="roadmap-card" 
				style="animation-delay: {index * 0.2}s"
			>
				<div class="card-header">
					<h3>{item.stage}: {item.title}</h3>
					<span class="duration">{item.duration}</span>
				</div>
				
				<ul class="task-list">
					{#each item.tasks as task}
						<li>
							<span class="task-icon">✓</span>
							<span class="task-text">{task}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	#roadmap {
		text-align: center;
		position: relative;
		padding: 4rem 0;
		background: 
			linear-gradient(135deg, rgba(12, 11, 26, 0.8) 0%, rgba(26, 25, 45, 0.6) 100%),
			url('/src/lib/assets/matrix.svg') center/cover no-repeat;
		border-radius: 20px;
		overflow: hidden;
	}

	#roadmap::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(135deg, rgba(12, 11, 26, 0.8) 0%, rgba(26, 25, 45, 0.6) 100%);
		z-index: 1;
	}

	.section-header {
		position: relative;
		z-index: 2;
		margin-bottom: 4rem;
		opacity: 0;
		transform: translateY(30px);
		transition: all 0.8s ease;
	}

	.section-header.visible {
		opacity: 1;
		transform: translateY(0);
	}

	h2 {
		font-size: clamp(2rem, 4vw, 3rem);
		font-weight: 900;
		margin-bottom: 2rem;
		color: #fff;
		line-height: 1.3;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.roadmap-grid {
		position: relative;
		z-index: 2;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.roadmap-grid.visible .roadmap-card {
		opacity: 1;
		transform: translateY(0);
	}

	.roadmap-card {
		background: rgba(26, 25, 45, 0.9);
		border: 1px solid rgba(177, 253, 148, 0.2);
		border-radius: 16px;
		padding: 2rem;
		text-align: left;
		transition: all 0.5s ease;
		opacity: 0;
		transform: translateY(50px);
		backdrop-filter: blur(10px);
	}

	.roadmap-card:hover {
		transform: translateY(-10px);
		border-color: #B1FD94;
		box-shadow: 0 15px 30px rgba(177, 253, 148, 0.2);
	}

	.card-header {
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(177, 253, 148, 0.2);
	}

	h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #B1FD94;
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}

	.duration {
		color: #a0a0b0;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.task-list {
		list-style: none;
		padding: 0;
	}

	.task-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		font-size: 0.95rem;
	}

	.task-icon {
		color: #B1FD94;
		font-weight: 700;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.task-text {
		color: #a0a0b0;
		line-height: 1.5;
	}

	@media (max-width: 768px) {
		#roadmap {
			padding: 3rem 1rem;
		}

		.roadmap-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
			padding: 0 1rem;
		}

		.roadmap-card {
			padding: 1.5rem;
		}

		h3 {
			font-size: 1.2rem;
		}
	}
</style>
