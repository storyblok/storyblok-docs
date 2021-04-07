---
title: Load story localized by uuid
---

Appending the query parameter `language` in combination with `find_by=uuid` allows you to load localized versions of your entries without knowing its slug. If you know the slug of your content entry you can simply prepend the language code, eg. `/posts/my-first-post` would be `/de/posts/my-first-post`. As you only have a UUID by hand, and you do know the slug you can use the language parameter instead.

;examplearea

Example Request

<RequestExample url="https://api.storyblok.com/v1/cdn/stories/ac0d2ed0-e323-43ca-ae59-5cd7d38683cb?token=ask9soUkv02QqbZgmZdeDAtt&find_by=uuid&language=de"></RequestExample>

Example Response

```json
{  
  "story": {
    "name": "My third post",
    "created_at": "2018-04-24T11:57:29.302Z",
    "published_at": "2018-12-10T13:39:31.999Z",
    "id": 107350,
    "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
    "lang": "de",
    "content": {
      "_uid": "98cccd01-f807-4494-996d-c6b0de2045a5",
      "image": "//a.storyblok.com/f/44162/1500x500/68b522b06d/1500x500.jpeg",
      "title": "Mein zweiter Titel",
      "author": "n4a2123-e323-43ca-ae59-5cd7d38683cb",
      "content": "Lorem ipsum dolor sit amet, *consectetur* adipisicing elit, sed do eiusmod\ntempor incididunt ut **labore et dolore magna aliqua**.",
      "schedule": "2018-08-31 21:59",
      "component": "post",
      // resolved relationship by including the story 
      // object of the reference entry
      "categories": [
        ...
      ],
      "description": "Beschreibung vom zweiten Beitrag"
    },
    "slug": "my-third-post",
    "full_slug": "posts/my-third-post",
    ...
  }
}
```
