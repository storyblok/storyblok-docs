---
title: Retrieve Multiple Datasource Entries
---

Returns an array of datasource entry objects for the `datasource` and `dimension` defined, if authenticated using a preview or public token.

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `datasource` | 	Datasource group id/slug | 
| `dimension` | Dimension that you defined for your datasource (eg. `dimension=en`) |
| `page` | Numeric. default: `1`. Read more at [Pagination](#topics/pagination) |
| `per_page` | Numeric. default: `25`, max: `1000`. Read more at [Pagination](#topics/pagination) | 
| `cv` | Read more about cache version at [Cache invalidation](#topics/cache-invalidation) |

;examplearea

Endpoint

```bash
GET /v1/cdn/datasource_entries?datasource=:slug
```

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/datasource_entries?datasource=labels&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response 

```json
{
  "datasource_entries": [
    {
      "id": 22237,
      "name": "cancel",
      "value": "Abbrechen",
      "dimension_value": null
    },
    {
      "id": 22238,
      "name": "read_more",
      "value": "Mehr erfahren",
      "dimension_value": null
    }
  ]
}
```
