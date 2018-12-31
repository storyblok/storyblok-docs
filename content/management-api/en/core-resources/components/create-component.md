---
category: Core Resources
title: Create a Component
position: 240
---

You can set most of the fields that are available in the component object, below we only list the properties in the example and possible required fields. 

| Property | Description |
|---|---|
| `component[name]` | T he component name is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/components/" httpMethod="POST" :requestObject='{"component":{"name":"teaser","display_name":"Teaser","schema":{"title":{"type":"text","pos":0},"image":{"type":"image","pos":1}},"is_root":false,"is_nestable":true}}'></RequestExample>

You will receive a fully loaded [component object](#core-resources/components/the-component-object) as response.
