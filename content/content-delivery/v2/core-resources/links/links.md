---
title: Links
---

Links are another representation of your content entries, eg. Stories. With the Links format you can resolve `uuid`s of stories. The links object returned consists of multiple keys, where each key is the `uuid` of one Story. In the link object you will have access to basic information to identify, load or already display a link to that resource. 
It's important to note that in order to return more than 25 entries, you have to use [pagination](https://www.storyblok.com/docs/api/content-delivery/v2#topics/pagination).

;examplearea

Endpoint

```bash
GET /v2/cdn/links/
```
