---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbAsset
 * @description Storyblok Content Management API Asset Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/assets/assets
 *
 **/
export interface ISbAsset {
	id: number
	filename?: string
	space_id?: number
	created_at?: string
	updated_at?: string
	deleted_at?: string
	file?: object
	asset_folder_id?: number
	short_filename?: string
	content_type?: string
	content_length?: number
	is_private?: boolean
  validate_upload?: "1" | string
}

// Aliases
export type Asset = ISbAsset
```

;examplearea

Example on how use the <strong>Asset's</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
import { ISbP2Params } from 'storyblok-js-client/dist/types/interfaces';
import { Asset } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIAssets';

// POST, PUT
const payload:ISbP2Params<Asset> = {
  id: 123,
  filename: 'my-image.jpg',
  asset_folder_id: 123
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/assets/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
StoryblokClient.get('spaces/<YOUR-SPACE-ID>/assets/123')
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```