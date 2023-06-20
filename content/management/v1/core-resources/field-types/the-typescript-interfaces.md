---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIFieldTypes
 * @description This interface is generated from the API endpoint for field types
 * @reference https://www.storyblok.com/docs/api/management#core-resources/field-types/field-types
 */
export interface ISbContentMAPIFieldTypes {
	field_type: {
		id?: number
		name: string
		body?: string
		compiled_body?: string | ''
		space_ids?: number[]
	}
	publish?: boolean
}

/**
 * @interface ISbRetrieveMultipleFieldTypesParams
 * @description This interface is generated from the API endpoint for field types
 * @reference https://www.storyblok.com/docs/api/management/v1/#core-resources/field-types/retrieve-multiple-field-types
 */
export interface ISbRetrieveMultipleFieldTypesParams {
	field_type: {
		name: string
	}
}

// Aliases
export type FieldType = ISbContentMAPIFieldTypes
export type GetMultipleFieldTypes = ISbRetrieveMultipleFieldTypesParams
```

;examplearea

Example on how use the <strong>Field Types'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from 'storyblok-js-client/dist/types/interfaces';
import {
  FieldType,
  GetMultipleFieldTypes
} from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIFieldTypes';

// POST, PUT
const payload:ISbP2Params<FieldType> = {
  field_type: {
    name: 'My Field Type',
    body: '<p>My Field Type</p>'
  }
}

StoryblokClient
  .post('field_types', payload)
  .then(response => console.log(response))
  .catch(error => console.log(error))

// GET
const params:ISbGetParams<GetMultipleFieldTypes> = {
  field_type: {
    name: 'My Field Type'
  }
}

StoryblokClient
  .get('field_types', params)
  .then(response => console.log(response))
  .catch(error => console.log(error))
```