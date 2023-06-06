---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISBContentMAPIApprovals
 * @description This interface is generated from the API endpoint for approvals
 * @reference https://www.storyblok.com/docs/api/management#core-resources/approvals/approvals
 */
export interface ISBContentMAPIApprovals {
	approval: {
		id?: number
		status: string
		story_id: number
		approver_id: number
	}
}

export interface ISBContentMAPIReleaseApproval extends ISBContentMAPIApprovals {
	release_id: number
}

// Aliases
export type Approval = ISBContentMAPIApprovals
export type ReleaseApproval = ISBContentMAPIReleaseApproval
```

;examplearea

Example on how use the <strong>Approval's</strong> interface with the Storyblok Client

```javascript
const StoryblokClient = require('storyblok-js-client')
import { ISbCUDParams } from 'storyblok-js-client/dist/types/interfaces';
import { Approval } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIApprovals';

const payload:ISbCUDParams<Approval> = {
  approval: {
    status: 'pending',
    story_id: 123,
    approver_id: 456
  }
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/approvals/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```

Example Object

```json
{
  "approval": {
    "status": "pending",
    "story_id": 123,
    "approver_id": 456
  }
}
```