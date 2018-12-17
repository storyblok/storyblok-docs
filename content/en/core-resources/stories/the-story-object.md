---
category: Core Resources
title: The Story Object
position: 110
---

This is an object representing your content entry. One Story object can be of a specific type, so called content types and is able to contain components. You define the fields and nestability of your content types to achieve your content structure. To learn how to build a basic blog you can checkout our [content building tutorial](https://www.storyblok.com/tp/how-to-create-a-blog-content-structure).

| Property            | Description          |
|---------------------|----------------------|
| `id`                  | Numeric id | 
| `uuid`                | Generated uuid string | 
| `name`                | Given name  | 
| `slug`                | Given slug / path | 
| `full_slug`           | Combined slug with all parent folders | 
| `created_at`          | Creation date (automatically) | 
| `published_at`        | Latest publishing date (automatically) | 
| `first_published_at`  | First publishing date (automatically) | 
| `release_id`          | Id of your content stage (default: null) | 
| `lang`                | Defined language (default: "default") | 
| `content`             | Your defined custom content body object | 
| `position`            | Position in folder | 
| `is_startpage`        | Is startpage of current folder (true/false) | 
| `parent_id`           | Parent folder id | 
| `group_id`            | Alternates group id (uuid string) | 
| `alternates`          | Array of alternate objects | 

;examplearea

Example Object 

```json
{
  "story": {
    "id": 107350,
    "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
    "name": "My third post",
    "slug": "my-third-post",
    "full_slug": "posts/my-third-post",
    "created_at": "2018-04-24T11:57:29.302Z",
    "published_at": "2018-08-07T09:40:13.802Z",
    "first_published_at": "2018-08-07T09:40:13.802Z",
    "release_id": null,
    "lang": "default",
    "content": {
      "component": "your_content_type",
      // and fields you define yourself are in here
    },
    "position": -20,
    "is_startpage": false,
    "parent_id": 107348,
    "group_id": "4add5c88-8d9c-4480-bfcf-63016c4c463e",
    "alternates": [
      {
        "id": 107381,
        "name": "Mein dritter Beitrag",
        "slug": "my-third-post",
        "full_slug": "en/my-third-post",
        "is_folder": false,
        "parent_id": 107356
      }
    ]
  }
}
```