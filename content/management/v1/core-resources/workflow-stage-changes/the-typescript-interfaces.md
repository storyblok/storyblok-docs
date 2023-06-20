---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIWorkflowStageChanges
 * @description Storyblok Content Management API Workflow Stage Changes Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/workflow-stage-changes/intro
 */
export interface ISbContentMAPIWorkflowStageChanges {
	workflow_stage_change: {
		id?: number
		user_id?: number
		created_at?: string
		workflow_stage_id?: number
		story_id?: number
		with_story?: number
	}
}

/**
 * @interface ISbRetrieveMultipleWorkflowStageChangesParams
 * @description Storyblok Content Management API Retrieve Multiple Workflow Stages Params Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/workflow-stage-changes/get-all
 */
export interface ISbRetrieveMultipleWorkflowStageChangesParams {
	with_story: number
}

// Aliases
export type WorkflowStageChanges = ISbContentMAPIWorkflowStageChanges
export type GetMultipleWorkflowStageChanges = ISbRetrieveMultipleWorkflowStageChangesParams
```

;examplearea

Example on how use the <strong>Workflow Stage Changes'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from 'storyblok-js-client/dist/types/interfaces';
import {
  WorkflowStageChanges,
  GetMultipleWorkflowStageChanges
} from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIWorkflowStageChanges';

// POST, PUT
const payload:ISbP2Params<WorkflowStageChanges> = {
  workflow_stage_change: {
    user_id: 123,
    workflow_stage_id: 123,
    story_id: 123,
    with_story: 1
  }
}

Storyblok.post('spaces/<YOUR-SPACE-ID>/workflow_stage_changes/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
const params:ISbGetParams<GetMultipleWorkflowStageChanges> = {
  with_story: 1
}

Storyblok.get('spaces/<YOUR-SPACE-ID>/workflow_stage_changes/', params)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```