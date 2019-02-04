---
title: Update a Field Type
---

| Property | Description |
|---|---|
| `field_type` | Your full field type object |
| `field_type[body]` | The uncompiled javascript code of the field type |
| `field_type[space_ids]` | Array of space ids where the field type is assigned to |
| `publish` | If this parameter is not empty the field type will be published |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/field_types/124" httpMethod="PUT" :requestObject='{"field_type":{"body":"var Fieldtype = {}"}}'></RequestExample>

You will receive a [field type object](#core-resources/field-types/the-field-type-object) as response.
