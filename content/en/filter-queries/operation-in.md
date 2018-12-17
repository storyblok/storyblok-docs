---
category: Filter Queries
title: "Operation: `in`"
sidebarTitle: "in"
position: 1010
---

Filter your entries by checking if your custom attribute (any field inside the `content` field) has a value that is equal to one of the values provided.

## Use-cases

Get all content entries that is refered to another in a [1:N relationship](https://www.storyblok.com/tp/how-to-build-relationships-between-2-content-types) or if you want to get all entries with a specific value in one of it's fields.

You can combined this query with the `starts_with`, [pagination](#/topics/pagination), other filter query, and query/sorting options of [Stories](#/core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[author][in]=authorId&starts_with=posts/` | all Posts by one Author |
| `filter_query[customer][in]=customerId&starts_with=orders/&` | all Comments by one Post |
| `filter_query[post][in]=postId&starts_with=comments/` | all Comments by one Post |
| `filter_query[seo.title][in]=Title` | all entries with field `seo` and a nested field `title` and the value `Title` |
| `filter_query[component][in]=post` | all entries of one Content Type |
| `filter_query[component][in]=post,news` | all entries of Content Type "post" or "news" |
| `filter_query[featured][in]=true` | all entries where the field `featured` is `true` |

;examplearea

Example Request (all Posts by one Author)

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/?filter_query[author][in]=22f4fb1b-50b3-4bf2-816e-7d589e307421&token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response (all Posts by one Author)

```json
{
  "stories": [
    {
      "name": "My third post",
      "id": 107350,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "content": {
        "_uid": "98cccd01-f807-4494-996d-c6b0de2045a5",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        // filtered on this author attribute
        "author": "22f4fb1b-50b3-4bf2-816e-7d589e307421",
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod...",
        "schedule": "2018-08-31 21:59",
        "component": "post",
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97"
        ],
        "description": "Description of the third"
      },
      "slug": "my-third-post",
      "full_slug": "posts/my-third-post",
      ...
    },
    {
      ...
    }
  ]
}
```

