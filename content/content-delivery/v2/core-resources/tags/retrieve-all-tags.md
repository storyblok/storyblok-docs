---
title: Retrieve All Tags
---

Returns an array of tag objects of one space. Use the `version` parameter and the correct token types to receive either `draft` and `published` or only `published` links.  

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `starts_with` | Filter by `full_slug`. Can be used to retrieve all tags form a specific folder. Examples: `starts_with=de/beitraege`, `starts_with=en/posts` | 
| `version` | Default: `published`. Possible values: `draft`, `published` |

;examplearea

Endpoint

```bash
GET /v1/cdn/tags/?starts_with=posts/
```

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/tags/?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response 

```json
{
  "tags": [
    {
      "name": "red",
      "taggings_count": 14
    },
    {
      "name": "spicy",
      "taggings_count": 3
    }
  ]
}
```