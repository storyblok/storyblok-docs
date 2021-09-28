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
| `sort_by_date`        | null (What type and What does it do?) | 
| `tag_list`            | Array of tag objects | 
| `meta_data`           | What does it do? What type is it? | 
| `path`                | What does it do? What type is it? | 

;examplearea

Example Object 

```json
{
    "data": {
      "story": {
        "name": "My third post",
        "created_at": "2018-04-24T11:57:29.302Z",
        "published_at": "2018-08-07T09:40:13.802Z",
        "id": 72882536,
        "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
        "content": {
          "component": "your_content_type",
          // and fields you define yourself are in here
         },
        "slug": "my-third-post",
        "full_slug": "posts/my-third-post",
        "sort_by_date": null,
        "position": 0,
        "tag_list": [],
        "is_startpage": false,
        "parent_id": 72882535,
        "meta_data": null,
        "group_id": "4add5c88-8d9c-4480-bfcf-63016c4c463e",
        "first_published_at": "2018-08-07T09:40:13.802Z",
        "release_id": null,
        "lang": "default",
        "path": null,
        "alternates": [],
        "default_full_slug": null,
        "translated_slugs": null
      },
    "cv": 1632799493,
    "rels": [],
    "links": []
  }
}
```
