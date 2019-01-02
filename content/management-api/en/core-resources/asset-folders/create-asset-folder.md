---
category: Core Resources
title: Create an Asset Folder
position: 440
---

| Property | Description |
|---|---|
| `asset_folder` | Your full [asset folder object](#core-resources/asset-folders/the-asset-object) |
| `asset_folder[name]`  | Name is **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/asset_folders/" httpMethod="POST" :requestObject='{"asset_folder":{"name":"Header Images"}}'></RequestExample>

You will receive an [asset folder object](#core-resources/asset-folders/the-asset-object) as response.