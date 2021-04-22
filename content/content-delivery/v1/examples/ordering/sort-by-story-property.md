---
title: Sort by story object property
---

You can sort your content entries by custom and predefined property using the `sort_by` parameter and `field:asc` or `field:desc` as value.

| Query | Description |
|---|---|
| `sort_by=name:asc` | Sort by the Story object property `name` |
| `sort_by=position:desc` | Sort by the Story object property `position` (same as in the admin interface) |
| `sort_by=first_published_at:desc` | Sort by the Story object property `first_published_at` |

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories?sort_by=name:asc&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{  
  "stories": [
    {
      // sorted by this property
      "name": "Paper",
      "created_at": "2018-12-10T17:50:54.023Z",
      "published_at": "2018-12-10T17:51:18.988Z",
      "id": 461934,
      "uuid": "7b372086-0c79-4890-9f01-2e6e41098f87",
      "content": {
        "_uid": "5bbcd6f0-494a-42bd-b135-a1f7216c27ce",
        "name": "Paper",
        "image": "//a.storyblok.com/f/44203/4032x3024/747174042a/paper.jpg",
        "price": "0.00124",
        "component": "product",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat mauris, faucibus quis pharetra sit amet, pretium ac libero. Etiam vehicula eleifend bibendum."
      },
      "slug": "paper",
      "full_slug": "products/paper"
    },
    { ... },
    { ... },
    ...
  ]
}
```