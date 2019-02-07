---
title: Create a Datasource Entry
---

| Property | Description |
|---|---|
| `datasource_entry` | Your full [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) |
| `datasource_entry[name]`  | Name is **required** |
| `datasource_entry[value]`  | Value is **required** |
| `datasource_entry[datasource_id]`  |  Datasource Id is **required** |


;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasource_entries/" httpMethod="POST" :requestObject='{"datasource_entry":{"name":"newsletter_text","value":"Subscribe to our newsletter to make sure you don’t miss anything.", "datasource_id": 12345}}'></RequestExample>

You will receive a [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) as response.
