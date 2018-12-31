---
category: Core Resources
title: Retrieve multiple Stories
position: 130
---

Returns an array of story objects *without* `content`. Can be filtered on date ranges and is [paged](#topics/pagination).

| Parameter | Description |
|----|----|
| `page` | Current page of stories |
| `contain_component` | Filters by component in all levels of the content. Allows comma separated value for multiple components |
| `search_term` | Filter by a term using full text search |
| `sort_by` | Sort entries by specific attribute and order with `content.YOUR_FIELD:asc` and `content.YOUR_FIELD:desc`. Possible values are all root attributes of the entry (*position* and *parent_position* are special invisible attributes) and all fields of your content type inside `content` with a dot as seperator. Example: 'position:asc', 'parent_position:asc', 'content.your_custom_field:asc', 'created_at:desc' |
| `pinned` | Filter by pinned stories if '1' |
| `excluding_ids` | Exclude stories by ids (comma separated) from result |
| `by_ids` | Filter by ids (comma separated) |
| `by_uuids` | Filter by uuids (comma separated) |
| `with_tag` | Filter by tag |
| `folder_only` | Filter by folders only |
| `story_only` | Filter by stories only |
| `with_parent` | Filter by parent id |
| `with_slug` | Filter by exact slug |
| `starts_with` | Filter stories starting with a specific slug |
| `in_trash` | Filter by items in the trash folder |
| `search` | Filter by search term |
| `filter_query` | Filter by specific attribute(s) of your content type. See [content delivery api documentation](/content-delivery-api/#filter-queries/overview). |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/" httpMethod="GETOAUTH"></RequestExample>

Example Request with `search_term`

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/?search_term=My%20fulltext%20search" httpMethod="GETOAUTH"></RequestExample>

Example Request with `by_uuids`

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/?by_uuids=fb3afwa58-277f-4690-81fb-e0a080bd39ac,81fb81fb-e9fa-42b5-b952-c7d96ab6099d" httpMethod="GETOAUTH"></RequestExample>


You will receive an array of [story objects](#core-resources/stories/the-story-object) *without* `content` as response.