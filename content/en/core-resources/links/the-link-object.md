---
category: Core Resources
title: The Link Object
position: 420
---

You can access a draft or published version of your links by providing the `version` parameter and the correct token type (eg. preview for draft, public for published).

| Property            | Description          |
|---------------------|----------------------|
| `id`            | Numeric id of the referenced content entry |
| `slug`          | The `full_slug` of the content entry |
| `name`          | Given name of the content entry |
| `is_folder`     | Is this content entry a folder (true/false) |
| `parent_id`     | Parent folder numeric id |
| `published`     | Is this story published (true/false) |
| `position`      | Numeric position value of the content entry |
| `uuid`          | The `uuid` of the content entry |
| `is_startpage`  | IS this story a startpage (true/false) |

;examplearea

Example Object

```json
  ...
  {
    "id": 107350,
    "slug": "posts/my-third-post",
    "name": "My third post",
    "is_folder": false,
    "parent_id": 107348,
    "published": true,
    "position": -20,
    "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
    "is_startpage": false
  }
  ...
```