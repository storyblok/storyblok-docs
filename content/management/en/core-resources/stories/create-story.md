---
title: Create a Story
---

You can set most of the fields that are available in the story object, below we only list the properties in the example and the possible required fields. Stories are not published by default. If you want to create a published Story add the parameter `publish` with the value `1`. 

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
| `story[translated_slugs_attributes]` | Add translated slugs/names if you have the "Translatable slugs" app installed. Example: `[{lang: "de", slug: "startseite", name: "Startseite"}]`. |
| `publish` | Should the story be published immediately (set 1 to publish) |
| `release_id` | Numeric ID of release (optional) |

You can save any data in the `story[content]` attribute, and use it in the editor, as long as you follow these rules:

- The `story[content]` property needs to be an object at the root level
- Every object inside needs to have the property `"component":"your_components_name"`
- Only nest components using arrays, except if you want to build a custom field type

This lets you import data and define the schema of your components afterwards in the interface where necessary.

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/" httpMethod="POST" :requestObject='{"story":{"name":"Story Name","slug":"story-name","content":{"component":"page","body":[]}},"publish":1}'></RequestExample>

You will receive a fully loaded [story object](#core-resources/stories/the-story-object) as a response.
