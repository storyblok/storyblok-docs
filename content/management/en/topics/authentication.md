---
title: Authentication
---

Authenticate your account by including your personal access token in API requests. The easiest way to get started is to create an OAuth2 token using the Storyblok app. Go to the [My Account section](https://app.storyblok.com/#!/me/account) at app.storyblok.com and click on “Generate new token”.

Your personal access token will grant anyone how obtains it with access to all associated spaces for your account, so make sure to never expose it on the client side or commit it in your source code. Use strategies like environment variables to secure your personal access token. If you have exposed your personal access token, make sure to delete it immediately from the [My Account section](https://app.storyblok.com/#!/me/account).

Using an OAuth2 token, a username and password doesn’t need to be permanently stored and you can revoke access at any time.

;examplearea

<div v-show="$store.state.technology == 'bash'">

Example Request

```bash
curl -H "Authorization: YOUR_OAUTH_TOKEN" https://mapi.storyblok.com/
```

</div>
<div v-show="$store.state.technology == 'javascript'">

Example Request

```javascript
// npm install storyblok-js-client
const StoryblokClient = require('storyblok-js-client')

// Initialize the client with the oauth token
const Storyblok = new StoryblokClient({
  oauthToken: 'YOUR_OAUTH_TOKEN'
})
```

</div> 
