---
category: Topics
title: Content Delivery API Reference
sidebarTitle: Introduction
startpage: true
position: 10
---

The Storyblok API is organized around REST. Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors. We use built-in HTTP features, like HTTP query parameters and HTTP verbs, which are understood by off-the-shelf HTTP clients. We support cross-origin resource sharing, allowing you to interact securely with our API from a client-side web application (though you should never expose your secret API key in any public website's client-side code, tokens found on the dashboard however are read only and therefore fine to use in a client-side code). JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.

To make the API as explorable as possible, accounts have **draft** versions and **published** version of API tokens. To access the **draft** version of your content you can use the **preview** token, and for receiving **published** content you can use the **public** token. The **preview** token is able to also load the **published** content. To switch between those versions you can append the query parameter `version=draft/published` and using the appropriate token to perform a draft or published version call.

The requests in the right sidebar are designed to work as is. The sample requests are performed using a preview API token of a test space with demo content.

;examplearea

# API Libraries

Official libraries for the Storyblok Content Delivery API are [available in several languages](https://www.storyblok.com/getting-started). Community-supported libraries are also available for additional languages.

Base URL

```bash
https://api.storyblok.com
```