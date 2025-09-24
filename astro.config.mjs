// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Colliebot',
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://discord.collie.bot' },
				{ icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/collie.bot' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/Colliebot' }
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Templates', slug: 'guides/templates' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
