---
title: Publish a Story
---

Publishing a story besides using the `publish` property via creation, can be done by using a GET request for each story you want to publish.

| Property | Description |
|---|---|
| `release_id` | Numeric ID of release (optional) |
| `lang` | Language code to publish the story individually (optional, must be enabled in the space settings) |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/2141/publish" httpMethod="GETOAUTH"></RequestExample>
