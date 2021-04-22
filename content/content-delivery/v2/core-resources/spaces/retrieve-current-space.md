---
title: Retrieve Current Space
---

Returns the current space object, if you're authenticated with a `token`.

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |

;examplearea

Endpoint

```bash
GET /v2/cdn/spaces/me/
```

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/spaces/me/?token=dtONJHwmxhdJOwKxyjlqAgtt"></RequestExample>

Example Response 

```json
{
  "space": {
    "id": 123,
    "name": "Storyblok.com",
    "domain": "https://www.storyblok.com/",
    "version": 1544117388,
    "language_codes": ["de"]
  }
}
```
