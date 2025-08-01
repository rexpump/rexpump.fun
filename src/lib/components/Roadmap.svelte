<script lang="ts">
	import { onMount } from 'svelte';

	let roadmapRef: HTMLElement;
	let visibleItems = $state(new Set());

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const index = parseInt(entry.target.getAttribute('data-index') || '0');
						visibleItems.add(index);
						visibleItems = new Set(visibleItems);
					}
				});
			},
			{ threshold: 0.3 }
		);

		const items = roadmapRef.querySelectorAll('.roadmap-item');
		items.forEach(item => observer.observe(item));

		return () => observer.disconnect();
	});

	const roadmapData = [
		{
			stage: 'Stage 1',
			title: 'Planning & Design',
			duration: 'Weeks 1-2',
			tasks: [
				'Decide what features the platform needs',
				'Draw how the platform will look and how it all works',
				'List what users and the site can do',
				'Plan the main parts of the site, what runs behind the scenes'
			],
			color: '#B1FD94',
			icon: '📋'
		},
		{
			stage: 'Stage 2',
			title: 'Smart Contracts',
			duration: 'Weeks 3-5',
			tasks: [
				'Write the blockchain code that handles token sales',
				'Get a security company to check it works properly',
				'Set up automatic checks to avoid bugs'
			],
			color: '#DA42FB',
			icon: '⚡'
		},
		{
			stage: 'Stage 3',
			title: 'Backend & Media',
			duration: 'Weeks 6-7',
			tasks: [
				'Set up image/video upload',
				'Make sure images load fast worldwide',
				'Create an API that serves website media files'
			],
			color: '#8B3BFE',
			icon: '🗄️'
		},
		{
			stage: 'Stage 4',
			title: 'Frontend & Launch',
			duration: 'Weeks 8-12',
			tasks: [
				'Build the site to match the UI design',
				'Create a dashboard for project creators and investors',
				'Thoroughly test everything on the main network',
				'Write easy guides so anyone can use the platform'
			],
			color: '#00D4FF',
			icon: '🚀'
		}
	];
</script>

