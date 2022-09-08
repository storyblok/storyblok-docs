---
title: Load draft version
---

Appending the query parameter `version` with the value `draft` (eg. `version=draft`) and using the preview token as token will allow you to access the draft versions of content entries. You can perform all kind of queries, sorting and filtering with either published or draft versions.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories?version=draft&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

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
