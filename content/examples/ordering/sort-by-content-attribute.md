---
category: Examples
title: Sort by content attribute
position: 10410
---

To sort by a field that you have defined in your content schema of your content type, you're able to use the `sort_by` parameter as shown below.

| Query | Description |
|---|---|
| `sort_by=content.name:asc` | Sort by the content type attribute `name` |

As you can see it works just like with the default properties of a story object but prepending the context `content.` before the field.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories?sort_by=content.name:asc&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{  
  "stories": [
    {
      "name": "Paper",
      "created_at": "2018-12-10T17:50:54.023Z",
      "published_at": "2018-12-10T17:51:18.988Z",
      "id": 461934,
      "uuid": "7b372086-0c79-4890-9f01-2e6e41098f87",
      "content": {
        "_uid": "5bbcd6f0-494a-42bd-b135-a1f7216c27ce",
        // sorted by this property
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