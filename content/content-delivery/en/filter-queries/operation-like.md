---
title: "Operation: `like`"
sidebarTitle: "like"
---

Filter your entries by checking if your custom attribute (any field inside the `content` field) has a value that is "like" the value provided.

## Use-cases: like

Get all content entries that are containing a specific value.

You can combined this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.

| Filter Query | Description |
|--|--|
| `filter_query[name][like]=john*` | all entries starting with the name "John" |
| `filter_query[name][like]=*john*` | all entries containing the name "John" |

;examplearea

Example Request

<RequestExample url="http://api.storyblok.com/v1/cdn/stories/?version=draft&token=6HMYdAjBoONyuS6GIf5PdAtt&starts_with=authors/&filter_query[name][like]=john*"></RequestExample>

Example Response

```json
{
  "stories": [
    {
      "name": "John Mustermann",
      "id": 107350,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "content": {
        "_uid": "81c6e3c4-4cad-485f-ae35-18958dcf4cd2",
        "name": "John Mustermann",
        "component": "author"
      },
      "slug": "john-mustermann",
      "full_slug": "authors/john-mustermann",
      ...
    },
    {
      ...
    }
  ]
}
```

