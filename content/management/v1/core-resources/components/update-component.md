---
title: Update a Component
---

Send the component object with updated values to our backend using the PUT method. An update on component will not take over already inserted values, make sure to also update your stories that contain this component.

| Property | Description |
|---|---|
| `component` | Your full [component object](#core-resources/components/the-component-object) |
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

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/components/4123" httpMethod="PUT" :requestObject='{"component":{"name":"teaser","id":4123,"display_name":"Teaser Updated","schema":{"title":{"type":"text","pos":0},"image":{"type":"image","pos":1},"description":{"type":"textarea","pos":2}},"is_root":false,"is_nestable":true}}'></RequestExample>

You will receive a fully loaded, updated [component object](#core-resources/components/the-component-object) as response.
