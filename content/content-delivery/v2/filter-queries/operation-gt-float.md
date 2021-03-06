---
title: "Operation: `gt_float`"
sidebarTitle: gt_float
---

Allows you to filter fields of type `float`, `string` (float value), or custom field type with numbers in the schema. Returns all entries that are **GREATER** than the provided value.

You can combined this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.
 
## Use-cases: gt_float

As soon as you need to query for a specific float value in your content entries, this is your go to filter for greater than checks. You can build price filter for your products if your price value is in the CMS and not your PIM or any other number oriented kind of filter. 

| Filter Query | Description |
|--|--|
| `filter_query[price][gt_float]=100.50` | all entries with price field **greater** than 100.50 |
| `filter_query[price][gt_float]=99.50` | all entries with price field **greater** than 99.50 |
| `filter_query[price][gt_float]=99.50` | all entries with price field **greater** than 99.50 |
| `filter_query[price][gt_float]=1999.50` | all entries with price field **greater** than 1999.50 (no thousand separator) |
| `filter_query[price][gt_float]=1999.50` | all entries with price field **greater** than 1999.50 (no thousand separator) |

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][gt_float]=100.50"></RequestExample>

Example Response

```json
{
  "stories": [
    {
      "name": "Spaceship",
      "id": 461935,
      "created_at": "2018-12-10T17:51:25.161Z",
      "published_at": "2018-12-10T17:52:14.888Z",
      "uuid": "14d950c6-0a8f-4088-98e3-73efced9ff6d",
      "content": {
        "_uid": "00b45e23-5dc5-4398-9b34-e87ae4ed42e6",
        "name": "Spaceship",
        "image": "//a.storyblok.com/f/44203/6016x4016/995fde1190/spaceship.jpg",
        // filtered on this price attribute;
        // value of field price needs to be greater than 100
        "price": "17000000.50",
        "component": "product",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat mauris, faucibus quis pharetra sit amet, pretium ac libero. Etiam vehicula eleifend bibendum."
      },
      "slug": "spaceship",
      "full_slug": "products/spaceship",
      ...
    },
    {
      "name": "Coat",
      "id": 461933,
      "uuid": "0186a027-4f04-4750-b743-8855ad4e71d4",
      "content": {
        "_uid": "baa8057c-a928-4fda-b322-9499a081a9c9",
        "name": "Coat",
        "image": "//a.storyblok.com/f/44203/5616x3744/8cff02e5d6/coat.jpg",
        // filtered on this price attribute;
        // value of field price needs to be greater than 100
        "price": "27.50",
        "component": "product",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat mauris, faucibus quis pharetra sit amet, pretium ac libero. Etiam vehicula eleifend bibendum."
      },
      "slug": "coat",
      "full_slug": "products/coat",
      ...
    }
  ]
}
```

