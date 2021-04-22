---
title: Entries between two numbers
---

A common filter needed for a shop content structure implementation would be a simple price range products filter. In the examples above you already saw how to write one [filter_query](#filter-queries/overview) to receive all products that are greater or lower a specific price tag; In this example we will combine the [gt-float](#filter-queries/operation-gt-float) and [lt-float](#filter-queries/operation-lt-float) filters to get all products between a price range.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt-float]=100.50&filter_query[price][lt-float]=300.50"></RequestExample>

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
        // filtered on GREATER than 100 and LOWER than 300
        "price": "270.50",
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
