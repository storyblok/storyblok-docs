---
title: "Operation: `is`"
sidebarTitle: "is"
---

Filter your entries by checking if your custom attribute (any field inside the `content` field) is of a specific type.

## Use-cases: is

Get all content entries that have a specific type of value.

You can combine this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[authors][is]=empty_array` | all posts that have no authors |
| `filter_query[orders][is]=not_empty_array&starts_with=customers/&` | all customers that have orders |
| `filter_query[message][is]=empty&starts_with=comments/` | all comments with an empty message |
| `filter_query[my_plugin.show_in][is]=true` | all entries with field `my_plugin` and a nested field `show_in` that have the value `true` |
| `filter_query[enabled][is]=false` | all entries where `enabled` is `false` |
| `filter_query[image][is]=null` | all entries where the `image` attribute is `null` or is missing |
| `filter_query[featured][is]=not_null` | all entries where the `featured` attribute is not `null` or is not missing|

;examplearea

Example Request (all posts with a schedule date)

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/?filter_query[schedule][is]=not_empty&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response (all posts with a schedule date)

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

