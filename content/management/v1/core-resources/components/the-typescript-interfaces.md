---
title: The Typescript Interfaces
---

```typescript
/**
 * @type TComponent
 * @description Storyblok Content Management API Component Type
 * @reference https://www.storyblok.com/docs/api/management#core-resources/components/the-component-object
 */
type TComponent = {
	id?: number
	name?: string
	display_name?: string
	created_at?: string
	image?: string
	preview?: string
	is_root?: boolean
	is_nestable?: boolean
	all_presets?: string[]
	real_name?: string
	component_group_uuid?: string
}

/**
 * @type TComponentFieldTypes
 * @description Storyblok Content Management API Component Field Type
 * @reference https://www.storyblok.com/docs/api/management#core-resources/components/possible-field-types
 */
type TComponentFieldTypes =
	| 'bloks'
	| 'text'
	| 'textarea'
	| 'markdown'
	| 'number'
	| 'datetime'
	| 'boolean'
	| 'options'
	| 'option'
	| 'image'
	| 'file'
	| 'multiasset'
	| 'multilink'
	| 'section'
	| 'custom'

/**
 * @type TComponentField
 * @description Storyblok Content Management API Component Field Type
 * @reference https://www.storyblok.com/docs/api/management#core-resources/components/the-component-field-object
 */
type TComponentField = {
	[key: string]: {
		id?: number
		type?: TComponentFieldTypes
		pos?: number
		translatable?: boolean
		required?: boolean
		regex?: string
		description?: string
		default_value?: string
		can_sync?: boolean
		preview_field?: boolean
		no_translate?: boolean
		rtl?: boolean
		rich_markdown?: boolean
		keys?: string[]
		field_type?: string
		source?: undefined | 'internal_stories' | 'internal' | 'external'
		use_uuid?: boolean
		folder_slug?: string
		datasource_slug?: string
		external_datasource?: string
		options?: { name?: string; value?: string }[]
		image_crop?: boolean
		keep_image_size?: boolean
		image_width?: number | string
		image_height?: number | string
		asset_folder_id?: number
		add_https?: boolean
		restrict_components?: boolean
		maximum?: number
		restrict_content_types?: boolean
		component_whitelist?: ('post' | 'page' | 'product')[]
		disable_time?: boolean
		max_length?: number
		filetypes?: ('images' | 'videos' | 'audios' | 'texts')[]
		title?: string
		image?: string
	}
}

/**
 * @interface ISbContentMAPIComponent
 * @description Storyblok Content Management API Component Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/components/components
 *
 **/
export interface ISbContentMAPIComponent {
	component: TComponent
	name?: string
	display_name?: string
	image?: string
	preview?: string
	is_root?: boolean
	is_nestable?: boolean
	component_group_uuid?: string
	schema?: TComponentField
}

// Aliases
export type Component = ISbContentMAPIComponent
```

;examplearea

Example on how use the <strong>Components'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
} from 'storyblok-js-client/dist/types/interfaces';
import {
  Component,
} from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIComponents';

const payload:ISbP2Params<Component> = {
  component: {
    name: 'My Component Name',
    image: 'https://a.storyblok.com/f/39876/300x300/0b5b9e9e1d/my-image.jpg',
  },
  name: 'My Component Name',
  schema: {
    'text': {
      type: 'text',
      pos: 0,
      translatable: false,
      required: false,
      regex: '',
      description: '',
      default_value: '',
      can_sync: false,
      preview_field: false,
      no_translate: false,
      rtl: false,
      rich_markdown: false,
      keys: [],
      field_type: '',
      source: undefined,
      use_uuid: false,
      folder_slug: '',
      datasource_slug: '',
      external_datasource: '',
      options: [],
      image_crop: false,
      keep_image_size: false,
      image_width: '',
      image_height: '',
      asset_folder_id: 0,
      add_https: false,
      restrict_components: false,
      maximum: 0,
      restrict_content_types: false,
      component_whitelist: [],
      disable_time: false,
      max_length: 0,
      filetypes: [],
      title: '',
      image: ''
    }
  }
}

// POST, PUT
Storyblok.post('spaces/<YOUR-SPACE-ID>/components/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

```
