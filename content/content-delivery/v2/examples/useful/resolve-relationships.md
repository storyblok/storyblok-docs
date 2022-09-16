---
title: Load with resolved relationships
---

Resolve relationships to other Stories (in the first level of nesting) of a `multi-option` or `single-option` field-type. Provide the field key(s) as comma separated string to resolve specific fields. 

Example: `resolve_relations=categories`.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/stories/?resolve_relations=categories&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{
  "stories": [
    {
      "id": 107350,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "name": "My third post",
      "slug": "my-third-post",
      "full_slug": "posts/my-third-post",
      "created_at": "2018-04-24T11:57:29.302Z",
      "published_at": "2018-12-07T01:31:36.134Z",
      "first_published_at": "2018-08-07T09:40:13.000Z",
      "content": {
        "component": "post",
        // fields you define yourself are here
        // those below we defined for the examples
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        "author": "22f4fb1b-50b3-4bf2-816e-7d589e307421",
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod",
        "schedule": "2018-08-31 21:59",
        "description": "Description of the third",
        "categories": [
          "9aa72a2f-04ae-48df-b71f-25f53044dc97"
        ]
      },
      "position": -20,
      "tag_list": [ ],
      "is_startpage": false,
      "parent_id": 107348,
      "group_id": "d5ea8520-1296-40b7-8360-894461fdc5b6",
      "alternates": [ ],
      "translated_slugs": [ ],
      "release_id": null,
      "lang": "default"
    },
    {
      "id": 107349,
      "uuid": "a91440ee-fd57-4ee3-83cf-d49d217ae919",
      "name": "My second post",
      "slug": "my-second-post",
      "full_slug": "posts/my-second-post",
      "created_at": "2018-04-24T11:57:29.283Z",
      "published_at": "2018-07-26T12:38:17.025Z",
      "first_published_at": "2018-07-26T12:38:17.025Z",
      "content": {
        "component": "post",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        "author": "c47be9f0-47c3-4315-a95a-550f0c560eb5",
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do...",
        "categories": [
          "5db2e929-6d3d-4564-982e-fa8513b0e5de"
        ],
        "description": "Description of the second"
      },
      "sort_by_date": null,
      "position": -10,
      "tag_list": [ ],
      "is_startpage": false,
      "parent_id": 107348,
      "group_id": "854c3d1f-5d7f-4785-92ee-620a7c6ca7ee",
      "alternates": [ ],
      "translated_slugs": [ ],
      "release_id": null,
      "lang": "default"
    },
    ...
  ],
  "cv": 1560257296,
  "rels": [],
  "links": []
}
```
