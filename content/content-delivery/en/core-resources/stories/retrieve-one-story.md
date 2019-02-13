---
title: Retrieve one Story
---

Returns a story object for the `full_slug`, `id` or `uuid` if authenticated using a preview or public token.

| Path Parameter           | Description          |
|---------------------|----------------------|
| `:full_slug`          | Use the `full_slug` of your content entry to retrieve it |
| `:id`          | Use the numeric `id` of your content entry to retrieve it |
| `:uuid`               | You can use the `uuid` property to query for your content entry. To tell our API to use the `uuid` instead of the `id` append the query param `find_by=uuid` | 

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `find_by` | Added if you want to query by `uuid` instead of using the numeric `id` | 
| `version` | Default: `published`. Possible values: `draft`, `published` |
| `resolve_links` | If `resolve_links=1` it will automatically resolve internal links of the multilink field type. The limit of resolved links per Story is `50`. |
| `resolve_relations` | Resolve relationships to other Stories of a multi-option or single-option field-type. Provide the component name and the field key as comma separated string. The limit of resolved relationships is `100` Stories of `5` different fields. Example: `resolve_relations=page.author,page.categories` |
| `from_release` | Access version of specific release by release id |
| `cv` | Read more about cache version at [Cache invalidation](#cache-invalidation) |

;examplearea

Endpoint

```bash
GET /v1/cdn/stories/(:full_slug|:id|:uuid)
```

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/posts/my-third-post?token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response 

```json
{
  "story": {
    "id": 107350,
    "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
    "name": "My third post",
    "slug": "my-third-post",
    "full_slug": "posts/my-third-post",
    "created_at": "2018-04-24T11:57:29.302Z",
    "published_at": "2018-12-07T01:31:36.134Z",
    "first_published_at": "2018-08-07T09:40:13.000Z",
    "content": {
      "component": "post",
      // fields you define yourself are here
      // those below we defined for the examples
      "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
      "title": "My second title",
      "author": "22f4fb1b-50b3-4bf2-816e-7d589e307421",
      "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod",
      "schedule": "2018-08-31 21:59",
      "description": "Description of the third",
      "categories": [
        "9aa72a2f-04ae-48df-b71f-25f53044dc97"
      ]
    },
    "position": -20,
    "tag_list": [ ],
    "is_startpage": false,
    "parent_id": 107348,
    "group_id": "d5ea8520-1296-40b7-8360-894461fdc5b6",
    "alternates": [ ],
    "release_id": null,
    "lang": "default"
  }
}
```
