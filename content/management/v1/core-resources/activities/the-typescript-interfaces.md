---
title: The Typescript Interfaces
---

```typescript
/**
 * Interface for MAPI Activities
 * @interface ISbContentMAPIActivities
 * @description Storyblok Content Management API Activities Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/activities/activities
 */
export interface ISbContentMAPIActivities {
  activity: {
    id?: number;
    trackable_id?: number;
    trackable_type?: string;
    owner_id?: number;
    owner_type?: string;
    key?: string;
    parameters?: object;
    recipient_id?: number;
    recipient_type?: string;
    created_at?: string;
    updated_at?: string;
    space_id?: number;
  };
}

/**
 * @interface ISbRetrieveMultipleActivitiesParams
 * @description Storyblok Content Management API Activities Interface to retrieve multiple activities
 * @reference https://www.storyblok.com/docs/api/management/v1/#core-resources/activities/retrieve-multiple-activities
 */
export interface ISbRetrieveMultipleActivitiesParams {
  created_at_gte?: string;
  created_at_lte?: string;
}

// Alias for ISbContentMAPIActivities
export type Activities = ISbContentMAPIActivities;

// Alias for ISbRetrieveMultipleActivitiesParams
export type GetActivities = ISbRetrieveMultipleActivitiesParams;
```

;examplearea

Example on how use the <strong>Activities's</strong> interfaces with the Storyblok Client

```typescript
import StoryblokClient from "storyblok-js-client";
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from "storyblok-js-client/dist/types/interfaces";
import {
  Activities,
  GetActivities
} from "storyblok-js-client/dist/types/MAPIInterfaces/MAPIActivities";

// POST, PUT
const payload: ISbP2Params<Activities> = {
  activity: {
    trackable_id: 123,
    trackable_type: "story",
    key: "story.create",
    parameters: {
      name: "My Story"
    }
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/activities/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
const params: ISbGetParams<GetActivities> = {
  created_at_gte: "2018-11-10"
};

StoryblokClient.get("spaces/<YOUR-SPACE-ID>/activities/", params)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
