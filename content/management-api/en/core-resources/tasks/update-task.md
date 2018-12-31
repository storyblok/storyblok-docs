---
category: Core Resources
title: Update a Task
position: 1030
---

| Property | Description |
|---|---|
| `task` | Your full task object |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/tasks/124" httpMethod="PUT" :requestObject='{"task":{"name":"My Updated Task Name","task_type":"webhook","webhook_url":"https://www.storyblok.com"}}'></RequestExample>

You will receive a fully loaded [task object](#core-resources/tasks/the-task-object) as response.