---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPISpaces
 * @description Storyblok Content Management API Space Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/spaces/the-space-object
 *
 */
export interface ISbContentMAPISpaces {
  [key: string]: object;
}

type TEnvironment = {
  name: string;
  location: string;
};

/**
 * @interface ISbContentMAPICreateSpace
 * @description Storyblok Content Management API Create Space Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/spaces/create-space
 */
export interface ISbContentMAPICreateSpace {
  [key: string]: {
    name: string;
    domain?: string;
    story_published_hook?: string;
    searchblok_id?: number;
    environments?: TEnvironment[];
  };
}

/**
 * @interface ISbContentMAPIUpdateSpace
 * @description Storyblok Content Management API Update Space Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/spaces/update-space
 */
export interface ISbContentMAPIUpdateSpace {
  [key: string]: {
    id?: number;
    name?: string;
    domain?: string;
    uniq_domain?: string;
    owner_id?: number;
    parent_id?: number;
    duplicatable?: boolean;
    default_root?: number;
    options?: {
      [key: string]: any;
    };
    routes?: {
      [key: string]: any;
    };
    story_published_hook?: string;
    searchblok_id?: number;
    environments?: TEnvironment[];
    billing_address?: {
      [key: string]: any;
    };
  };
}

/**
 * @interface ISbContentMAPIDuplicateSpace
 * @description Storyblok Content Management API Duplicate Space Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/spaces/duplicate-space
 */
export interface ISbContentMAPIDuplicateSpace {
  dup_id: number;
  [key: string]: ContentData | number;
}

type ContentData = {
  name: string;
  domain?: string;
  story_published_hook?: string;
  searchblok_id?: number;
  environments?: TEnvironment[];
};

// Aliases
export type Spaces = ISbContentMAPISpaces;

export type CreateSpace = ISbContentMAPICreateSpace;
export type UpdateSpace = ISbContentMAPIUpdateSpace;
export type DuplicateSpace = ISbContentMAPIDuplicateSpace;
```

;examplearea

Example on how use the <strong>Spaces'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require("storyblok-js-client");
// Import the interfaces
import { ISbP2Params } from "storyblok-js-client/dist/types/interfaces";
import { CreateSpace } from "storyblok-js-client/dist/types/MAPIInterfaces/MAPISpaces";

// POST, PUT
const payload: ISbP2Params<CreateSpace> = {
  space: {
    name: "My Space",
    domain: "my-space",
    story_published_hook: "https://www.storyblok.com"
  }
};

StoryblokClient.post("spaces/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
