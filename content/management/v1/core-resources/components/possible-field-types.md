---
title: Possible field types
---

| Field Type | Description |
|---|---|
| `bloks` | Blocks: a field to interleave other components in your current one |
| `text` | Text: a text field |
| `textarea` | Textarea: a text area |
| `markdown` | Markdown: write markdown with a text area and additional formatting options |
| `number` | Number: a number field |
| `datetime` | Date/Time: a date- and time picker |
| `boolean` | Boolean: a checkbox - true/false |
| `options` | Multi-Options: a list of checkboxes |
| `option` | Single-Option: a single dropdown |
| `asset` | Asset: Single asset (images, videos, audio, and documents) |
| `multiasset` | Multi-Assets: (images, videos, audio, and documents) |
| `multilink` | Link: an input field for internal linking to other stories |
| `section` | Group: no input possibility - allows you to group fields in sections |
| `custom` | Plugin: Extend the editor yourself with a color picker or similar - Check out: [Creating a Storyblok field type plugin](https://www.storyblok.com/docs/Guides/Creating-a-field-type-plugin) |
| `image` | Image (old): a upload field for a single image with cropping possibilities |
| `file` | File (old): a upload field for a single file |

;examplearea

Example Object

```json
"field_key": {
  ...
  "type": "text", // <-- field type
  ...
}
```
