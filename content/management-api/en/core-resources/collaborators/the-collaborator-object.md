---
category: Core Resources
title: The Collaborator Object
position: 1510
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `role` | Role of the user (`admin`, `editor`, `advanced`) |
| `permissions` | List of permissions in space |
| `field_permissions` | List of field permissions in space |
| `space_role_id` | Connected space role identifier |
| `user` | User object |
| `space_role` | Space Role object |

;examplearea

Example Object

```json
{
  "collaborator": {
    "id": 285,
    "role": "editor",
    "permissions": [ ],
    "allowed_path": "",
    "field_permissions": "",
    "space_role_id": null,
    "user": {
      "userid": "collaborator@storyblok.com",
      "email": "collaborator@storyblok.com",
      "organization": null,
      "username": null,
      "use_username": false,
      "alt_email": null,
      "firstname": null,
      "lastname": null,
      "phone": null,
      "id": 1075,
      "login_strategy": "password",
      "created_at": "2018-11-10T15:33:13.678Z",
      "org_role": null,
      "has_org": false
    },
    "space_role": null
  }
}
```