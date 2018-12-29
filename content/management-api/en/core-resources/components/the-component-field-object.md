---
category: Core Resources
title: The Component Field
position: 220
---

Not every property will be used for every field type; some may only effect specific types.

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `type` | The type of your field |
| `pos` | Position of field in component |
| `translateable` | Boolean; Can field be translated |
| `required` | Boolean; Is field required |
| `regex` | Client Regex validation for the field |
| `description` | Description shown in the editor interface |
| `default_value` | Default value for the field; Can be an escaped JSON object |
| `can_sync` | Advanced usage to sync with field in preview |
| `rtl` | Boolean; Enable global RTL for this field |
| `no_translate` | Boolean; Should be excluded in translation export |

// TODO: Add other options

;examplearea

Example Object

```json
// name of the field as key in schema property in your component
"title": {
  "type": "text",
  "pos": 0,
  "translatable": true,
  "required": true,
  "regex": "",
  "description": "Description for the field",
  "display_name": "",
  "default_value": "",
  "can_sync": false,
  "rtl": false,
  "no_translate": false
}
```