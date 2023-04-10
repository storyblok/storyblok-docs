---
title: The Collaborator Object
---

This is an object representing collaborators in a space. Some of the properties can be read only and others can be managed by the space owner using the API. You can define the properties of a collaborator such as roles and permissions. 

| Property            | Description          |
|---------------------|----------------------|
| `id`                  | Numeric id of collaborator | 
| `firstname`                | First name of collaborator | 
| `lastname`                 | Last name of collaborator |
| `alt_email`                   | Email of collaborator |
| `avatar`                     | Avatar of collaborator usually an image |
| `userid`                     | User id of collaborator |
| `friendly_name`               | Friendly name of collaborator |
| `role`                       | Role of the collaborator, could be admin, editor or custom roles |
| `user_id`                    | User/numeric id of collaborator |
| `permissions`               | Allow specific actions for collaborator in interface and add the permission as array of strings |
| `allowed_paths`            | Story ids the user should have access to (acts as whitelist). If no item is selected the user has rights to access all content items. |
| `field_permissions`        | Hide specific fields for this user with an array of strings with the schema |
| `space_role_id`            | Numeric id of the space role connected with collaborators|
| `space_id`                  | Numeric id of the collaborator space |
| `space_role_ids`           | Array of space role ids |

You can learn more about permissions and roles for collaborators in the [Space Roles](#core-resources/space-roles/the-space-role-object) endpoint.

;examplearea

Example Object 

```json
{
   "collaborators":[
      {
         "user":{
            "id":262115,
            "firstname":"Marve",
            "lastname":"Priscy",
            "alt_email":null,
            "avatar":"avatars/115866/5fgecfcb64/mayve.jpeg",
            "userid":"mayve@email.com",
            "friendly_name":"Marve Priscy"
         },
         "role":"49708",
         "user_id":262115,
         "permissions":["can_subscribe"],
         "allowed_path":"",
         "field_permissions":"",
         "id":236290,
         "space_role_id":"49708",
         "invitation":null,
         "space_role_ids":[],
         "space_id":866112
      }
   ]
}
```
