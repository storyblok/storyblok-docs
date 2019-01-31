---
title: The Links Object
---

| Property            | Description          |
|---------------------|----------------------|
| Multiple `uuid`      | One key per Story, where the key is the `uuid` of the story |

;examplearea

Example Object

```json
{
  "links": {
    "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb": {
      "id": 107350,
      "slug": "posts/my-third-post",
      "name": "My third post",
      "is_folder": false,
      "parent_id": 107348,
      "published": true,
      "position": -20,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "is_startpage": false
    },
    ...
  }
}
```