---
title: "Operation: `in_array`"
sidebarTitle: "in_array"
---

Filter your entries by checking if your custom array attribute (any field inside the `content` field) contains **one** of the values provided. As soon as **one** of the provided values separated with `,` are in the array field, the story object will be in the response. 

You can combined this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

## Use-cases: in_array

Get all content entries that is refered to others in a [N:N relationship](https://www.storyblok.com/tp/how-to-build-a-content-relationship) or if you want to get all entries with a specific value in one of it's **array fields**. You can combined this query with the `starts_with`, [pagination](#topics/pagination), and other query options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[categories][in_array]=sportsid,esportsid` | all entries of category `sportsid` **or** `esportsid` in field `categories` |
| `filter_query[tags][in_array]=food,health` | all entries of category `food` **or** `health` |
| `filter_query[related_products][in_array]=product-one-id,product-two-id` | all entries with `product-one` **or** `product-two` in the field `related_products` |

;examplearea

Example Request (all entries of category `9aa72a2f-04ae-48df-b71f-25f53044dc97` **and** `84550816-245d-4fe6-8ae8-b633d4a328f4` in field `categories`)

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?filter_query[categories][in_array]=9aa72a2f-04ae-48df-b71f-25f53044dc97,84550816-245d-4fe6-8ae8-b633d4a328f4&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

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
        // In response because in_array matches if ONE id does.
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97",
          "84550816-245d-4fe6-8ae8-b633d4a328f4"
        ],
        "description": "Description of the first"
      },
      "slug": "my-first-post",
      "full_slug": "posts/my-first-post",
      ...
    },{
      "name": "My third post",
      "created_at": "2018-04-24T11:57:29.302Z",
      "published_at": "2018-12-10T13:39:31.999Z",
      "id": 107350,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "content": {
        "_uid": "98cccd01-f807-4494-996d-c6b0de2045a5",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        "author": 107354,
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor incididunt ut **labore et dolore magna aliqua**. Ut enim ad minim veniam,\nquis nostrud exercitation.",
        "schedule": "2018-08-31 21:59",
        "component": "post",
        // filtered on this categories attribute;
        // In response because in_array matches if ONE id does.
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97"
        ],
        "description": "Description of the third"
      },
      ...
    },
    {
      ...
    }
  ]
}
```

