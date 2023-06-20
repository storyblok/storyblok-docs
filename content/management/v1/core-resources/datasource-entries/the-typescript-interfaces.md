---
title: The Typescript Interfaces
---

```typescript
/**
 * @interface ISbContentMAPIDataSourceEntry
 * @description Storyblok Content Management API Data Source Entries Interface
 * @description This is used when creating a new data source entry
 * @reference https://www.storyblok.com/docs/api/management#core-resources/datasource-entries/datasource-entries
 *
 **/
export interface ISbContentMAPIDataSourceEntry {
	datasource_entry: {
		id?: number
		name:	string
		value: string
		datasource_id: number
		dimension_value?: string
		dimension_id?: number
	}
}

/**
 * @interface ISbRetrieveMultipleDataSourcesEntriesParams
 * @description Storyblok Content Management API Data Source Entries Interface
 * @reference https://www.storyblok.com/docs/api/management#core-resources/datasource-entries/retrieve-multiple-datasource-entries
 * @description This is used when retrieving multiple data source entries
 **/
export interface ISbRetrieveMultipleDataSourcesEntriesParams {
	datasource_id: number
	datasource_slug: string
	dimension: string
}

// Aliases
export type DataSourceEntry = ISbContentMAPIDataSourceEntry
export type GetMultipleDataSourcesEntries = ISbRetrieveMultipleDataSourcesEntriesParams
```

;examplearea

Example on how use the <strong>DataSource Entries'</strong> interfaces with the Storyblok Client

```typescript
const StoryblokClient = require('storyblok-js-client')
// Import the interfaces
import {
  ISbP2Params,
  ISbGetParams
} from 'storyblok-js-client/dist/types/interfaces';
import {
  DataSourceEntry,
  GetMultipleDataSourcesEntries,
} from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIDataSourceEntries';

// POST, PUT
const payload:ISbP2Params<DataSourceEntry> = {
  datasource_entry: {
    name: 'My Data Source Entry',
    value: 'My Data Source Entry Value',
    datasource_id: 123,
    dimension_value: 'My Dimension Value',
    dimension_id: 456
  }
}

Storyblok.post('spaces/<YOUR-SPACE-ID>/datasource_entries/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

// GET
const params:ISbGetParams<GetMultipleDataSourcesEntries> = {
  datasource_id: 123,
  datasource_slug: 'my-data-source',
  dimension: 'my-dimension'
}

Storyblok.get('spaces/<YOUR-SPACE-ID>/datasource_entries/', params)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });
```
