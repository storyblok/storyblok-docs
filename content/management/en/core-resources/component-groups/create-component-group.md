---
title: Create a Component Group
---

| Property | Description |
|---|---|
| `component_group` | Your full [component group object](#core-resources/component-groups/the-component-group-object) |
| `component_group[name]` | The component group name is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/component_groups/" httpMethod="POST" :requestObject='{"component_group":{"name":"Teasers"}}'></RequestExample>

You will receive a fully loaded [component group object](#core-resources/component-groups/the-component-group-object) as response.
