/* eslint-disable no-unused-vars */
module.exports = function component(
	renderedUsage,
	doc,
	config,
	fileName,
	requiresMd,
	{ isSubComponent }
) {
/* eslint-enable no-unused-vars */
	const { displayName, description, docsBlocks, tags } = doc;
	const { author, since, version } = tags || {};

	const frontMatter = [ 'sidebarDepth: 3' ];
	const componentName = displayName.substring( 3 );

	return `
${`---
${'# This file is automatically generated; do not edit it directly.'}
${'# Edit component demos in packages/vitepress/component-demos.'}
${frontMatter.join( '\n' )}
---`}

${`# ${componentName}`}

${description}

${author ? author.map( ( a ) => `**Author**: ${a.description}` ) : ''}
${since ? `**Since** ${since[ 0 ].description}` : ''}
${version ? `**Version** ${version[ 0 ].description}` : ''}

${docsBlocks ? docsBlocks.join( '\n---\n' ) : ''}

${'## Usage'}

${renderedUsage.props.replace( '## Props', '### Props' )}
${renderedUsage.methods.replace( '## Methods', '### Methods' )}
${renderedUsage.events.replace( '## Events', '### Events' )}
${renderedUsage.slots.replace( '## Slots', '### Slots' )}
`;
};
