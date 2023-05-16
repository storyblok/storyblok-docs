---
title: Retrieve Multiple Stories
---

Returns a list of stories that are in your Storyblok space. The stories are returned in sorted order, depending on the order in your space. You can use the query parameter `sort_by` with any [story object property](#the-story-object) and first level of your content type to order the response to your needs.

If no entries are found with your filters applied, you will receive an empty array. You will *not* receive a `404` error message, to check if you have results go for the array length.

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `cv` | Read more about cache version at [Cache invalidation](#topics/cache-invalidation) |
| `starts_with` | Filter by `full_slug`. Can be used to retrieve all entries form a specific folder. Examples: `starts_with=de/beitraege`, `starts_with=en/posts`. Attention: If you use field level translations and a root folder with the same name of a language code you need to prepend [default] to the path to retrieve the default language (Example: `starts_with=[default]/de/home`). |
| `version` | Default: `published`. Possible values: `draft`, `published` |
| `search_term` | Search content items by full text. |
| `sort_by` | Sort entries by specific attribute and order with `content.YOUR_FIELD:asc` and `content.YOUR_FIELD:desc`. Possible values are all attributes of the entry and all fields of your content type inside `content` with the dot as seperator. Example: `position:desc`, `content.your_custom_field:asc`, `content.field_type_xy.field_xy:asc`, `created_at:desc`. If you want to use the sorting provided by the user in the Storyblok admin interface you need to use `position:desc`. By default all custom fields are sorted as strings. To sort custom fields with numeric values you need to provide the type information (float or int) like following: `content.YOUR_FIELD:asc:float` or `content.YOUR_FIELD:asc:int` |
| `per_page` | Numeric. default: `25`, max: `100`. Read more at [Pagination](#topics/pagination) |
| `page` | Numeric. default: `1`. Read more at [Pagination](#topics/pagination) |
| `by_slugs` | Get stories by comma separated `full_slug`. You can also specify wildcards with `*`. Examples: `by_slugs=authors/john,authors/max`, `by_slugs=authors/*,articles/*` |
| `excluding_slugs` | Exclude stories specifying comma separated values of `full_slug`. You can also specify wildcards with `*`. Examples: `excluding_slugs=authors/john,authors/max`, `excluding_slugs=authors/*` |
| `published_at_gt` | After a specific published date (Format: 2018-03-03 10:00) |
| `published_at_lt` | Before a specific published date (Format: 2018-03-03 10:00) |
| `in_workflow_stages` | Comma separated list of ids. You can get the ids of the workflow stages using the [Management API](https://www.storyblok.com/docs/api/management#core-resources/workflow-stages/get-all) Example: `in_workflow_stages=812,186` |
| `content_type` | Filter by specific content type. Example: `content_type=author` |
| `first_published_at_gt` | After a specific first published date (Format: 2018-03-03 10:00) |
| `first_published_at_lt` | Before a specific first published date (Format: 2018-03-03 10:00) |
| `level` | Filter by specific folder level. Useful for getting items for navigations. Example: `level=2` |
| `resolve_relations` | Resolve relationships to other Stories of a multi-option or single-option field-type. Provide the component name and the field key as comma separated string. Resolved relations can be found in root of response under the property `rels`. The limit of resolved relationships is `100` Stories. You can't use this filter to resolve relations of resolved entries (eg. nested relationship resolving). Example: `resolve_relations=page.author,page.categories`; Read more about it in our [tutorial](https://www.storyblok.com/tp/using-relationship-resolving-to-include-other-content-entries). |
| `excluding_ids` | Exclude stories by comma separated numeric ids. Example: `excluding_ids=101231,9101231` |
| `by_uuids` | Get stories by comma separated `uuid`. To get a specific language you need to combine it with the parameter `language=en` (replace `en` with your langauge) Example: `by_uuids=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4` |
| `by_uuids_ordered` | Get stories by comma separated `uuid` ordered by the sequence provided in the parameter value. To get a specific language you need to combine this filter with `starts_with=en/*` (replace `en` with your langauge) Example: `by_uuids_ordered=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4` |
| `with_tag` | Filter by specific tag(s). Use comma to filter by multiple tags. Examples: with_tag=featured,home |
| `is_startpage` | Filter by folder startpage. Use `is_startpage=1` to only return startpages and `is_startpage=0` to exclude startpages from the result. |
| `resolve_links` | The parameter `resolve_links` will automatically resolve internal links of the multilink field type. Resolved links can be found in root of response under the property `links`. If the value is `story` the whole story object will be included. If the value is `url` only uuid, id, name, path, slug and url (url is a computed property which returns the "Real path" if defined to use it for navigation links) will be included. The limit of resolved links per Story is `50` when resolving with `story` and `100` when resolving with `url`. |
| `from_release` | Access version of specific release by release id |
| `fallback_lang` | Define a custom fallback language. By default the fallback language is the one defined in the space settings |
| `language` | Choose the language of the content. Example `language=de` |
| `filter_query` | Filter by specific attribute(s) of your content type - it will not work for default Story properties. The filter query parameter needs to contain the query operation key. Separate the values by a comma , to filter by multiple values. <br><br> `filter_query[ATTRIBUTE][OPERATION]=VALUE,...` <br><br> Following filter operations `OPERATION` are available: <br> `is` - Checks for empty or not empty values and booleans. For strings the value can be `empty` or `not_empty`. For arrays use `empty_array` or `not_empty_array`. For booleans use `true` or `false`. Additionally you can check for null values with `null` and `not_null`<br> `in` - Exact match of one of the provided values<br> `not_in` - Does not contain the given value<br> `like` - Does contain the given value with a wildcard * search<br> `not_like` - Does not contain the given value with a wildcard * search <br> `all_in_array` - Contains all of the values of an array value <br> `any_in_array` - Contains any of the values of an array value <br> `gt_date` - Greater than date (Format: 2018-03-03 10:00) <br> `lt_date` - Less than date <br> `gt_int` - Greater than integer value <br> `lt_int` - Less than integer value. <br> `gt_float` - Greater than float value <br> `lt_float` - Less than float value. <br><br> Checkout the [filter_query Examples](#filter-queries/overview) we put together for you with most common use-cases. |
| `excluding_fields` | Exclude specific fields of your content type by comma seperated names. Example: `excluding_fields=title,content` (Only the first (root) level fields are excluded, not the nested attributes) |
| `resolve_assets` | If the value is `1` it will resolve assets in the content and include the meta information (only available in the [Teams](https://www.storyblok.com/pricing) plan and above) |

**Response**

The response will contain following attributes:

| Property         | Description          |
|------------------|----------------------|
| `stories`        | An array of [story objects](#core-resources/stories/the-story-object) |
| `cv`             | The [cache version](#topics/cache-invalidation) |
| `rels`           | Array of related [story objects](#the-story-object) when using the resolve_relations parameter |
| `links`          | Array of link or [story objects](#the-story-object) when using the resolve_links parameter |
| `rel_uuids`      | Array of the uuids of all the related [story objects](#the-story-object) if the `resolve_relations` parameter is in use and if the limit of resolvable relations is hit |
| `link_uuids`     | Array of the uuids of all the links if the `resolve_links` parameter is in use and if the limit of resolvable links is hit |

;examplearea

Endpoint

```bash
GET /v2/cdn/stories?starts_with=posts/
```

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Object 

```json
{
  "stories": [
    {
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
    {
      "id": 107349,
      "uuid": "a91440ee-fd57-4ee3-83cf-d49d217ae919",
      "name": "My second post",
      "slug": "my-second-post",
      "full_slug": "posts/my-second-post",
      "created_at": "2018-04-24T11:57:29.283Z",
      "published_at": "2018-07-26T12:38:17.025Z",
      "first_published_at": "2018-07-26T12:38:17.025Z",
      "content": {
        "component": "post",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        "author": "c47be9f0-47c3-4315-a95a-550f0c560eb5",
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do...",
        "categories": [
          "5db2e929-6d3d-4564-982e-fa8513b0e5de"
        ],
        "description": "Description of the second"
      },
      "sort_by_date": null,
      "position": -10,
      "tag_list": [ ],
      "is_startpage": false,
      "parent_id": 107348,
      "group_id": "854c3d1f-5d7f-4785-92ee-620a7c6ca7ee",
      "alternates": [ ],
      "translated_slugs": [ ],
      "release_id": null,
      "lang": "default"
    },
    ...
  ],
  "cv": 1560257296,
  "rels": [],
  "links": []
}
```
