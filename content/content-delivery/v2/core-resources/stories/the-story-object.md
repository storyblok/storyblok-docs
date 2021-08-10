---
title: The Story Object
---

This is an object representing your content entry. One Story object can be of a specific type, so called content types and is able to contain components. You define the fields and nestability of your content types to achieve your content structure. To learn how to build a basic blog you can checkout our [content building tutorial](https://www.storyblok.com/tp/how-to-create-a-blog-content-structure).

| Property            | Description          |
|---------------------|----------------------|
| `id`                  | Numeric id | 
| `uuid`                | Generated uuid string | 
| `name`                | The name you give this story | 
| `slug`                | Gthe slug / path you give this story |
| `full_slug`           | Combined parent folder and current slug | 
| `default_full_slug`   | Contains the full slug of the default language if the app Translatable Slugs is installed | 
| `created_at`          | Creation date (Format: `YYYY-mm-dd HH:MM`) | 
| `published_at`        | Latest publishing date (Format: `YYYY-mm-dd HH:MM`) | 
| `first_published_at`  | First publishing date (Format: `YYYY-mm-dd HH:MM`) | 
| `release_id`          | Id of your content stage (default: null) | 
| `lang`                | Defined language (default: "default") | 
| `content`             | Your defined custom content body object | 
| `position`            | Position in folder | 
| `is_startpage`        | Is startpage of current folder (true/false) | 
| `parent_id`           | Parent folder id | 
| `group_id`            | Alternates group id (uuid string) | 
| `alternates`          | Array of alternate objects | 
| `translated_slugs`    | Array of translated slugs. Only gets included if the translatable slug app is installed | 
| `links`               | Array of all resolved links if the `resolve_links` parameter is in use | 
| `rels`                | Array of all resolved stories if the `resolve_relations` parameter is in use |
| `rel_uuids`           | Array of the uuids of all the relations to resolve if the `resolve_relations` parameter is in use and if the limit of resolvable relations is hit |
| `link_uuids`          | Array of the uuids of all the links to resolve if the `resolve_links` parameter is in use and if the limit of resolvable links is hit |

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
    "default_full_slug": null,
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
    "translated_slugs": [
      {
        "path": "mein-beitrag",
        "name": "Mein Beitrag",
        "lang": "de"
      }
      // only gets included if the translatable slug app is installed
    ],
    "alternates": [
      {
        "id": 107381,
        "name": "Mein dritter Beitrag",
        "slug": "my-post-in-another-folder",
        "full_slug": "de/my-post-in-another-folder",
        "is_folder": false,
        "parent_id": 107356
      }
    ]
  }
}
```
