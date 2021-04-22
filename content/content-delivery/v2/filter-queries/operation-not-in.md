---
title: "Operation: `not_in`"
sidebarTitle: "not_in"
---

Filter your entries by checking if your custom attribute (any field inside the `content` field) does not have a value that is equal to one of the values provided.

## Use-cases: not_in

You can combined this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[author][not_in]=authorId&starts_with=posts/` | all Posts except one Author |
| `filter_query[seo.title][not_in]=Title` | all entries with field `seo` and a nested field `title` and not the value `Title` |
| `filter_query[component][not_in]=post` | all entries without one Content Type |
| `filter_query[component][not_in]=post,news` | all entries that are not of Content Type "post" or "news" |
| `filter_query[featured][not_in]=true` | all entries where the field `featured` is not `true` |

;examplearea

Example Request (all Posts without specific Author)

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?filter_query[author][not_in]=22f4fb1b-50b3-4bf2-816e-7d589e307421&token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{
  "stories": [
    {
      "name": "My first post",
      "id": 107349,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "content": {
        "_uid": "98cccd01-f807-4494-996d-c6b0de2045a5",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        // filtered on this author attribute
        "author": "33f4fb1b-5243-4bf2-246e-7d5753607421",
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod...",
        "schedule": "2018-08-31 21:59",
        "component": "post",
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97"
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

