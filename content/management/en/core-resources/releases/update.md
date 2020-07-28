---
title: Update a Release
---

| Property | Description |
|---|---|
| `release` | Your [release object](#core-resources/releases/object) **required** |
| `release[name]` | Name of the release |
| `release[release_at]` | Date to deploy the release (Format: YYYY-mm-dd HH:MM) |
| `release[branches_to_deploy]` | Ids of branches to deploy the release to |
| `do_release` | If this parameter is included in the request the release will be deployed |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/releases/123" httpMethod="PUT" :requestObject='{"releases":{
  "name":"Summer Special",
  "release_at":"2025-01-01 01:01",
  "branches_to_deploy":[123, 456]
}}'></RequestExample>

You will receive a [release object](#core-resources/releases/object) as response.
