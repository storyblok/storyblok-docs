---
category: Core Resources
title: The Story Object
position: 110
---

This is an object representing your content entry. One Story object can be of a specific type, so called content types and is able to contain components. You define the fields and nestability of your content types to achieve your content structure. You can use this object to build up your entities when migrating or importing content.

| Property            | Description          |
|---------------------|----------------------|
| `id`                  | Numeric id | 
| `uuid`                | Generated uuid string | 
| `name`                | Given name  | 
| `slug`                | Given slug / path | 
| `created_at`          | Creation date (automatically) | 
| `published_at`        | Latest publishing date (automatically) | 
| `first_published_at`  | First publishing date (automatically) | 
| `full_slug`           | Combined slug with all parent folders | 
| `release_id`          | Id of your content stage (default: null) | 
| `lang`                | Defined language (default: "default") | 
| `content`             | Your defined custom content body object | 
| `position`            | Position in folder | 
| `is_startpage`        | Is startpage of current folder (true/false) | 
| `parent_id`           | Parent folder id | 
| `group_id`            | Alternates group id (uuid string) | 
| `alternates`          | Array of alternate objects | 

// TODO: document all properties

;examplearea

Example Object 

```json
{
  "story": {
    "id": 369689,
    "uuid": "039508c6-e9fa-42b5-b952-c7d96ab6099d",
    "name": "My third post",
    "slug": "my-third-post",
    "created_at": "2018-10-29T10:27:52.802Z",
    "updated_at": "2018-10-30T12:24:07.499Z",
    "published_at": "2018-08-07T09:40:13.802Z",
    "first_published_at": "2018-08-07T09:40:13.802Z",
    "imported_at": null,
    // group id defines the referenced alternates
    "group_id": "fb33b858-277f-4690-81fb-e0a080bd39ac",
    // resolved alternates by group_id
    "alternates": [],
    "sort_by_date": null,
    "tag_list": [],
    "is_folder": false,
    "content": {
      "_uid": "98cccd01-f807-4494-996d-c6b0de2045a5",
      "component": "your_content_type"
      // and fields you define yourself are in here
    },
    "publish_at": null,
    "expire_at": null,
    "path": null,
    "default_root": null,
    "disble_fe_editor": false,
    // parent folder id
    "parent_id": 369683,
    // resolved parent folder information
    "parent": {
      "id": 369683,
      "slug": "posts",
      "name": "Posts",
      "disble_fe_editor": true,
      "uuid": "dcfcc350-e63e-4232-8dcb-ba4b8e70799d"
    },
    "full_slug": "posts/my-third-post", // automatically generated
    // resolved full_slug parts
    "breadcrumbs": [{
      "id": 369683,
      "name": "Posts",
      "parent_id": 0,
      "disble_fe_editor": true
    }],
    "published": false,
    "unpublished_changes": true,
    "is_startpage": false,
    "meta_data": null,
    "pinned": false,
    "preview_token": {
      "token": "279395174a25be38b702f9ec90d08a960e1a5a84",
      "timestamp": "1545530576"
    },
    "last_author": {
      "id": 39821,
      "userid": "storyblok"
    }
  }
}
```