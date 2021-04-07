---
title: Update a Preset
---

| Property | Description |
|---|---|
| `preset` | Your full [preset object](#core-resources/presets/the-preset-object) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/presets/1814" httpMethod="PUT" :requestObject='{"preset":{"id":1814,"name":"Teaser with headline and image","preset":{"headline":"This is a default value for the preset!","image":"//a.storyblok.com/f/606/..."},"component_id":62}}'></RequestExample>

You will receive a fully loaded [preset object](#core-resources/presets/the-preset-object) as response.