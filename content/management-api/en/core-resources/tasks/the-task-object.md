---
category: Core Resources
title: The Task Object
position: 1010
---

| Property | Description |
|---|---|
| `id` | Numeric ID of your task |
| `name` | Given name of your task |
| `description` | A brief description of your task for your editors |
| `task_type` | Default: `webhook`; Currently available: `webhook` |
| `last_execution` | Date and time of last execution (Format: `YYYY-mm-dd HH:MM`) |
| `webhook_url` | URL of webhook that should be called when tasks is being executed |
| `last_response` | Last execution response log |
| `lambda_code` | Beta: Lambda function code |


;examplearea

Example Object

```json
{
  "task": {
    "id": 124,
    "name": "My Task Name",
    "description": null,
    "task_type": "webhook",
    "last_execution": null,
    "lambda_code": null,
    "last_response": null,
    "webhook_url": "https://www.storyblok.com"
  }
}
```