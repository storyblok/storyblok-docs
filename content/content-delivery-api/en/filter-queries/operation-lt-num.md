---
category: Filter Queries
title: "Operation: `lt-num`"
sidebarTitle: "lt-num"
position: 1070
---

Allows you to filter fields of type `number`, or custom field type with numbers in the schema. Returns all entries that are **LOWER** than the provided value.

You can combined this query with the `starts_with`, [pagination](#/topics/pagination), other filter query, and query/sorting options of [Stories](#/core-resources/stories/retrieve-multiple-stories) if needed.
 
## Use-cases

As soon as you need to query for a specific integer or float value in your content entries, this is your go to filter for lower than checks. You can build price filter for your products if your price value is in the CMS and not your PIM or any other number oriented kind of filter. 

| Filter Query | Description |
|--|--|
| `filter_query[price][lt-num]=100` | all entries with price field **lower** than 100 |
| `filter_query[price][lt-num]=99` | all entries with price field **lower** than 99 |
| `filter_query[price][lt-num]=1999` | all entries with price field **lower** than 1999 (no thousand separator) |

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/?starts_with=products/&token=ask9soUkv02QqbZgmZdeDAtt&filter_query[price][lt-num]=100"></RequestExample>

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
      "full_slug": "products/paper",
      ...
    },
    {
      "name": "Shoe",
      "created_at": "2018-12-10T17:49:40.741Z",
      "published_at": "2018-12-10T17:50:30.588Z",
      "id": 461932,
      "uuid": "9176c97c-2602-4878-80f0-ea89c9eb26b7",
      "content": {
        "_uid": "89dbca77-6df2-4c42-bcd5-a2d81277fe4b",
        "name": "Shoe",
        "image": "//a.storyblok.com/f/44203/2880x1920/3af2f49951/shoe.jpg",
        "price": "74.99",
        "component": "product",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In erat mauris, faucibus quis pharetra sit amet, pretium ac libero. Etiam vehicula eleifend bibendum."
      },
      "slug": "shoe",
      "full_slug": "products/shoe",
      ...
    }
  ]
}
```

