---
title: The Typescript Interfaces
---

```typescript
type TUser = {
	user: {
		id?: number
		firstname?: string
		lastname?: string
		alt_email?: string
		avatar?: string
		userid?: string
		friendly_name?: string
	}
}

/**
 * @interface ISbContentMAPICollaboratorsCollection
 * @description This interface is generated from the API endpoint for collaborators
 * @reference https://www.storyblok.com/docs/api/management#core-resources/collaborators/the-collaborator-object
 */
export interface ISbContentMAPICollaboratorsCollection {
  collaborators: ISbContentMAPICollaborator[]
}

export interface ISbContentMAPICollaborator {
  user?: TUser
  role?: string
  user_id?: number
  permissions?: string[]
  allowed_path?: string
  field_permissions?: string
  id?: number
  space_role_id?: string
  invitation?: string
  space_role_ids?: any[]
  space_id?: number
}

/**
 * @interface ISbContentMAPICollaboratorAdd
 * @description This interface is generated from the API endpoint for collaborators
 * @reference https://www.storyblok.com/docs/api/management#core-resources/collaborators/add-collaborator
 */
export interface ISbContentMAPICollaboratorAdd {
	collaborator?: ISbContentMAPICollaborator
	email?: string
	role?: string
	space_id?: number
	space_role_id?: number
	space_role_ids?: number[]
	permissions?: string[]
	allow_multiple_roles_creation?: boolean
}

/**
 * @interface ISbContentMAPICollaboratorAddWithSSO
 * @description This interface is generated from the API endpoint for collaborators
 * @reference https://www.storyblok.com/docs/api/management#core-resources/collaborators/add-users-with-sso
 */
export interface ISbContentMAPICollaboratorAddWithSSO {
	sso_id?: string
	email?: string
	role?: string
	space_role_id?: number
}


// Aliases
export type Collaborator = ISbContentMAPICollaborator
export type Collaborators = ISbContentMAPICollaboratorsCollection
export type AddCollaborator = ISbContentMAPICollaboratorAdd
export type AddCollaboratorWithSSO = ISbContentMAPICollaboratorAddWithSSO
```

;examplearea

Example on how use the <strong>Collaborator's</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
} from 'storyblok-js-client/dist/types/interfaces';
import {
  Collaborator,
  AddCollaborator,
} from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIApprovals';

// POST, PUT
const collaborator: Collaborator = {
  user: {
    id: 123456,
    firstname: 'John',
    lastname: 'Doe',
    alt_email: 'john_doe@storyblok.com',
    avatar: 'https://a.storyblok.com/f/123456/100x100/123456.jpg',
    userid: 'john.doe',
    friendly_name: 'John Doe'
  },
  role: 'editor',
  user_id: 123456,
  permissions: ['read', 'write'],
  allowed_path: '/*',
  id: 123456,
}

const payload: ISbP2Params<AddCollaborator> = {
  collaborator: collaborator,
  space_id: 123456,
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/collaborators', payload)
  .then(response => console.log(response))
  .catch(error => console.log(error))

```
