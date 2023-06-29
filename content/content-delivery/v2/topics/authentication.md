---
title: Authentication
---

Authenticate your account by including your access token in API requests. You can manage your API tokens in the Dashboard of each space. In your Space Dashboard at app.storyblok.com you will be able to generate two types of tokens

- Public: Allows access to your published content entries: `version=published` 
- Preview: Allows access to the draft and published content entries:  `version=draft` and `version=published`

**Public** and **Preview** tokens are **read only** and do not allow you or others to write or delete entries in your space. The public token can be published. All tokens can be revoked at any point in time. You can also create multiple tokens of the same type to grant access for specific use-cases. For CRUD operations checkout the [Management API documentation](https://www.storyblok.com/docs/api/management).

If you're using the Content Staging (eg. Release and Schedule) feature you can also create Public and Preview tokens for each staging environment.

;examplearea

Example Request

<div v-show="$store.state.technology == 'javascript'">

```javascript
// npm install storyblok-js-client
const StoryblokClient = require('storyblok-js-client')

// init with access token
const Storyblok = new StoryblokClient({
  accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
```

or use directly as parameter

</div> 

<RequestExample url="https://api.storyblok.com/v2/cdn/stories?token=wANpEQEsMYGOwLxwXQ76Ggtt" :keepToken="true"></RequestExample>

To perform a GET request with your token append the query parameter **token** with your **preview** or **public** token as shown in the example above.
