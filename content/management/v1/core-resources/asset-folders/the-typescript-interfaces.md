---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbAssetFolder
 * @description Storyblok Content Management API Asset Folder Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/asset-folders/asset-folders
 *
 **/
export interface ISbAssetFolder {
	asset_folder: {
		id?: number
		name?: string
		parent_id?: number
	}
}

// Aliases
export type AssetFolder = ISbAssetFolder
```

;examplearea

Example on how use the <strong>Asset's</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
import { ISbP2Params } from 'storyblok-js-client/dist/types/interfaces';
import { AssetFolder } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIAssets';

const payload:ISbP2Params<AssetFolder> = {
  asset_folder: {
		id: 123,
		name: 'My Asset Folder',
		parent_id: 123
	}
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/asset_folders/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```