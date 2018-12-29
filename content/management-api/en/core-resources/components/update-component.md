---
category: Core Resources
title: Update a Component
position: 250
---

Send the component object with updated values to our backend using the PUT method. An update on component will not take over already inserted values, make sure to also update your stories that contain this component.

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/components/4123" httpMethod="PUT" :requestObject='{"component":{"name":"teaser","id":4123,"display_name":"Teaser Updated","schema":{"title":{"type":"text","pos":0},"image":{"type":"image","pos":1},"description":{"type":"textarea","pos":2}},"is_root":false,"is_nestable":true}}'></RequestExample>

You will receive a fully loaded, updated [component object](#core-resources/components/the-component-object) as response.