<section id="roadmap" bind:this={roadmapRef}>
	<div class="section-header">
		<h2>ROADMAP: AROUND 12 WEEKS FROM START TO FULL LAUNCH</h2>
		<div class="header-decoration"></div>
	</div>
	
	<div class="roadmap-container">
		<div class="timeline-line"></div>
		
		{#each roadmapData as item, index}
			<div 
				class="roadmap-item" 
				class:visible={visibleItems.has(index)}
				data-index={index}
				style="--item-color: {item.color}; --item-index: {index}"
			>
				<div class="timeline-dot">
					<div class="dot-inner">{item.icon}</div>
					<div class="dot-glow"></div>
				</div>
				
				<div class="roadmap-content">
					<div class="roadmap-header">
						<span class="stage-badge">{item.stage}</span>
						<span class="duration">{item.duration}</span>
					</div>
					
					<h3>{item.title}</h3>
					
					<ul class="task-list">
						{#each item.tasks as task, taskIndex}
							<li 
								style="animation-delay: {(index * 0.3) + (taskIndex * 0.1)}s"
								class:visible={visibleItems.has(index)}
							>
								<span class="task-icon">✓</span>
								<span class="task-text">{task}</span>
							</li>
						{/each}
					</ul>
				</div>
				
				<div class="item-background"></div>
			</div>
		{/each}
	</div>
</section>

<style>
	#roadmap {
		text-align: center;
		position: relative;
		padding: 2rem 0;
	}

	.section-header {
		margin-bottom: 4rem;
		position: relative;
	}

	h2 {
		font-size: clamp(1.8rem, 4vw, 3rem);
		font-weight: 900;
		margin-bottom: 2rem;
		background: linear-gradient(135deg, #fff 0%, #B1FD94 50%, #DA42FB 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		line-height: 1.3;
		max-width: 900px;
		margin-left: auto;
		margin-right: auto;
	}

	.header-decoration {
		width: 100px;
		height: 4px;
		background: linear-gradient(90deg, #B1FD94, #DA42FB, #8B3BFE);
		margin: 0 auto;
		border-radius: 2px;
	}

	.roadmap-container {
		position: relative;
		max-width: 1000px;
		margin: 0 auto;
		text-align: left;
	}

	.timeline-line {
		position: absolute;
		left: 2rem;
		top: 0;
		bottom: 0;
		width: 3px;
		background: linear-gradient(180deg, #B1FD94, #DA42FB, #8B3BFE, #00D4FF);
		border-radius: 2px;
		opacity: 0.6;
	}

	.roadmap-item {
		position: relative;
		margin-bottom: 4rem;
		padding-left: 6rem;
		opacity: 0;
		transform: translateX(-30px);
		transition: all 0.8s ease;
	}

	.roadmap-item.visible {
		opacity: 1;
		transform: translateX(0);
	}

	.timeline-dot {
		position: absolute;
		left: -1rem;
		top: 1rem;
		width: 4rem;
		height: 4rem;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 2;
	}

	.dot-inner {
		width: 3rem;
		height: 3rem;
		background: linear-gradient(135deg, var(--item-color), rgba(255, 255, 255, 0.2));
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.2rem;
		border: 2px solid var(--item-color);
		transition: all 0.3s ease;
		position: relative;
		z-index: 2;
	}

	.dot-glow {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		height: 100%;
		background: radial-gradient(circle, var(--item-color) 0%, transparent 70%);
		opacity: 0;
		transition: all 0.3s ease;
		filter: blur(10px);
		z-index: 1;
	}

	.roadmap-item:hover .dot-glow {
		opacity: 0.8;
		transform: translate(-50%, -50%) scale(1.5);
	}

	.roadmap-item:hover .dot-inner {
		transform: scale(1.1);
		box-shadow: 0 0 20px var(--item-color);
	}

	.roadmap-content {
		background: linear-gradient(135deg, rgba(26, 25, 45, 0.9) 0%, rgba(18, 17, 35, 0.8) 100%);
		padding: 2.5rem;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
		backdrop-filter: blur(10px);
		transition: all 0.3s ease;
	}

	.roadmap-content:hover {
		border-color: var(--item-color);
		transform: translateY(-5px);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
	}

	.roadmap-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.stage-badge {
		background: var(--item-color);
		color: #0c0b1a;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		font-weight: 700;
		letter-spacing: 0.05em;
	}

	.duration {
		color: var(--item-color);
		font-weight: 600;
		font-size: 0.95rem;
	}

	h3 {
		font-size: 1.8rem;
		font-weight: 700;
		margin-bottom: 1.5rem;
		color: #fff;
		letter-spacing: 0.02em;
	}

	.task-list {
		list-style: none;
		padding: 0;
	}

	.task-list li {
		display: flex;
		align-items: flex-start;
		gap: 1rem;
		margin-bottom: 1rem;
		opacity: 0;
		transform: translateX(-20px);
		transition: all 0.5s ease;
	}

	.task-list li.visible {
		opacity: 1;
		transform: translateX(0);
	}

	.task-icon {
		color: var(--item-color);
		font-weight: 700;
		font-size: 1.1rem;
		flex-shrink: 0;
		margin-top: 0.1rem;
	}

	.task-text {
		color: #a0a0b0;
		line-height: 1.6;
		font-size: 1rem;
	}

	.item-background {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 300px;
		height: 300px;
		background: radial-gradient(circle, var(--item-color) 0%, transparent 70%);
		opacity: 0.03;
		filter: blur(60px);
		z-index: -1;
		transition: all 0.5s ease;
	}

	.roadmap-content:hover .item-background {
		opacity: 0.08;
		transform: translate(-50%, -50%) scale(1.2);
	}

	@media (max-width: 768px) {
		.roadmap-container {
			margin: 0 1rem;
		}

		.roadmap-item {
			padding-left: 4rem;
			margin-bottom: 3rem;
		}

		.timeline-line {
			left: 1.5rem;
		}

		.timeline-dot {
			left: -0.5rem;
		}

		.dot-inner {
			width: 2.5rem;
			height: 2.5rem;
			font-size: 1rem;
		}

		.roadmap-content {
			padding: 2rem 1.5rem;
		}

		h3 {
			font-size: 1.5rem;
		}

		.roadmap-header {
			flex-direction: column;
			align-items: flex-start;
		}
	}
</style>
