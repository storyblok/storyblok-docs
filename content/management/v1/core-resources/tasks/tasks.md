---
title: Tasks
---

You can create a Task to send requests to one of your custom endpoints. This lets you trigger a build for production or other common use-cases like product syncs or  publishing tasks. Future updates will also bring scheduled and timed tasks so you can handle all your tasks at one place.

The payload Storyblok will send to your webhook url as POST request:

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


