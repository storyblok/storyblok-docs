---
title: Retrieve Multiple Datasources
---

Returns an array of datasource objects.

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `page` | Numeric. default: `1`. Read more at [Pagination](#pagination) |
| `per_page` | Numeric. default: `25`, max: `1000`. Read more at [Pagination](#pagination) | 

;examplearea

Endpoint

```bash
GET /v2/cdn/datasources
```

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/datasources?token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response 

```json
{
  "datasources": [
    {
      "id": 1433,
      "name": "Label",
      "slug": "labels",
      "dimensions": [
        {
          "id": 126,
          "entry_value": "en",
          "name": "English"
        }
      ]
    }
  ]
}
```
