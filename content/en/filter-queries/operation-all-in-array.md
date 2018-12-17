---
category: Filter Queries
title: "Operation: `all_in_array`"
sidebarTitle: all_in_array
position: 1030
---

Filter your entries by checking if your custom array attribute (any field inside the `content` field) contains **all** of the values provided. As soon as **all** of the provided values separated with `,` are in the array field, the story object will be in the response. 

You can combined this query with the `starts_with`, [pagination](#/topics/pagination), other filter query, and query/sorting options of [Stories](#/core-resources/stories/retrieve-multiple-stories) if needed.

## Use-cases

Get all content entries that is refered to others in a [N:N relationship](https://www.storyblok.com/tp/how-to-build-a-content-relationship) or if you want to get all entries with a specific value in one of it's **array fields** fields. You can combined this query with the `starts_with`, [pagination](#/topics/pagination), and other query options of [Stories](#/core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[categories][all_in_array]=sportsid,esportsid` | all entries of category `sportsid` **and** `esportsid` in field `categories` |
| `filter_query[tags][all_in_array]=food,health` | all entries of category `food` **and** `health` |
| `filter_query[related_products][all_in_array]=product-one-id,product-two-id` | all entries with `product-one` **and** `product-two` in the field `related_products` |

;examplearea

Example Request (all entries of category `9aa72a2f-04ae-48df-b71f-25f53044dc97` **and** `84550816-245d-4fe6-8ae8-b633d4a328f4` in field `categories`)

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/?filter_query[categories][all_in_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response (all entries of category `9aa72a2f-04ae-48df-b71f-25f53044dc97` **and** `84550816-245d-4fe6-8ae8-b633d4a328f4` in field `categories`)

```json
{
  "stories": [
    {
      "name": "My first Post",
      "id": 107351,
      "created_at": "2018-04-24T11:57:29.321Z",
      "published_at": "2018-12-10T13:39:18.061Z",
      "uuid": "bfea4895-8a19-4e82-ae1c-1c591dce3094",
      "content": {
        "_uid": "2caef8f8-9c37-46b4-af19-8744ec5e1053",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "This is my first post title",
        "author": 107354,
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor...",
        "schedule": "",
        "component": "post",
        // filtered on this categories attribute;
        // In response because all_in_array matches if ALL ids are present.
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97",
          "84550816-245d-4fe6-8ae8-b633d4a328f4"
        ],
        "description": "Description of the first"
      },
      "slug": "my-first-post",
      "full_slug": "posts/my-first-post",
      ...
    },
    {
      ...
    }
  ]
}
```

