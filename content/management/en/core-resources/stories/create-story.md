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
| `publish` | Should the story be published immediately (set 1 to publish) |

You can save any data in the `story[content]` attribute, and use it in the editor, as long as you follow these rules:

- The `story[content]` property needs to be an object at the root level
- Every object inside needs to have the property `"component":"your_components_name"`
- Only nest components using arrays, except if you want to build a custom field type

This lets you import data and define the schema of your components afterwards in the interface where necessary.

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/stories/" httpMethod="POST" :requestObject='{"story":{"name":"Story Name","slug":"story-name","content":{"component":"page","body":[]}},"publish":1}'></RequestExample>

You will receive a fully loaded [story object](#core-resources/stories/the-story-object) as a response.
