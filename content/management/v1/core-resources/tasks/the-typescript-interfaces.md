---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPITask
 * @description Storyblok Content Management API Task Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/tasks/tasks
 */
export interface ISbContentMAPITask {
	task: {
		id?: number
		name?: string
		description?: string
		task_type?: string | 'webhook'
		last_execution?: string
		webhook_url?: string
		last_response?: string
		lamba_code?: string
	}
}

// Aliases
export type Task = ISbContentMAPITask
```

;examplearea

Example on how use the <strong>Task's</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
import { ISbP2Params } from 'storyblok-js-client/dist/types/interfaces';
import { Task } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPITasks';

const payload:ISbP2Params<Task> = {
  task: {
		name: 'My Task Name',
		task_type: 'webhook',
		webhook_url: 'https://www.storyblok.com'
	}
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/tasks/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```