---
title: Update a Space Role
---

| Property | Description |
|---|---|
| `space_role` | Your full [component object](#core-resources/space-roles/the-space-role-object) |
| `space_role[name]` | The space role name is **required** |
| `space_role[role]` | The space role role is **optional** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/space_roles/18" httpMethod="PUT" :requestObject='{"space_role":{"id":18,"role":"English Editor"}}'></RequestExample>

You will receive a [space role object](#core-resources/space-roles/the-space-role-object) as response.
