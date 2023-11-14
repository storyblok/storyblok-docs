---
title: The Link Object
---

The Link Object has various details pertaining to a story or folder (generally, a content entry). These details include the story or folder's unique identifier (`uuid`), the `slug` representing the full path of the content entry (e.g., `folder1/folder2/story`), a flag indicating whether the content entry is a folder or a story (`is_folder`), the numeric identifier of its parent folder (`parent_id`), and additional information outlined in the table below. These details prove invaluable for constructing lists of links, such as for generating a sitemap, or for retrieving the hierarchical structure of links, particularly when building a static site using the Static Site Generator approach.

The significance of the `version` field lies in its ability to denote whether a story associated with the link has been published at least once. A `true` value indicates that the story has been published, even if it is currently in draft status. In other words, a story in draft with a published history will have the `version` field set to `published` in the link object.

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
| `is_startpage`  | Is this story a startpage (true/false) |

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
