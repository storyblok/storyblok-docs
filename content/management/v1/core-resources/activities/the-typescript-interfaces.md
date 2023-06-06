---
title: The Typescript Interfaces
---

```typescript
/**
 * Interface for MAPI Activities
 * @interface ISBContentMAPIActivity
 * @description Storyblok Content Management API Activity Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/activities/activities
 */
export interface ISBContentMAPIActivity {
	activity: {
		id?: number
		trackable_id?: number
		trackable_type?: string
		owner_id?: number
		owner_type?: string
		key?: string
		parameters?: object
		recipient_id?: number
		recipient_type?: string
		created_at?: string
		updated_at?: string
		space_id?: number
	}
}

// Alias for ISBContentMAPIActivity
export type Activity = ISBContentMAPIActivity

```

;examplearea

Example on how use the <strong>Activity's</strong> interface with the Storyblok Client

```javascript
const StoryblokClient = require('storyblok-js-client')
import { ISbCUDParams } from 'storyblok-js-client/dist/types/interfaces';
import { Activity } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIActivities';

const payload:ISbCUDParams<Activity> = {
  activity: {
    trackable_id: 123,
    trackable_type: 'story',
    key: 'story.create',
    parameters: {
      name: 'My Story'
    }
  }
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/activities/', payload)
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
  "activity": {
    "id": 5405,
    "trackable_id": null,
    "trackable_type": null,
    "owner_id": null,
    "owner_type": null,
    "key": null,
    "parameters": {
    },
    "recipient_id": null,
    "recipient_type": null,
    "created_at": "2018-11-10T15:32:58.649Z",
    "updated_at": "2018-11-10T15:32:58.649Z",
    "space_id": 606
  }
}
```