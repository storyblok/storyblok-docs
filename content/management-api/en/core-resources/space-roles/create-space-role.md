---
category: Core Resources
title: Create a Space Role
position: 940
---. 

| Property | Description |
|---|---|
| `space_role` | Your full [component object](#core-resources/space-roles/the-space-role-object) |
| `space_role[name]` | The space role name is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/space_roles/" httpMethod="POST" :requestObject='{"space_role":{"role":"English User"}}'></RequestExample>

You will receive a [space role object](#core-resources/space-roles/the-space-role-object) as response.
