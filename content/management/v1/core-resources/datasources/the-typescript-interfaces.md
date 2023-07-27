---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIDataSources
 * @description Storyblok Content Management API Data Source Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/datasources/datasources
 *
 **/
export interface ISbContentMAPIDataSources {
  datasource: {
    id?: number;
    name?: string;
    slug?: string;
    dimensions?: Dimension[];
  };
}

/**
 * @interface ISbRetrieveMultipleDataSourcesParams
 * @description Storyblok Content Management API Data Source Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/datasources/retrieve-multiple-datasources
 **/
export interface ISbRetrieveMultipleDataSourcesParams {
  search?: string;
  by_ids?: number[];
}

type Dimension = {
  id: number;
  name: string;
  entry_value: string;
  datasource_id: number;
  created_at: string;
  updated_at: string;
};

// Aliases
export type DataSources = ISbContentMAPIDataSources;
export type GetMultipleDataSources = ISbRetrieveMultipleDataSourcesParams;
```

;examplearea

Example on how use the <strong>DataSources'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require("storyblok-js-client");
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from "storyblok-js-client/dist/types/interfaces";
import {
  DataSources,
  GetMultipleDataSources
} from "storyblok-js-client/dist/types/MAPIInterfaces/MAPIDataSources";

// POST, PUT
const payload: ISbP2Params<DataSources> = {
  datasource: {
    name: "My Data Source",
    slug: "my-data-source",
    dimensions: [
      {
        name: "My Dimension",
        entry_value: "my-dimension",
        datasource_id: 123
      }
    ]
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/datasources/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
const params: ISbGetParams<GetMultipleDataSources> = {
  search: "My Data Source"
};

StoryblokClient.get("spaces/<YOUR-SPACE-ID>/datasources/", params)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
