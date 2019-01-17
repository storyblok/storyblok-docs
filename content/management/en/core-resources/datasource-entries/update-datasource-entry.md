---
category: Core Resources
title: Update a Datasource Entry
position: 750
---

| Property | Description |
|---|---|
| `datasource_entry` | Your full [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) |
| `datasource_entry[name]`  | Name is **required** |
| `datasource_entry[value]`  | Value is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasource_entries/52" httpMethod="PUT" :requestObject='{"datasource_entry":{"id":52,"name":"newsletter_text","value":"Subscribe to our updated newsletter to make sure you don’t miss anything."}}'></RequestExample>

You will receive a [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) as response.