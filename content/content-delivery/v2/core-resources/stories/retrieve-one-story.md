---
title: Retrieve one Story
---

Returns a story object for the `full_slug`, `id` or `uuid` if authenticated using a preview or public token.

| Path Parameter           | Description          |
|---------------------|----------------------|
| `:full_slug`          | Use the `full_slug` of your content entry to retrieve it. |
| `:id`          | Use the numeric `id` of your content entry to retrieve it |
| `:uuid`               | You can use the `uuid` property to query for your content entry. To tell our API to use the `uuid` instead of the `id` append the query param `find_by=uuid` | 

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `find_by` | Added if you want to query by `uuid` instead of using the numeric `id` | 
| `version` | Default: `published`. Possible values: `draft`, `published` |
| `resolve_links` | The parameter `resolve_links` will automatically resolve internal links of the multilink field type. Resolved links can be found in root of response under the property links. If the value is story the whole story object will be included. If the value is url only uuid, id, name, path, slug and url (url is a computed property which returns the "Real path" if defined to use it for navigation links) will be included. if the value is link it will return the [links object](https://www.storyblok.com/docs/api/content-delivery#core-resources/links/the-link-object). The limit of resolved links per Story is 50 when resolving with story and 500 when resolving with `url` and `link`. With `resolve_links`, you can resolve entries going 1 level deep. |
| `resolve_relations` | Resolve relationships to other Stories of a multi-option or single-option field-type. Provide the component name and the field key as comma separated string. Resolved relations can be found in root of response under the property `rels`. The limit of resolved relationships is `100` Stories. With resolve_relations, you can resolve entries going 2 levels deep. Example: `resolve_relations=page.author,page.categories`; Read more about it in our [tutorial](https://www.storyblok.com/tp/using-relationship-resolving-to-include-other-content-entries). |
| `from_release` | Access version of specific release by release id |
| `cv` | Read more about cache version at [Cache invalidation](#topics/cache-invalidation) |
| `language` | Add the language i18n code as query parameter to receive a localized version |
| `fallback_lang` | Define a custom fallback language (i18n code). By default the fallback language is the one defined in the space settings  |
| `resolve_assets` | If the value is 1 it will resolve assets in the content and include the meta information (only available with premium plans)  |
	
**Response**

The response will contain following attributes:

| Property         | Description          |
|------------------|----------------------|
| `story`          | A single [story object](#core-resources/stories/the-story-object) |
| `cv`             | The [cache version](#topics/cache-invalidation) |
| `rels`           | Array of related [story objects](#the-story-object) when using the resolve_relations parameter |
| `links`          | Array of link or [story objects](#the-story-object) when using the resolve_links parameter |
| `rel_uuids`      | Array of the uuids of all the related [story objects](#the-story-object) if the `resolve_relations` parameter is in use and if the limit of resolvable relations is hit |
| `link_uuids`     | Array of the uuids of all the links if the `resolve_links` parameter is in use and if the limit of resolvable links is hit |

;examplearea

Endpoint

```bash
GET /v2/cdn/stories/(:full_slug|:id|:uuid)
```

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/posts/my-third-post?token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

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
    "translated_slugs": [ ],
    "release_id": null,
    "lang": "default"
  },
  "cv": 1560257296,
  "rels": [],
  "links": []
}
```
