---
title: Update a Datasource Entry
---

| Property | Description |
|---|---|
| `id` | Numeric id of the datasource entry |
| `datasource_entry` | Your full [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) |
| `datasource_entry[name]`  | Name is **required** |
| `datasource_entry[value]`  | Value is **required** |
| `datasource_entry[dimension_value]`  | Value of the key in the provided `dimension_id` (optional) |
| `dimension_id`  | Numeric dimension id (optional, but required to set a `dimension_value`) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasource_entries/52" httpMethod="PUT" :requestObject='{"datasource_entry":{"id":52,"name":"newsletter_text","value":"Subscribe to our updated newsletter to make sure you don’t miss anything."}}'></RequestExample>

You will receive a [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) as response.

Example Request for setting a value for specific dimension

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasource_entries/52" httpMethod="PUT" :requestObject='{"datasource_entry":{"id":52,"name":"newsletter_text","value":"Subscribe to our updated newsletter to make sure you don’t miss anything.","dimension_value":"Abonnieren Sie unseren Newsletter um sicher zu sein nie etwas zu verpassen!","datasource_id":"112"},"dimension_id":142}'></RequestExample>

You will receive a [datasource entry object](#core-resources/datasource-entries/the-datasource-entry-object) as response. The `dimension_id` is available in your [datasource object](#core-resources/datasources/the-datasource-object)
