---
title: The Typescript Interfaces
---

```typescript
/**
 * @type TComponentGroup
 * @description Storyblok Content Management API Component Group Type
 * @reference https://www.storyblok.com/docs/api/management#core-resources/component-groups/the-component-group-object
 */
type TComponentGroup = {
	component_group: {
		id?: number
		name?: string
		uuid?: string
	}
}
/**
 * @interface ISbContentMAPIComponentGroup
 * @description Storyblok Content Management API Component Group Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/component-groups/component-groups
 *
 **/
export interface ISbContentMAPIComponentGroup {
	component_group: TComponentGroup
	name?: string
}

// Aliases
export type ComponentGroup = ISbContentMAPIComponentGroup
```

;examplearea

Example on how use the <strong>Component Groups'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
} from 'storyblok-js-client/dist/types/interfaces';
import {
	ComponentGroup,
} from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIComponentGroups';

const payload:ISbP2Params<ComponentGroup> = {
	component_group: {
		name: 'My Component Group Name',
	}
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/component_groups/', payload)
	.then(response => {
		// handle response
	})
	.catch(error => {
		// handle error
	});

```
