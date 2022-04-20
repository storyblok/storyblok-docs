---
title: Filter entries by boolean value
---

Imagine you want to allow your editors to have featured products with a boolean flag in your content schema. To filter all products to only receive the featured once you can utilize the [filter_query operation in](#filter-queries/operation-in) to check for an exact value.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/?filter_query[featured][in]=true&starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{
  "stories": [
    {
      "name": "Coat",
      "created_at": "2018-12-10T17:50:34.547Z",
      "published_at": "2018-12-10T17:50:47.977Z",
      "id": 461933,
      "uuid": "0186a027-4f04-4750-b743-8855ad4e71d4",
      "content": {
        "_uid": "baa8057c-a928-4fda-b322-9499a081a9c9",
        "name": "Coat",
        "image": "//a.storyblok.com/f/44203/5616x3744/8cff02e5d6/coat.jpg",
        "price": "270",
        // filtered if featured is TRUE
        "featured": true
        "component": "product",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat mauris, faucibus quis pharetra sit amet, pretium ac libero. Etiam vehicula eleifend bibendum."
      },
      "slug": "coat",
      "full_slug": "products/coat",
      "lang": "default",
      ...
    }
  ]
}
```
