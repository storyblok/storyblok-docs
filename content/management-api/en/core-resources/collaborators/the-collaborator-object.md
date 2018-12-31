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
| `user` | Resolved User object |
| `space_role` | Resolved Space Role object |

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
    "user": { ... },
    "space_role": { ... } 
  }
}
```