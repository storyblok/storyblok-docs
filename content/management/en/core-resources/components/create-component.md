---
title: Create a Component
---

You can set most of the fields that are available in the component object, below we only list the properties in the example and possible required fields. 

| Property | Description |
|---|---|
| `component` | The [component object](#core-resources/components/the-component-object) |
| `component[name]` | Technical name used for `component` property in entries **required** |
| `component[display_name]` | Name that will be used in the editor interface |
| `component[image]` | URL to the preview image, if uploaded |
| `component[preview]` | Define the field that should be used for preview in the interface |
| `component[is_root]` | Component should be usable as a Content Type |
| `component[is_nestable]` | Component should be insertable in `blocks` field type fields |
| `component[component_group_uuid]` | The component group uuid of the component |
| `component[schema]` | Key value pairs of [component fields](#core-resources/components/the-component-field-object) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/components/" httpMethod="POST" :requestObject='{"component":{"name":"teaser","display_name":"Teaser","schema":{"title":{"type":"text","pos":0},"image":{"type":"image","pos":1}},"is_root":false,"is_nestable":true}}'></RequestExample>

You will receive a fully loaded [component object](#core-resources/components/the-component-object) as response.
