---
title: "Operation: `gt_date`"
sidebarTitle: gt_date
---

Think of it at **AFTER** a specific date. Allows you to filter fields of type `date/datetime` (Format: `YYYY-mm-dd HH:MM`). Returns all entries that are **greater** (eg. later) than the provided value.

You can combined this query with the `starts_with`, [pagination](#topics/pagination), other filter query, and query/sorting options of [Stories](#core-resources/stories/retrieve-multiple-stories) if needed.
 
## Use-cases: gt_date

You can create custom dates that allow you to schedule posts, launch products and with this query see all entries that are scheduled after a specific date, schedule christmas teaser. Creating a field with the type `date` does not effect the published state of one content entry, but allows your frontend / server side implementation to query those specific entries.

| Filter Query | Description |
|--|--|
| `filter_query[schedule][gt_date]=2019-12-24 09:00` | all entries with date field `schedule` after `"2019-12-24 09:00"` |

;examplearea

Example Request (All posts scheduled AFTER now)

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?token=ask9soUkv02QqbZgmZdeDAtt&starts_with=posts/&filter_query[schedule][gt_date]=2019-12-24 09:00"></RequestExample>

Example Response (All posts scheduled AFTER now)

```json
{
  "stories": [
    {
      "name": "My first Post",
      "created_at": "2018-04-24T11:57:29.321Z",
      "published_at": "2018-12-10T14:10:18.964Z",
      "id": 107351,
      "uuid": "bfea4895-8a19-4e82-ae1c-1c591dce3094",
      "content": {
        "_uid": "2caef8f8-9c37-46b4-af19-8744ec5e1053",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "This is my first post title",
        "author": 107354,
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor incididunt...",
        // filtered on this schedule attribute;
        // In response because gt_date matches if 
        // date in entry is GREATER than provided value
        "schedule": "2019-12-24 10:00",
        "component": "post",
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
    ...
  ]
}
```

