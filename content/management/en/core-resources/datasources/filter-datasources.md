---
title: Filter Datasources by Slug
---

Returns an array of datasource objects. This endpoint is [paged](#topics/pagination) and can be filtered by slug.  The query parameter is `search=string` 

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/datasources/?search=substring-of-slug" httpMethod="GETOAUTH"></RequestExample>

You will receive an array of [datasource objects](#core-resources/datasources/the-datasource-object) as response.
