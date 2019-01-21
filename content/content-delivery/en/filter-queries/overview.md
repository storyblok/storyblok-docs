---
category: Filter Queries
title: Filter Queries
sidebarTitle: Operations
showChildren: true
startpage: true
position: 1000
---

With the filter_query you're able to filter by specific attribute(s) of your stories. The filter_query parameter accepts an `attribute` and an `operation` key.  

| Operation | Description |
|----|---------|
| [`in`](#filter-queries/operation-in) | Matches exactly **one** value |
| [`not_in`](#filter-queries/operation-not-in) | Matches all without the given value |
| [`in_array`](#filter-queries/operation-in-array) | Matches **any** value of given array |
| [`all_in_array`](#filter-queries/operation-all-in-array) | Must match **all** values of given array |
| [`gt-date`](#filter-queries/operation-gt-date) | Greater than date (Format: `YYYY-mm-dd HH:MM`) |
| [`lt-date`](#filter-queries/operation-lt-date) | Less than date (Format: `2018-03-03 10:00`) |
| [`gt-num`](#filter-queries/operation-gt-num) | Greater than numeric value |
| [`lt-num`](#filter-queries/operation-lt-num) | Less than numeric value |

You can find one example for each filter query in the description page for each operation, and examples that combine multiple filters in the [filter examples](#examples/filtering/filters) section.

;examplearea

Endpoint

```bash
GET /v1/cdn/stories/?filter_query[ATTRIBUTE][OPERATION]=VALUE,...
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