---
category: Core Resources
title: The Component Field
position: 220
---

Not every property will be used for every field type; some may only effect specific types.

| Property | Description |
|---|---|
| `id` | Numeric Unique ID |
| `type` | The type of your field |
| `pos` | Position of field in component |
| `translateable` | Boolean; Can field be translated |
| `required` | Boolean; Is field required |
| `regex` | Client Regex validation for the field |
| `description` | Description shown in the editor interface |
| `default_value` | Default value for the field; Can be an escaped JSON object |
| `can_sync` | Advanced usage to sync with field in preview |
| `preview_field` | Is used as instance preview field below component name in bloks types |
| `rtl` | Boolean; Enable global RTL for this field |
| `no_translate` | Boolean; Should be excluded in translation export |
| `rich_markdown` | Enable rich markdown view by default (true/false); only type: *markdown* |
| `keys` | Array of field keys (field names) to include in this section; only type: *section* |
| `field_type` | Name of the custom field type plugin; only type: *custom* |
| `source` | Only type: *options*, *option*, *custom*; Possible values: `undefined`: Self; `internal_stories`: Stories; `internal`: Datasource; `external`: API Endpoint in Datasource Entries Array Format |
| `use_uuid` | Default: true; available in `option` and `source=internal_stories` |
| `folder_slug` | Filter on selectable stories path; Effects editor only if `source=internal_stories`; In case you have a multi-language folder structure you can add the '{0}' placeholder and the path will be adapted dynamically. Examples: *"{0}/categories/"*, *{0}/{1}/categories/* |
| `datasource_slug` | Define selectable datasources string; Effects editor only if `source=internal` |
| `external_datasource` | Define external datasource JSON Url; Effects editor only if `source=external` |
| `options` | Array of datasource entries `[{name:"", value:""}]`; Effects editor only if `source=undefined` | 
| `image_crop` | Activate force crop for images: (true/false); Only type: *image* |
| `keep_image_size` | Keep original size: (true/false); Only type: *image* |
| `image_width` | Define width in px or width ratio if `keep_image_size` is enabled; Only type: *image* |
| `image_height` | Define height in px or height ratio if `keep_image_size` is enabled; Only type: *image* |
| `asset_folder_id` | Default asset folder numeric id to store uploaded image of that field; Only type: *image* |
| `add_https` | Prepends `https:` to stop usage of relative protocol `//a.storyblok` ; Only type: *image*, *file* |
| `restrict_components` | Activate restriction nestable component option; Default: false; Only type: *bloks* |
| `maximum` | Maximum amount of added bloks in this blok field; Only type: *bloks* |
| `restrict_content_types` | Activate restriction content type option; Only type: *multilink* |
| `component_whitelist` | `["post","page","product"]`; Only type: *bloks*, *multilink* |
| `disable_time` | Disables time selection from date picker; Default: false; Only type: *datetime* |

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