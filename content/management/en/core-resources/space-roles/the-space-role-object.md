---
title: The Space Role Object
---

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `role` | Name used in the interface |
| `access_tasks` | Is allowed to access the Tasks menu item |
| `allowed_paths` | Story ids the user should have access to (acts as whitelist). If no item is selected the user has rights to access all content items. |
| `resolved_allowed_paths` | Resolved allowed_paths for displaying paths |
| `field_permissions` | Hide specific fields for this user with an array of strings with the schema: `"component_name.field_name"` |
| `permissions` | Allow specific actions in interface by adding the permission as array of strings |

### Possible Permissions

| Permission | Description |
|---|---|
| `publish_stories` | **Allow** publishing of content entries |
| `save_stories` | **Allow** editing and saving of content entries |
| `edit_datasources` | **Allow** editing and saving of datasources |
| `access_commerce` | **Allow** access to commerce app |
| `edit_story_slug` | **Deny** the change of slugs of content entries |
| `move_story` | **Deny** moving of content entries |
| `view_composer` | **Deny** access to visual composer |

;examplearea

Example Object

```json
{
  "space_role": {
    "id": 18,
    "role": "English User",
    "access_tasks": true,
    "resolved_allowed_paths": [

    ],
    "allowed_paths": [
      12412,
      51122
    ],
    "field_permissions": [

    ],
    "permissions": [

    ]
  }
}
```