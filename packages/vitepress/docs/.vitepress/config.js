module.exports = {
	lang: 'en-US',
	title: 'Codex',
	description: 'Toolkit for building user interfaces within the Wikimedia Design System',

	themeConfig: {
		repo: 'wikimedia/design-codex',
		docsDir: 'vitepress/docs',
		lastUpdated: 'Last updated',

		sidebar: {
			'/': [
			 	{
					text: 'Introduction',
					children: [
						{ text: 'About', link: '/' },
						{ text: 'Getting started', link: '/introduction/getting-started' }
					]
				},
				{
					text: 'Contributing',
					children: [
						{ text: 'Guidelines', link: '/contributing/guidelines' },
						{ text: 'Designing components', link: '/contributing/designing-components' },
						{ text: 'Contributing code', link: '/contributing/contributing-code' },
						{ text: 'Working with TypeScript', link: '/contributing/typescript' }
					]
				},
				{
					text: 'Design Tokens',
					children: [
						{ text: 'Introduction', link: '/design-tokens/introduction' }
					]
				},
				{
					text: 'Components',
					children: [
						{ text: 'Button', link: '/components/button' },
						{ text: 'Radio', link: '/components/radio' }
					]
				},
				{
					text: 'ADRs',
					children: [
						{ text: 'Introduction', link: '/adrs/introduction' },
						{ text: 'ADR 1 - Design Tokens', link: '/adrs/01-adr-design-tokens' },
						{ text: 'ADR 2 - Demo tool', link: '/adrs/02-adr-demo-tool' },
						{ text: 'ADR 3 - String types in TypeScript', link: '/adrs/03-adr-string-types' }
					]
				}
			]
		}
	}
}
