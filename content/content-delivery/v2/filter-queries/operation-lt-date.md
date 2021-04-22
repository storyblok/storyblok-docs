---
title: "Operation: `lt_date`"
sidebarTitle: "lt_date"
---

Think of it at **BEFORE** a specific date. Allows you to filter fields of type `date/datetime` (Format: `YYYY-mm-dd HH:MM`). Returns all entries that are **lower** than (eg. before) the provided date.

You can combined this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.
 
## Use-cases: lt_date

You can create custom dates that allow you to schedule posts, launch products, schedule christmas teaser and more. Creating a field with the type `date` does not effect the published state of one content entry, but allows your frontend / server side implementation to query all entries before a specific date (eg. today)

| Filter Query | Description |
|--|--|
| `filter_query[schedule][lt_date]=2018-12-24 09:00` | all entries with date field `schedule` before `"2018-12-24 09:00"` |

;examplearea

Example Request (All posts scheduled BEFORE date)

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&filter_query[schedule][lt_date]=2018-12-24 09:00"></RequestExample>

Example Response (All posts scheduled BEFORE date)

```json
{
  "stories": [
    {
      "name": "My second Post",
      "created_at": "2018-04-24T11:57:29.321Z",
      "published_at": "2018-12-10T14:10:18.964Z",
      "id": 123122,
      "uuid": "bfea4895-8a19-4e82-ae1c-1c591dce3094",
      "content": {
        "_uid": "2caef8f8-9c37-46b4-af19-8744ec5e1053",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "This is my second post title",
        "author": 107354,
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor incididunt...",
        // filtered on this schedule attribute;
        // In response because gt-date matches if 
        // date in entry is GREATER than provided value
        "schedule": "2018-04-22 14:32",
        "component": "post",
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97",
          "84550816-245d-4fe6-8ae8-b633d4a328f4"
        ],
        "description": "Description of the second"
      },
      "slug": "my-second-post",
      "full_slug": "posts/my-second-post",
      ...
    },
    ...
  ]
}
```

