---
title: Update a Collaborator Roles and Permissions
---

| Property | Description |
|---|---|
| `role_name` | This can be a string with `editor` and `admin` for collaborators with single roles. It can also be `multi` if the user has multiple custom roles **required** |
| `role_id` | Numeric id of the space role connected with collaborators, can be an array **required** |
| `permissions` | An array of strings with the permissions the user should have in the space. it can be `["can_subscribe"]` to allow managing subscription or [] |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/collaborators/2362" httpMethod="PUT" :requestObject='{"role_name":"editor","role_id":18,"permissions":["can_subscribe"]}'></RequestExample>