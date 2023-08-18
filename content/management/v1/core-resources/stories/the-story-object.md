---
title: The Story Object
---

This is an object representing your content entry. One Story object can be of a specific type, so called content types and is able to contain components. You define the fields and nestability of your content types to achieve your content structure. You can use this object to build up your entities when migrating or importing content. You can set alternate versions of a story with Management API using the `group_id` of the story.

| Property            | Description          |
|---------------------|----------------------|
| `id`                  | Numeric id | 
| `uuid`                | Generated uuid string | 
| `name`                | The name you give this story | 
| `slug`                | The slug / path you give this story |
| `full_slug`           | Combined parent folder and current slug | 
| `path`                | Given real path, used in the preview editor | 
| `content`             | Your defined custom content object | 
| `release_id`          | Id of your content stage (default: null) | 
| `published`           | Is story published (true/false) |
| `unpublished_changes` | Story has unpublished changes; saved but not published (true/false) |
| `position`            | Position in folder | 
| `is_startpage`        | Is startpage of current folder (true/false) | 
| `is_folder`           | Is story a folder (true/false) | 
| `default_root`        | Component name which will be used as default content type for this folders entries |
| `disble_fe_editor`    | Is side by side editor disabled for all entries in folder (true/false) |
| `parent_id`           | Parent story/folder numeric id | 
| `parent`              | Essential parent information as object (resolved from `parent_id`) | 
| `group_id`            | Alternates group id (uuid string) | 
| `alternates`          | Array of resolved subset of [link objects](#core-resources/the-link-object) | 
| `tag_list`            | Array of Tags (string only) | 
| `breadcrumbs`         | Array of resolved subset of [link objects](#core-resources/the-link-object) (one per path segment / parent) |
| `sort_by_date`        | Legacy: Additional sorting date field (Format: `YYYY-mm-dd`) | 
| `meta_data`           | JSON to add meta data that is not setting the story status to unpublished changes. Example: User ratings.  |
| `pinned`              | To pin the story in the toolbar |
| `preview_token[token]` | Token passed to the editor as preview parameter to allow editmode verification |
| `preview_token[timestamp]` | Timestamp passed to the editor as preview parameter to allow editmode verification |
| `last_author[id]`     | Last author user object numeric id |
| `last_author[userid]` | Last author userid/username |
| `created_at`          | Creation date (Format: `YYYY-mm-dd HH:MM`) | 
| `updated_at`          | Latest update date (Format: `YYYY-mm-dd HH:MM`) | 
| `published_at`        | Latest publishing date (Format: `YYYY-mm-dd HH:MM`) | 
| `first_published_at`  | First publishing date (Format: `YYYY-mm-dd HH:MM`) | 
| `imported_at`         | Latest import date (Format: `YYYY-mm-dd HH:MM`) | 

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
