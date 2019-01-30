---
category: Core Resources
title: Create a Field Type
position: 1840
---

| Property | Description |
|---|---|
| `field_type` | Your field type object |
| `field_type[name]`  | Name is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/field_types/" httpMethod="POST" :requestObject='{"field_type":{"name":"my-geo-selector"}}'></RequestExample>

You will receive a [field type object](#core-resources/field-types/the-field-type-object) as response.
