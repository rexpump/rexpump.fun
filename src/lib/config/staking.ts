export type StakePool = {
	slug: '2zilmoon' | 'amazing';
	title: string;
	kind: 'classic' | 'liquid';
	description: string;
	tags: string[];
	ctaLabel: string;
	href: string;
	pill: string;
};

export const STAKE_POOLS: StakePool[] = [
	{
		slug: '2zilmoon',
		title: '2ZilMoon Node',
		kind: 'classic',
		pill: 'Classic staking',
		description:
			'Non-custodial delegation with rewards in ZIL. A straightforward way to support our work.',
		tags: ['Non-custodial', 'Public pool', 'Community-run'],
		ctaLabel: 'Stake on 2ZilMoon',
		href: 'https://stakezil.com/?poolId=MHhDRGIw'
	},
	{
		slug: 'amazing',
		title: 'Amazing Pool',
		kind: 'liquid',
		pill: 'Liquid staking (aZIL)',
		description:
			'Liquid staking via aZIL, so you can keep participating in DeFi while delegating.',
		tags: ['Liquid token (aZIL)', 'Public pool', 'Community-run'],
		ctaLabel: 'Stake on Amazing Pool',
		href: 'https://stakezil.com/?poolId=MHgxZjBl'
	}
];

export const STAKE_COPY = {
	eyebrow: 'SUPPORT REXPUMP',
	heading: 'Stake ZIL to support the build',
	subhead:
		'We\'re building a meme launchpad on Zilliqa. Your delegation helps us continue development and contribute to a stronger ZIL ecosystem.',
	disclaimer:
		'Delegation happens directly with the selected pool. Rexpump does not custody funds.'
};
