---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIWorkflowStages
 * @description Storyblok Content Management API Workflow Stage Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/workflow-stages/intro
 */
export interface ISbContentMAPIWorkflowStages {
  workflow_stage: {
    id?: number;
    after_publish_id?: number;
    allow_publish?: boolean;
    is_default?: boolean;
    position?: number;
    allow_all_stages?: boolean;
    allow_all_users?: boolean;
    name: string | "";
    color?: string;
    user_ids?: number[];
    space_role_ids?: number[];
    workflow_stage_ids?: number[];
  };
}

export type WorkflowStages = ISbContentMAPIWorkflowStages;
```

;examplearea

Example on how use the <strong>Workflow Stages</strong> interfaces with the Storyblok Client

```typescript
import StoryblokClient from "storyblok-js-client";
// Import the interfaces
import { ISbP2Params } from "storyblok-js-client/dist/types/interfaces";
import { WorkflowStages } from "storyblok-js-client/dist/types/MAPIInterfaces/MAPIWorkflowStages";

// POST, PUT
const payload: ISbP2Params<WorkflowStages> = {
  workflow_stage: {
    id: 1234,
    is_default: true,
    allow_all_stages: true,
    allow_all_users: true,
    name: "draft"
  }
};

Storyblok.post("spaces/<YOUR-SPACE-ID>/workflow_stages/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET

Storyblok.get("spaces/<YOUR-SPACE-ID>/workflow_stages/")
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
