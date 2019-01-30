---
category: Core Resources
title: Field types
startpage: true
position: 1800
---


We built Storyblok with a robust and flexible plugin system to give our customers the power to extend the editor with custom fields like a color picker or a google maps location selector. It’s basically a Vue.js 2.5.2 component extended with a few helpers in the ‘window.Storyblok.plugin’ variable.

This endpoint lets you push and pull the code of your field type via the management api and can be used to automatically deploy a plugin.

Read more about [field type development](https://www.storyblok.com/docs/Guides/Creating-a-field-type-plugin).

;examplearea

Endpoint

```bash
GET /v1/field_types/:id
```


