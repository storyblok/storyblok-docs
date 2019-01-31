---
title: Retrieve Multiple Stories
---

Returns a list of stories that are in your Storyblok space. The stories are returned in sorted order, depending on the order in your space. You can use the query parameter `sort_by` with any [story object property](#the-story-object) and first level of your content type to order the response to your needs.

If no entries are found with your filters applied, you will receive an empty array. You will *not* receive a `404` error message, to check if you have results go for the array length.

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `starts_with` | Filter by `full_slug`. Can be used to retrieve all entries form a specific folder. Examples: `starts_with=de/beitraege`, `starts_with=en/posts` | 
| `by_uuids` | Get stories by comma separated `uuid`. Example: `by_uuids=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4` | 
| `excluding_ids` | Exclude stories by comma separated numeric ids. Example: `excluding_ids=101231,9101231` |
| `excluding_fields` | Exclude specific fields of your content type by comma seperated names. Example: `excluding_fields=title,content` |
| `version` | Default: `published`. Possible values: `draft`, `published` |
| `resolve_links` | If `resolve_links=1` it will automatically resolve internal links of the multilink field type. The limit of resolved links per Story is `50`. |
| `resolve_relations` | Resolve relationships to other Stories (in the first level of nesting) of a multi-option or single-option field-type. Provide the field key(s) as comma separated string to resolve specific fields. Example: `resolve_relations=author,categories` |
| `sort_by` | Sort entries by specific attribute and order with `content.YOUR_FIELD:asc` and `content.YOUR_FIELD:desc`. Possible values are all root attributes of the entry and all fields of your content type inside `content` with the dot as seperator. Example: `position:desc`, `content.your_custom_field:asc`, `created_at:desc`. If you want to use the sorting in the Storyblok admin interface you can use `position:desc` to achieve that. |
| `search_term` | Search content items by full text. |
| `filter_query` | Filter by specific attribute(s) of your content type. The filter query parameter needs to contain the query operation key. Separate the values by a comma , to filter by multiple values. <br><br> `filter_query[ATTRIBUTE][OPERATION]=VALUE,...` <br><br> Following filter operations `OPERATION` are available: <br> `in` - Exact match of one of the provided values<br> `not_in` - Does not contain the given value  <br> `all_in_array` - Contains all of the values of an array value <br> `in_array` - Contains any of the values of an array value <br> `gt-date` - Greater than date (Format: 2018-03-03 10:00) <br> `lt-date` - Less than date <br> `gt-num` - Greater than numeric value <br> `lt-num` - Less than numeric value. <br><br> Checkout the [filter_query Examples](#filter-queries/overview) we put together for you with most common use-cases. | 
| `is_startpage` | Filter by folder startpage. Use `is_startpage=1` to only return startpages and `is_startpage=0` to exclude startpages from the result. |
| `language` | Add the language i18n code as query parameter to receive a localized version if filtering by UUIDs |
| `page` | Numeric. default: `1`. Read more at [Pagination](#topics/pagination) |
| `per_page` | Numeric. default:`25`, max: `100`. Read more at [Pagination](#topics/pagination) |  
| `cv` | Read more about cache version at [Cache invalidation](#topics/cache-invalidation) |

;examplearea

Endpoint

```bash
GET /v1/cdn/stories?starts_with=posts/
```

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

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
      "release_id": null,
      "lang": "default"
    },
    ...
  ]
}
```