---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIReleases
 * @description Storyblok Content Management API Releases Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/releases/intro
 */
export interface ISbContentMAPIReleases {
  release: {
    name: string;
    id?: number;
    release_at?: string;
    released?: boolean;
    uuid?: string;
    timezone?: string;
    branches_to_deploy?: string[] | number[];
    created_at?: string;
    owner_id?: number;
  };
  do_release?: boolean;
}

// Aliases
export type Releases = ISbContentMAPIReleases;
```

;examplearea

Example on how use the <strong>Releases</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require("storyblok-js-client");
import { ISbP2Params } from "storyblok-js-client/dist/types/interfaces";
import { Releases } from "storyblok-js-client/dist/types/MAPIInterfaces/ISbContentMAPIReleases";

// POST, PUT
const payload: ISbP2Params<Releases> = {
  release: {
    name: "Summer Special",
    release_at: "2025-01-01 01:01",
    branches_to_deploy: [123, 456]
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/releases/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
StoryblokClient.get("spaces/<YOUR-SPACE-ID>/releases/123")
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
