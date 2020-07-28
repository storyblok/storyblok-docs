---
title: Create a Release
---

| Property | Description |
|---|---|
| `release` | Your [release object](#core-resources/releases/object) **required** |
| `release[name]` | Name of the release |
| `release[release_at]` | Date to deploy the release (Format: YYYY-mm-dd HH:MM) |
| `release[branches_to_deploy]` | Ids of pipeline stages (called branches before) to deploy the release to  |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/releases/" httpMethod="POST" :requestObject='{"release":{
  "name":"Summer Special",
  "release_at":"2025-01-01 01:01",
  "branches_to_deploy":[123, 456]
}}'></RequestExample>

You will receive a [release object](#core-resources/release/object) as response.
