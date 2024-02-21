---
title: Links
---

Links are another representation of your content entries, eg. Stories. With the Links format you can resolve `uuid`s of stories. The links object returned consists of multiple keys, where each key is the `uuid` of one Story. In the link object you will have access to basic information to identify, load or already display a link to that resource. 

This endpoint is paginated by default. In order to receive more than the default of `25` link entries, the `per_page` parameter can be set to a maximum of `1000`. Please refer to [Pagination](https://www.storyblok.com/docs/api/content-delivery/v2#topics/pagination) for further information.

<strong>Important:</strong> For spaces created before May 9th, 2023, the links endpoint is <i>not</i> paginated by default. To enable pagination, set the `paginated` parameter to `1`.

;examplearea

Endpoint

```bash
GET /v2/cdn/links/
```
