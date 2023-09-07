/** @typedef {import('vue-docgen-api').ParamTag} ParamTag */

/** @type {import('vue-docgen-cli').Templates['component']} */
module.exports = function component( renderedUsage, doc, config, componentRelativePath ) {
	const { displayName, description, docsBlocks, tags } = doc;
	const { author, since, version } = /** @type {Record<string, ParamTag[]>} */ ( tags || {} );

	const frontMatter = [ 'outline: deep' ];
	const componentName = displayName.slice( 3 );

	// Don't include a usage header if there are no properties, methods, events, or
	// slots to document
	const usageHeader = (
		renderedUsage.props !== '' ||
		renderedUsage.methods !== '' ||
		renderedUsage.events !== '' ||
		renderedUsage.slots !== ''
	) ? '## Usage' : '';

	// Include a warning if the component is still in development
	const devWarning = componentRelativePath.includes( 'components-wip/' ) ?
		`
::: warning
This component is still under development. It is not yet available in releases of Codex.
:::
		` : '';

	// If there's a CSS-only version, split that part of the docs out so we can add it after
	// the Vue usage info.
	const cssOnlyHeading = '## CSS-only version';
	let hasCssOnlyVersion = false;
	let vueDocs = '';
	let cssOnlyDocs = '';
	if ( docsBlocks && docsBlocks.length > 0 ) {
		hasCssOnlyVersion = docsBlocks[ 0 ].includes( cssOnlyHeading );
		if ( hasCssOnlyVersion ) {
			const splitDocs = docsBlocks[ 0 ].split( cssOnlyHeading );
			vueDocs = splitDocs[ 0 ];
			cssOnlyDocs = cssOnlyHeading + splitDocs[ 1 ];
		}
	}

	/* eslint-disable @typescript-eslint/restrict-template-expressions */
	return `
---
# This file is automatically generated; do not edit it directly.
# Edit component demos in packages/codex-docs/component-demos.
${frontMatter.join( '\n' )}
---

# ${componentName}

${devWarning}

${description || ''}

${author ? author.map( ( a ) => `**Author**: ${a.description}` ).join( '\n' ) : ''}
${since ? `**Since** ${since[ 0 ].description}` : ''}
${version ? `**Version** ${version[ 0 ].description}` : ''}

${vueDocs || ( docsBlocks ? docsBlocks.join( '\n---\n' ) : '' )}

${usageHeader}

${renderedUsage.props.replace( '## Props', '### Props' )}
${renderedUsage.methods.replace( '## Methods', '### Methods' )}
${renderedUsage.events.replace( '## Events', '### Events' )}
${renderedUsage.slots.replace( '## Slots', '### Slots' )}

${cssOnlyDocs || ''}
`;
};
