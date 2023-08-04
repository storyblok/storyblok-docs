---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIApprovals
 * @description This interface is generated from the API endpoint for approvals
 * @reference https://www.storyblok.com/docs/api/management#core-resources/approvals/approvals
 */
export interface ISbContentMAPIApprovals {
  approval: {
    id?: number;
    status?: string;
    story_id?: number;
    approver_id?: number;
  };
}

/**
 * @interface ISbContentMAPIReleaseApprovals
 * @description This interface is generated from the API endpoint for release approvals
 * @reference https://www.storyblok.com/docs/api/management#core-resources/approvals/release-approvals
 */
export interface ISbContentMAPIReleaseApprovals
  extends ISbContentMAPIApprovals {
  release_id: number;
}

/**
 * @interface ISbRetrieveMultipleApprovalsParams
 * @description This interface is generated from the API endpoint for retrieving multiple approvals
 * @reference https://www.storyblok.com/docs/api/management/v1/#core-resources/approvals/retrieve-multiple-approvals
 */
export interface ISbRetrieveMultipleApprovalsParams {
  approver?: number;
}

// Aliases
export type Approvals = ISbContentMAPIApprovals;
export type ReleaseApprovals = ISbContentMAPIReleaseApprovals;
export type GetMultipleApprovals = ISbRetrieveMultipleApprovalsParams;
```

;examplearea

Example on how use the <strong>Approvals's</strong> interfaces with the Storyblok Client

```typescript
import StoryblokClient from "storyblok-js-client";
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from "storyblok-js-client/dist/types/interfaces";
import {
  Approvals,
  GetMultipleApprovals
} from "storyblok-js-client/dist/types/MAPIInterfaces/MAPIApprovals";

// POST, PUT
const payload: ISbP2Params<Approvals> = {
  approval: {
    status: "pending",
    story_id: 123,
    approver_id: 456
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/approvals/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
const payload: ISbGetParams<GetMultipleApprovals> = {
  approver: 123
};

StoryblokClient.get("spaces/<YOUR-SPACE-ID>/approvals/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
