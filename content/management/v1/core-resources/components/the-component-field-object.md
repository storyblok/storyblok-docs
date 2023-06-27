---
title: The Component Field
---

Not every property will be used for every field type; some may only effect specific types.

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `type` | The type of your field |
| `pos` | Position of field in component |
| `translatable` | Can field be translated; Default: false |
| `required` | Is field required; Default: false |
| `regex` | Client Regex validation for the field |
| `description` | Description shown in the editor interface |
| `default_value` | Default value for the field; Can be an escaped JSON object |
| `can_sync` | Advanced usage to sync with field in preview; Default: false |
| `preview_field` | Is used as instance preview field below component name in bloks types |
| `no_translate` | Boolean; Should be excluded in translation export |
| `rtl` | Boolean; Enable global RTL for this field <br>Only for type: *markdown*, *text*, *textarea* |
| `exclude_from_merge` | Excludes a specific blok type from being merged during a merge action *only works with dimensions app* |
| `exclude_from_overwrite` | Excludes a blok from being overwritten during overwrite action *only works with dimensions app* |
| `force_merge` | Overwrite a blok during merge action *only works with dimensions app* |
| `rich_markdown` | Enable rich markdown view by default (true/false); <br>Only for type: *markdown* |
| `keys` | Array of field keys to include in this section; <br>Only for type: *section* |
| `field_type` | Name of the custom field type plugin; <br>Only for type: *custom* |
| `source` | Possible values: `undefined`: Self; `internal_stories`: Stories; `internal`: Datasource; `external`: API Endpoint in Datasource Entries Array Format; <br>Only for type: *options*, *option*, *custom*;  |
| `use_uuid` | Default: true; available in `option` and `source=internal_stories` |
| `folder_slug` | Filter on selectable stories path; Effects editor only if `source=internal_stories`; In case you have a multi-language folder structure you can add the '{0}' placeholder and the path will be adapted dynamically. Examples: *"{0}/categories/"*, *{0}/{1}/categories/* |
| `datasource_slug` | Define selectable datasources string; Effects editor only if `source=internal` |
| `external_datasource` | Define external datasource JSON Url; Effects editor only if `source=external` |
| `options` | Array of datasource entries `[{name:"", value:""}]`; Effects editor only if `source=undefined` | 
| `image_crop` | Activate force crop for images: (true/false); <br>Only for type: *image* |
| `keep_image_size` | Keep original size: (true/false); <br>Only for type: *image* |
| `image_width` | Define width in px or width ratio if `keep_image_size` is enabled; <br>Only for type: *image* |
| `image_height` | Define height in px or height ratio if `keep_image_size` is enabled; <br>Only for type: *image* |
| `asset_folder_id` | Default asset folder numeric id to store uploaded image of that field; <br>Only for type: *image* |
| `add_https` | Prepends `https:` to stop usage of relative protocol; <br>Only for type: *image*, *file* |
| `restrict_components` | Activate restriction nestable component option; Default: false; <br>Only for type: *bloks* |
| `maximum` | Maximum amount of added bloks in this blok field; <br>Only for type: *bloks* |
| `restrict_content_types` | Activate restriction content type option; <br>Only for type: *multilink* |
| `component_whitelist` | Array of component/content type names: `["post","page","product"]`; <br>Only for type: *bloks*, *multilink* |
| `disable_time` | Disables time selection from date picker; Default: false; <br>Only for type: *datetime* |
| `max_length` | Set the max length of the input string; <br>Only for type: *text*, *textarea*, *markdown*|
| `filetypes` | Array of file type names: `["images", "videos", "audios", "texts"]`; <br>Only for type: *multiasset* |

;examplearea

Example Object

```json
// name of the field as key eg. "field key" in schema property in your component
"title": {
  "type": "text",
  "pos": 0,
  "translatable": true,
  "required": true,
  "regex": "",
  "description": "Description for the field",
  "display_name": "",
  "default_value": "",
  "can_sync": false,
  "rtl": false,
  "no_translate": false
}
```
