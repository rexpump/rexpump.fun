<script lang="ts">
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

<section id="roadmap">
	<div class="roadmap-content">
		<h2>ROADMAP: AROUND 12 WEEKS FROM START TO FULL LAUNCH</h2>
		
		<div class="roadmap-grid">
			{#each roadmapData as item}
				<div class="roadmap-card">
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
	</div>
</section>

<style>
	#roadmap {
		position: relative;
		padding: 4rem 2rem;
		background: 
			linear-gradient(rgba(12, 11, 26, 0.95), rgba(12, 11, 26, 0.95)),
			url('/src/lib/assets/matrix.svg') center/auto repeat;
		border-radius: 16px;
		margin: 4rem 0;
	}

	.roadmap-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	h2 {
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 900;
		color: #fff;
		margin-bottom: 3rem;
		line-height: 1.3;
	}

	.roadmap-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
	}

	.roadmap-card {
		background: rgba(26, 25, 45, 0.8);
		border: 1px solid rgba(177, 253, 148, 0.2);
		border-radius: 12px;
		padding: 2rem;
		text-align: left;
		transition: all 0.3s ease;
	}

	.roadmap-card:hover {
		border-color: rgba(177, 253, 148, 0.4);
		transform: translateY(-5px);
	}

	.card-header {
		margin-bottom: 1.5rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid rgba(177, 253, 148, 0.2);
	}

	h3 {
		font-size: 1.2rem;
		font-weight: 700;
		color: #B1FD94;
		margin-bottom: 0.5rem;
		line-height: 1.3;
	}

	.duration {
		color: #a0a0b0;
		font-size: 0.85rem;
		font-weight: 500;
	}

	.task-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.task-list li {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		margin-bottom: 0.75rem;
		font-size: 0.9rem;
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
			margin: 3rem 0;
		}

		.roadmap-grid {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}

		.roadmap-card {
			padding: 1.5rem;
		}
	}
</style>
