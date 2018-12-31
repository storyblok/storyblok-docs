---
category: Core Resources
title: Tasks
startpage: true
position: 1000
---

You can create a Tasks that editor can press to send requests to one of your custom endpoints to either trigger a build for production or other common use-cases like product syncs or other publishing tasks. Future updates will also bring scheduled and timed tasks so you can handle all your tasks at one place.

The payload Storyblok will send to your webhook url:

```json
{
  "task": {
    "id": 214, 
    "name": "My Task Name"
  }, 
  "space_id": 606
}
```

;examplearea

Endpoint

```bash
GET /v1/spaces/:space_id/tasks/:task_id
```


