---
title: Pagination
---

All top-level API resources have support for bulk fetches via "list" API methods. For instance, you can list `stories` and `datasource_entries`. These list API methods share a common structure, taking these two parameters: `page`, `per_page`.

The default `per_page` is set to `25` entries per page. You can increase this number to receive up to `100` entries per page. To go through different pages you can utilize the `page` parameter. The `page` parameter is a numeric value and uses `1` as default.

To allow a calculation of how many pages are available you can access the `Total` response header that you will receive after you made your first request. Access it and divide it with your `per_page` parameter to receive the highest possible page, otherwise you will receive an empty array as result.

| Query Parameter     | Description          |
|---------------------|----------------------|
| `page` | Default: `1`. Increase this to receive the next page of content entries |
| `per_page` | Default: `25`, Max for Stories: `100`, Max for Links and Datasource Entries: `1000` . Defines the number of content entries you will receive per page |

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories?cv=1560257296&page=1&per_page=2&starts_with=posts%2F&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{
  "stories": [
    { ... },
    { ... }
  ]
}
```

Example Response Headers

```bash
status: 200
per-page: 2
total: 3
...
```
