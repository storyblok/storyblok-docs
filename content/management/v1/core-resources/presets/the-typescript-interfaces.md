---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIPresets
 * @description This interface is generated from the API endpoint for presets
 * @reference https://www.storyblok.com/docs/api/management#core-resources/presets/presets
 */
export interface ISbContentMAPIPresets {
	preset: {
		id?: number
		name: string
		preset?: object
		component_id?: number
		space_id?: number
		image?: string
		color?: string
		icon?: string
		description?: string
		isDefault?: boolean
		created_at?: string
		updated_at?: string
	}
}

/**
 * @interface ISbRetrieveMultiplePresetsParams
 * @description Storyblok Content Management API Preset Interface to retrieve multiple presets based in component id
 * @reference https://www.storyblok.com/docs/api/management/v1/#core-resources/presets/retrieve-multiple-presets
 */
export interface ISbRetrieveMultiplePresetsParams {
	component_id?: number
}

// Aliases for ISbContentMAPIPresets
export type Preset = ISbContentMAPIPresets

// Aliases for ISbRetrieveMultiplePresetsParams
export type GetPresets = ISbRetrieveMultiplePresetsParams

```

;examplearea

Example on how use the <strong>Presets</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from 'storyblok-js-client/dist/types/interfaces';
import { Preset, GetPresets } from 'storyblok-js-client/dist/types/MAPIInterfaces/ISbContentMAPIPresets';

// POST, PUT
const payload:ISbP2Params<Preset> = {
  preset: {
    name: 'new name',
		component_id: 1234,
		image?: 'http://image.com',
  }
}

Storyblok.post('spaces/<YOUR-SPACE-ID>/presets/<PRESET-ID>', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
const params:ISbGetParams<GetPresets> = {
  component_id: 1234
}

Storyblok.get('spaces/<YOUR-SPACE-ID>/presets/<PRESET-ID>', params)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
