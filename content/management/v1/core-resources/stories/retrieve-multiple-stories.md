---
title: Retrieve multiple Stories
---

Returns an array of story objects *without* `content`. Can be filtered with the parameters below and is [paged](#topics/pagination).

| Parameter | Description |
|----|----|
| `page` | Current page of stories |
| `contain_component` | Filters by component in all levels of the content. Allows comma separated value for multiple components |
| `text_search` | Filter by a term using full text search |
| `sort_by` | Sort entries by specific attribute and order with `content.YOUR_FIELD:asc` and `content.YOUR_FIELD:desc`. To sort integers append `:int`. To sort floats append `:float`. Possible values are all root attributes of the entry (*position* and *parent_position* are special invisible attributes) and all fields of your content type inside `content` with a dot as seperator. Example: 'position:asc', 'parent_position:asc', 'content.your_custom_field:asc', 'content.your_number_field:asc:int', 'created_at:desc'. |
| `pinned` | Filter by pinned stories if '1' |
| `excluding_ids` | Exclude stories by ids (comma separated) from result |
| `by_ids` | Filter by ids (comma separated) |
| `by_uuids` | Filter by uuids (comma separated) |
| `with_tag` | Filter by tag |
| `folder_only` | Filter by folders only |
| `story_only` | Filter by stories only |
| `with_parent` | Filter by parent id |
| `full_slug` | Filter by the property [`full_slug`](https://www.storyblok.com/docs/api/management#core-resources/stories/the-story-object) |
| `starts_with` | Filter stories starting with a specific slug |
| `in_trash` | Filter by items in the trash folder |
| `search` | Filter by search term |
| `filter_query` | Filter by specific attribute(s) of your content type. See [Content Delivery API Documentation](/docs/api/content-delivery/v2#filter-queries/overview). |
| `in_release` | Filter items by the release id |
| `is_published` | `true` for entries that are currently published; `false` for those that are currently not published or unpublished |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/" httpMethod="GETOAUTH"></RequestExample>

Example Request with `search_term`

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/?text_search=My%20fulltext%20search" httpMethod="GETOAUTH"></RequestExample>

Example Request with `by_uuids`

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/?by_uuids=fb3afwa58-277f-4690-81fb-e0a080bd39ac,81fb81fb-e9fa-42b5-b952-c7d96ab6099d" httpMethod="GETOAUTH"></RequestExample>


You will receive an array of [story objects](#core-resources/stories/the-story-object) *without* `content` as response.
