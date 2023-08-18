---
title: Add a user with SSO
---

Similar to `add-collaborator`. You can add a user with SSO by using the `sso_id` property. The `sso_id` is the unique identifier of the user in your system. You can use this identifier to identify the user in Storyblok. 

| Property | Description |
|---|---|
| `sso_id` | The unique identifier of the user in your system, can be an email **required** |
| `email` | Email that will be used in the space interface for collaborator or collaborator SSO ID **required** |
| `role` | Role name of the collaborator, could be admin, editor or custom roles, which is set to `id` and set to `multi` if you have more than one role **required** |
| `space_role_id` | Numeric id of the space role connected with collaborators, usually `null` with more than one collaborator  **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/collaborators/" httpMethod="POST" :requestObject='{"collaborator":{"sso_id":"123456789","role":"editor","space_role_id":18}}'></RequestExample>

Example object

```json
{
   "collaborator":{
      "user":null,
      "role":"editor",
      "user_id":null,
      "permissions":[
         
      ],
      "allowed_path":"",
      "field_permissions":"",
      "id":110236,
      "space_role_id":35053,
      "invitation":{
         "email":{
            "SSO Id"
         },
         "expires_at":"2022-09-29T00:51:35.074Z"
      },
      "space_role_ids":[
         // ...
      ],
      "space_id":175323
   }
}

