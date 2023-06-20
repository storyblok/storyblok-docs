---
title: Create an Asset Folder
---

| Property | Description |
|---|---|
| `asset_folder` | Your full [asset folder object](#core-resources/asset-folders/the-asset-object) |
| `asset_folder[name]`  | Name is **required** |
| `asset_folder[parent_id]`  | The identifier of the parent folder. The `parent_id` parameter is **optional**. If the `parent_id` is omitted or set to null, the folder is created at root level |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/asset_folders/" httpMethod="POST" :requestObject='{"asset_folder":{"name":"Header Images"}}'></RequestExample>

You will receive an [asset folder object](#core-resources/asset-folders/the-asset-object) as response.
