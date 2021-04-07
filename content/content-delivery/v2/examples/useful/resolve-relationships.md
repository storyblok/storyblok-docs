---
title: Load with resolved relationships
---

Resolve relationships to other Stories (in the first level of nesting) of a `multi-option` or `single-option` field-type. Provide the field key(s) as comma separated string to resolve specific fields. 

Example: `resolve_relations=categories`.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/?resolve_relations=categories&starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Response

```json
{
  "stories": [
    {
      "name": "My third post",
      "created_at": "2018-04-24T11:57:29.302Z",
      "published_at": "2018-12-10T13:39:31.999Z",
      "id": 107350,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "content": {
        "_uid": "98cccd01-f807-4494-996d-c6b0de2045a5",
        "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
        "title": "My second title",
        "author": "n4a2123-e323-43ca-ae59-5cd7d38683cb",
        "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor incididunt ut **labore et dolore magna aliqua**.",
        "schedule": "2018-08-31 21:59",
        "component": "post",
        // resolved relationship by including the story 
        // object of the reference entry
        "categories": [
          {
            "name": "Design",
            "created_at": "2018-04-24T11:59:26.578Z",
            "published_at": "2018-04-24T12:07:46.278Z",
            "id": 107357,
            "uuid": "9aa72a2f-04ae-48df-b71f-25f53044dc97",
            "content": {
              "_uid": "6fc4a8e1-52a1-46b3-85b2-a1a93452c97a",
              "name": "Design",
              "image": "//a.storyblok.com/f/44203/1177x841/8c69867d6e/undraw_lighthouse2_1ebd.png",
              "component": "category"
            },
            "slug": "design",
            "full_slug": "categories/design",
            ...
          }
        ],
        "description": "Description of the third"
      },
      "slug": "my-third-post",
      "full_slug": "posts/my-third-post",
      ...
    },
    { ... }
  ]
}
```