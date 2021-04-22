---
title: Filter Queries
sidebarTitle: Operations
showChildren: true
---

With the filter_query you're able to filter by specific attribute(s) of your stories. The filter_query parameter accepts an `attribute` and an `operation` key.  

| Operation | Description |
|----|---------|
| [`is`](#filter-queries/operation-is) | Matches a value type |
| [`in`](#filter-queries/operation-in) | Matches exactly **one** value |
| [`not_in`](#filter-queries/operation-not-in) | Matches all without the given value |
| [`like`](#filter-queries/operation-like) | Matches exactly **one** value with a wildcard search using * (Example: "john*") |
| [`not_like`](#filter-queries/operation-not-like) | Matches all without the given value |
| [`in_array`](#filter-queries/operation-in-array) | Matches **any** value of given array |
| [`all_in_array`](#filter-queries/operation-all-in-array) | Must match **all** values of given array |
| [`gt_date`](#filter-queries/operation-gt-date) | Greater than date (Format: `YYYY-mm-dd HH:MM`) |
| [`lt_date`](#filter-queries/operation-lt-date) | Less than date (Format: `2018-03-03 10:00`) |
| [`gt_int`](#filter-queries/operation-gt-int) | Greater than integer value |
| [`lt_int`](#filter-queries/operation-lt-int) | Less than integer value |
| [`gt_float`](#filter-queries/operation-gt-float) | Greater than float value |
| [`lt_float`](#filter-queries/operation-lt-float) | Less than float value |

You can find one example for each filter query in the description page for each operation, and examples that combine multiple filters in the [filter examples](#examples/filtering/filters) section.

By default the applied filters are connected by the AND operator but it is also possible to apply filters by the OR operator using the keyword `__or`. Following an example using the Javascript SDK:

```
StoryblokClient.get('cdn/stories', {
  filter_query_v2: {
    __or: [
      { color: { in: 'red' } },
      { background: { in: 'blue' } }
    ],
    component: { in: 'article' }
  }
})
```

;examplearea

Endpoint

```bash
GET /v2/cdn/stories/?filter_query[ATTRIBUTE][OPERATION]=VALUE,...
```

Example Story Object

We will demonstrate use-cases and example on a simple blog content structure as shown below. You're not limited by the fields in this example. Every field in the `content` field can be used as the `ATTRIBUTE` key in your `filter_query`.

```json
{
  "story": {
    // default story object fields
    "content": {
      "component": "post",
        // attributes you define yoruself are located here
      "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
      "title": "My second title",
      "author": "22f4fb1b-50b3-4bf2-816e-7d589e307421",
      "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod",
      "schedule": "2018-08-31 21:59",
      "description": "Description of the third",
      "categories": [
        "9aa72a2f-04ae-48df-b71f-25f53044dc97"
      ]
    }
  }
}
```
