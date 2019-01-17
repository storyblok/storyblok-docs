---
category: Core Resources
title: Spaces
startpage: true
position: 800
---

A space is a content repository. Think of it as a place to keep all the content related to one project. Each space has its own components, datasources, assets, environments, domains, collaborators, and permissions.

If you want to launch several websites or apps, the best way to go is to create a separate space for each project.

If your goal is to deliver the same content to multiple platforms (a common set would be the web, iOS, and an Android app), then you should use one space and create multiple API keys to deliver the content. You can find the API keys in the space dashboard.

;examplearea

Endpoint

```bash
GET /v1/spaces/:space_id
```