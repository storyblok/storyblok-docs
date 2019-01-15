---
category: Topics
title: Authentication
startpage: true
position: 20
---

Authenticate your account by including your access token in API requests. You can manage your API tokens in the Dashboard of each space. In your Space Dashboard at app.storyblok.com you will be able to generate two types of tokens

- Public: Allows access to your published content entries: `version=published` 
- Preview: Allows access to the draft and published content entries:  `version=draft` and `version=published`

**Public** and **Preview** tokens are **read only** and do not allow you or others to write or delete entries in your space. The public token can be published. All tokens can be revoked at any point of time, you are able to create multiple tokens of the same type to grant access for specific use-cases. For CRUD operations you can have a look at the Management API documentation.

If you're using the Content Staging (eg. Release and Schedule) feature you can also create Public and Preview tokens for each staging environment.

;examplearea

Example Request

<div v-show="$store.state.codelang == 'javascript'">

```javascript
// npm install storyblok-js-client
const StoryblokClient = require('storyblok-js-client')

// init with access token
let Storyblok = new StoryblokClient({
  accessToken: 'wANpEQEsMYGOwLxwXQ76Ggtt',
  cache: {
    clear: 'auto',
    type: 'memory'
  }
})
```

</div> 

<RequestExample url="https://api.storyblok.com/v1/cdn/stories?token=wANpEQEsMYGOwLxwXQ76Ggtt"></RequestExample>

To perform a GET request with your token append the query parameter **token** with your **preview** or **public** token as shown in the example above.