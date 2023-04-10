---
title: Update a Collaborator Roles and Permissions
---

| Property | Description |
|---|---|
| `collaborator` | The [collaborator object](#core-resources/collaborators/the-collaborator-object) |
| `id` | The collaborator `id` |
| `role` | the role name of the collaborator. Could be admin, editor or set to a role`id`. For custom roles, you need to set `role_id` for the role and set role to `multi` if you have more than one custom role **required** |
| `space_role_id` | Numeric id connected with a role, usually an array of `ids` with more than one role  **required** |
| `permissions` | Permissions for a collaborator, usually is set to `can_subscribe` for a collaborator or empty array. |
| `allow_multiple_roles_creation` | Boolean value, if `true` allows for creating multiple roles using `ids` for a collaborator

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/collaborators/2362" httpMethod="PUT" :requestObject='{"collaborator":{"role":49707,"space_role_id":49707,"allow_multiple_roles_creation":true}}'></RequestExample>
