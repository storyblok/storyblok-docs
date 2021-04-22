---
title: Management API Reference
sidebarTitle: Introduction
---

The Storyblok Management API is organized around REST. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP query parameters and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API key in any public website's client-side code). JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.

The requests in the right sidebar are designed to work as is. The sample requests can be performed using your own API Authentication Token that you can obtain from your profile [in the Storyblok application](http://app.storyblok.com/#!/me/account). 

;examplearea

## API Libraries

Official libraries for the Storyblok Management API are [available in several languages](https://www.storyblok.com/getting-started). Community-supported libraries are also available for additional languages.

Base URL

```bash
https://mapi.storyblok.com
```