---
title: Filter Stories by Release
---

You can filter stories in a release using their unique `ID` and the `in_release` parameter in [Stories object](https://www.storyblok.com/docs/api/management#core-resources/stories/retrieve-multiple-stories).

;examplearea

Endpoint

```bash
GET /v1/spaces/:space_id/stories?in_release=:release_id
```
