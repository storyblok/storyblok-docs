---
title: Add a Collaborator
---

You can set some of the fields available in the collaborator object, below we only list the properties in the example and the possible required fields.

| Property | Description |
|---|---|
| `collaborator` | The [collaborator object](#core-resources/collaborators/the-collaborator-object) |
| `email` | Email that will be used in the space interface for collaborator or collaborator SSO ID **required** |
| `role` | the role name of the collaborator. could be admin, editor or set to a role`id`. For custom roles, you need to set `role_id` for the role and set role to `multi` if you have more than one custom role **required** |
| `space_id` | Numeric id of the collaborator space **required** |
| `space_role_id` | Numeric id connected with a role, usually an array of `ids` with more than one role  **required** |
| `space_role_ids` | An array of numeric `ids` for multiple roles in a space for a collaborator |
| `permissions` | Permissions for a collaborator, usually is set to `can_subscribe` for a collaborator. |
| `allow_multiple_roles_creation` | Boolean value, if `true` you can create multiple roles for a collaborator |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/collaborators/" httpMethod="POST" :requestObject='{"email":"you@email.com","space_role_id":18705}}'></RequestExample>

You will receive a fully loaded [collaborator object](#core-resources/collaborators/the-collaborator-object) as response.

