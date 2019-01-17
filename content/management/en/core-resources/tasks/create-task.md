---
category: Core Resources
title: Create a Task
position: 1040
---

| Property | Description |
|---|---|
| `task` | Your full [task object](#core-resources/tasks/the-task-object) |
| `task[name]`  | Name is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/tasks/" httpMethod="POST" :requestObject='{"task":{"name":"My Task Name","task_type":"webhook","webhook_url":"https://www.storyblok.com"}}'></RequestExample>

You will receive a fully loaded [task object](#core-resources/tasks/the-task-object) as response.