---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbAssetFolders
 * @description Storyblok Content Management API Assets Folder Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/asset-folders/asset-folders
 *
 **/
export interface ISbAssetFolders {
  asset_folder: {
    id?: number;
    name?: string;
    parent_id?: number;
  };
}

// Aliases
export type AssetFolders = ISbAssetFolders;
```

;examplearea

Example on how use the <strong>Assets's</strong> interfaces with the Storyblok Client

```typescript
import StoryblokClient from "storyblok-js-client";
import { ISbP2Params } from "storyblok-js-client/dist/types/interfaces";
import { AssetFolders } from "storyblok-js-client/dist/types/MAPIInterfaces/MAPIAssets";

const payload: ISbP2Params<AssetFolders> = {
  asset_folder: {
    id: 123,
    name: "My Assets Folder",
    parent_id: 123
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/asset_folders/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
