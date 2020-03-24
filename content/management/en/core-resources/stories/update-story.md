---
title: Update a Story
---

Can be used to build migrations, updates if you changed your component structure, or if you only need to do a bulk action on all your content items. If you want to publish your story immediately add the parameter publish with the value 1 to the object.

| Property | Description |
|---|---|
| `story` | Your full [story object](#core-resources/stories/the-story-object) |
| `story[name]` | Name of the story is **required** |
| `story[slug]` | Slug is **required**; Used to identify the story (can not include `/`create stories with `is_folder` and required path segments and `parent_id` link instead) |
| `story[content]` | Object structure for your content |
| `story[default_root]` (required*) | Default content type/root component. (*Required if `is_folder` is `true`) |
| `story[is_folder]` | If `true` a folder will be created instead of a story |
| `story[parent_id]` | The id of the parent |
| `story[disble_fe_editor]` | Is side by side editor disabled for all entries in folder (true/false) |
| `story[path]` | Given real path, used in the preview editor |
| `story[is_startpage]` | Is startpage of current folder (true/false) |
| `story[position]` | Integer value of the position |
| `story[first_published_at]` | First publishing date (Format: YYYY-mm-dd HH:MM) |
| `story[translated_slugs_attributes]` | Add/modify/delete translated slugs/names if you have the "Translatable slugs" app installed. Example: `[{lang: "de", slug: "startseite", name: "Startseite"}]`. To edit existing slugs add the `id` to the object. To delete an item add `_destroy` with the value `1` to the object. |
| `force_update` | If '1' it will overwrite a locked story |
| `release_id` | Numeric ID of release (optional) |
| `publish` | If '1' it will publish the story, 'publish' must be omitted if publication is not desired |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/2141" httpMethod="PUT" :requestObject='{"story":{"name":"Story Name","slug":"story-name","id":2141,"content":{"component":"page","body":[]}},"force_update": 1, "publish": 1}'></RequestExample>

You will receive a fully loaded [story object](#core-resources/stories/the-story-object) as response.
