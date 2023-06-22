---
title: Create a Space Role
---

| Property | Description |
|---|---|
| `space_role` | Your [space role object](#core-resources/space-roles/the-space-role-object) |
| `space_role[name]` | The space role name is **required** |
| `space_role[role]` | The space role role is **optional** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/space_roles/" httpMethod="POST" :requestObject='{"space_role":{"role":"English User"}}'></RequestExample>

You will receive a [space role object](#core-resources/space-roles/the-space-role-object) as response.
