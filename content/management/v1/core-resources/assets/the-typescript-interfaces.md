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
  validate_upload?: "1"
}

/**
 * @interface ISbRetrieveMultipleAssets
 * @description Storyblok Content Management API Retrieve Multiple Assets Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/assets/retrieve-multiple-assets
 * 
 */
export interface ISbRetrieveMultipleAssets {
	in_folder?: number
	sort_by?: 'created_at:asc' | 'created_at:desc' | 'updated_at:asc' | 'updated_at:desc' | 'short_filename:asc' | 'short_filename:desc'
	search?: string
	is_private?: '1'
}

// Aliases
export type Asset = ISbAsset
export type GetMultipleAssets = ISbRetrieveMultipleAssets
```

;examplearea

Example on how use the <strong>Asset's</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
import { ISbP2Params, ISbGetParams } from 'storyblok-js-client/dist/types/interfaces';
import { Asset, GetMultipleAssets } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIAssets';

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
const params:ISbGetParams<GetMultipleAssets> = {
  in_folder: 123,
  sort_by: 'created_at:asc',
  search: 'my-image.jpg',
  is_private: '1'
}

StoryblokClient.get('spaces/<YOUR-SPACE-ID>/assets/', params)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```