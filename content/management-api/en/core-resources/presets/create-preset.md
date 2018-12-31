---
category: Core Resources
title: Create a Preset
position: 1720
---

| Property | Description |
|---|---|
| `preset` | Your full preset object |
| `preset[name]`  | Name is **required** |
| `preset[component_id]`  | Use numeric component id for referencing |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/presets/" httpMethod="POST" :requestObject='{"preset":{"name":"Teaser with filled headline","preset":{"headline":"This is a default value for the preset!"},"component_id":62}}'></RequestExample>

You will receive a fully loaded [preset object](#core-resources/presets/the-preset-object) as response.