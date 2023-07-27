---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIPipelines
 * @description Storyblok Content Management API Pipeline Interface
 * @reference https://www.storyblok.com/docs/api/managemen#core-resources/pipelines/object
 */
export interface ISbContentMAPIPipelines {
  branch: {
    id?: number;
    name: string;
    space_id?: number;
    deleted_at?: null;
    created_at?: string;
    updated_at?: string;
    source_id?: number;
    deployed_at?: string;
    url?: string;
    position?: number;
  };
}

/**
 * Interface for the Pipeline Deployments API
 * @interface ISbContentMAPIPipelineDeployments
 * @description Storyblok Content Management API Pipeline Deployments Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/pipelines/pipeline-deployment
 */
export interface ISbContentMAPIPipelineDeployments {
  branch_id: number;
  release_uuids: string[];
}

// Aliases
export type Pipelines = ISbContentMAPIPipelines;
export type PipelineDeployments = ISbContentMAPIPipelineDeployments;
```

;examplearea

```typescript
const StoryblokClient = require("storyblok-js-client");
import { ISbP2Params } from "storyblok-js-client/dist/types/interfaces";
import {
  Pipeline,
  PipelineDeployments
} from "storyblok-js-client/dist/types/MAPIInterfaces/ISbContentMAPIPipelines";

// POST, PUT
const payload: ISbP2Params<Pipeline> = {
  branch: {
    name: "Summer Special",
    source_id: null,
    url: "http://new-amazing-url.com"
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/branches/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
StoryblokClient.get("spaces/<YOUR-SPACE-ID>/branches/123")
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// Pipeline deployment

const deploymentPayload: ISbP2Params<PipelineDeployments> = {
  branch_id: 1, // Id of the pipeline to be deployed
  release_uuids: ["1234-4567", "1234-4568"]
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/deployments/", deploymentPayload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
