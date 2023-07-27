---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPISpaceRoles
 * @description Storyblok Content Management API Space Roles Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/space-roles/the-space-role-object
 */
export interface ISbContentMAPISpaceRoles {
  id?: number;
  role?: string;
  access_tasks?: boolean;
  allowed_paths?: number[];
  resolved_allowed_paths?: string[];
  field_permissions?: string[];
  permissions?: TPermissions[];
}

type TPermissions = {
  publish_stories: boolean;
  save_stories: boolean;
  edit_datasources: boolean;
  access_commerce: boolean;
  edit_story_slug: boolean;
  move_story: boolean;
  view_composer: boolean;
};

/**
 * @interface ISbContentMAPISpaceRolesCreate
 * @description Storyblok Content Management API Space Roles Create Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/space-roles/create-space-role
 */
export interface ISbContentMAPISpaceRolesCreate {
  space_role: ISbContentMAPISpaceRoles;
}

/**
 * @interface ISbContentMAPISpaceRolesUpdate
 * @description Storyblok Content Management API Space Roles Update Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/space-roles/update-space-role
 */
export interface ISbContentMAPISpaceRolesUpdate {
  space_role: ISbContentMAPISpaceRoles;
}

// Aliases
export type SpaceRoles = ISbContentMAPISpaceRoles;

export type SpaceRolesCreate = ISbContentMAPISpaceRolesCreate;
export type SpaceRolesUpdate = ISbContentMAPISpaceRolesUpdate;
```

;examplearea

Example on how use the <strong>Space Roles'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require("storyblok-js-client");
// Import the interfaces
import { ISbP2Params } from "storyblok-js-client/dist/types/interfaces";
import { SpaceRolesCreate } from "storyblok-js-client/dist/types/MAPIInterfaces/MAPIRoles";

// POST, PUT
const payload: ISbP2Params<SpaceRolesCreate> = {
  space_role: {
    role: "My Space Role Name",
    access_tasks: true,
    allowed_paths: [1, 2, 3],
    field_permissions: ["edit_components", "edit_datasources"],
    permissions: {
      publish_stories: true,
      save_stories: true,
      edit_datasources: true,
      access_commerce: true,
      edit_story_slug: true,
      move_story: true,
      view_composer: true
    }
  }
};

StoryblokClient.post("spaces/<YOUR-SPACE-ID>/space_roles/", payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
