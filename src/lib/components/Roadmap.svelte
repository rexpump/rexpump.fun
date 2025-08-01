<script lang="ts">
	const roadmapData = [
		{
			stage: 'Stage 1',
			title: 'Planning & Design',
			duration: '(Weeks 1-2)',
			tasks: [
				'Decide what features the platform needs',
				'Draw simple diagrams showing how it all works',
				'List what users and the site can do',
				'Split the work what runs on the site, what runs behind the scenes'
			]
		},
		{
			stage: 'Stage 2',
			title: 'Smart Contracts',
			duration: '(Weeks 3-5)',
			tasks: [
				'Write the blockchain code that handles token sales',
				'Test everything to make sure it works properly',
				'Set up automatic checks to avoid bugs'
			]
		},
		{
			stage: 'Stage 3',
			title: 'Backend & Media',
			duration: '(Weeks 6-7)',
			tasks: [
				'Set up logo/banner upload',
				'Make sure images load fast worldwide',
				'Automatically resize and optimize media files'
			]
		},
		{
			stage: 'Stage 4',
			title: 'Frontend & Launch',
			duration: '(Weeks 8-12)',
			tasks: [
				'Build a clean, user-friendly design',
				'Create a dashboard for project creators and investors',
				'First launch on Zilliqa testnet, then go live',
				'Write easy guides so anyone can use the platform'
			]
		}
	];
</script>

<section id="roadmap">
	<div class="roadmap-content">
		<h2>ROADMAP: AROUND 12 WEEKS FROM START TO FULL LAUNCH</h2>
		
		<div class="roadmap-list">
			{#each roadmapData as item}
				<div class="stage-item">
					<h3>{item.stage}: {item.title} {item.duration}</h3>
					<ul class="task-list">
						{#each item.tasks as task}
							<li>{task}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	#roadmap {
		position: relative;
		width: 100vw;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		padding: 4rem 0;
		background: linear-gradient(to right, #0c0b1a 0%, rgba(12,11,26,0.8) 30%, rgba(12,11,26,0) 60%), url('/src/lib/assets/matrix.svg') center center / 60% auto no-repeat;
		min-height: 600px;
	}

	.roadmap-content {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 clamp(1rem, 5vw, 4rem);
		text-align: left;
	}

	h2 {
		font-family: 'Joystix', monospace;
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 900;
		color: #fff;
		margin-bottom: 2rem;
		line-height: 1.2;
		letter-spacing: 0.05em;
	}

	.roadmap-list {
		max-width: 550px;
	}

	.stage-item {
		margin-bottom: 1.5rem;
	}

	h3 {
		font-family: 'IBM Plex Sans', sans-serif;
		font-size: 1.1rem;
		font-weight: 600;
		color: #fff;
		margin-bottom: 0.5rem;
	}

	.task-list {
		list-style: none;
		padding-left: 1.5rem;
		margin: 0;
	}

	.task-list li {
		position: relative;
		color: #a0a0b0;
		font-size: 0.95rem;
		line-height: 1.6;
		margin-bottom: 0.3rem;
		font-family: 'IBM Plex Sans', sans-serif;
	}

	.task-list li::before {
		content: '-';
		position: absolute;
		left: -1.5rem;
		color: #a0a0b0;
	}

	@media (max-width: 768px) {
		#roadmap {
			padding: 3rem 0;
			background: linear-gradient(rgba(12,11,26,0.95), rgba(12,11,26,0.95)), url('/src/lib/assets/matrix.svg') center center / contain no-repeat;
			min-height: 800px;
		}

		.roadmap-content {
			padding: 0 1.5rem;
		}

		.roadmap-list {
			max-width: 100%;
		}
	}
</style>
