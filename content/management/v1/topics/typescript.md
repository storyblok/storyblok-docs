---
title: Typescript
---

From version 5, <strong>[Storyblok Javascript Client](https://github.com/storyblok/storyblok-js-client)</strong> is written in <strong>Typescript</strong>. <br />
This means that you can use the client with <strong>Typescript</strong> and benefit from the type safety. <br />

Below you can find the interfaces that are used in the Storyblok Client and how and when to use them.

There are two types of requests that one can do with the <strong>Storyblok Client Management API</strong>, hence two types of interfaces are used for them.

| Request type     | Interface          | Method |
|---------------------|----------------------|--|
| `get` | <strong>ISbGetParams</strong> | `GET` |
| `post` | <strong>ISbCUDParams</strong> | `POST` |
| `put` | <strong>ISbCUDParams</strong> | `PUT` |
| `delete` | <strong>ISbCUDParams</strong> | `DELETE` |

*Note: `ISbCUDParams` is used for `post`, `put` and `delete` requests. <strong>ISbCUD is not a typo</strong>*

So let's see how to use the interfaces with the Storyblok Client. The example below shows how to use the <strong>`ISbCUDParams`</strong> interface with the <strong>`post`</strong> request.

```javascript
const StoryblokClient = require('storyblok-js-client')
import { ISbCUDParams } from 'storyblok-js-client/dist/types/interfaces'
import { Activity } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIActivities'

const payload:ISbCUDParams<Activity> = {
  activity: {
    trackable_id: 123,
    trackable_type: 'story',
    key: 'story.create',
    parameters: {
      name: 'My Story'
    }
  }
}

StoryblokClient.post('spaces/<YOUR-SPACE-ID>/activities/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

```

Note that we imported <strong>`ISbCUDParams`</strong> and the <strong>`Activity`</strong> interfaces. <br />
One will use <strong>`ISbCUDParams`</strong> for pretty much all requests that are not <strong>`get`</strong> requests. <br />
For the interfaces from the Core Resources, one can find them in the <strong>`storyblok-js-client/dist/types/MAPIInterfaces/`</strong> folder.

Below is the list of all interfaces that are used in the <strong>Storyblok Client Management API - CUD Parameters (POST, PUT, DELETE)</strong>.  <br />
For each interface, one can find the corresponding description inside <strong>The Typescript Interfaces</strong> section from each Core Resource.

To import the interfaces, one can use the following import path: <br />
```javascript
import { <Interface or Alias> } from "storyblok-js-client/dist/types/MAPIInterfaces/<Import Path>"
```

---

<strong>CUD<POST, PUT, DELETE></strong> Interfaces' List<br />
*Note: <strong>Only</strong> these interfaces will be allowed to be used with the <strong>`post`</strong>, <strong>`put`</strong> and <strong>`delete`</strong> requests*
---

| Interface     | Core Resource          | Alias | Import Path |
|---------------------|----------------------|---------|--------|
| `ISBContentMAPIActivity` | [Activities Resource](#core-resources/activities/activities) | `Activity` | `MAPIActivities` |
| `ISBContentMAPIApprovals` | [Approvals Resource](#core-resources/approvals/approvals) | `Approval` | `MAPIApprovals` |
| `ISBContentMAPIReleaseApproval` | [Release Approvals Resource](#core-resources/approvals/create-release-approval) | `ReleaseApproval` | `MAPIApprovals` |
| `ISbAsset` | [Assets Resource](#core-resources/assets/assets) | `Asset` | `MAPIAssets` |
| `ISbAssetFolder` | [Asset Folders Resource](#core-resources/asset-folders/asset-folders) | `AssetFolder` | `MAPIAssets` |
| `ISbContentMAPIBranchDeployments` | [Branch Deployments Resource](#core-resources/deployments/intro) | `BranchDeployment` | `MAPIBranchDeployments` |
| `ISbContentMAPIComponent` | [Components Resource](#core-resources/components/components) | `Component` | `MAPIComponents` |
| `ISbContentMAPIComponentGroup` | [Component Groups Resource](#core-resources/component-groups/component-groups) | `ComponentGroup` | `MAPIComponents` |
| `ISbContentMAPIDataSource` | [Data Sources Resource](#core-resources/datasources/datasources) | `DataSource` | `MAPIDataSources` |
| `ISbContentMAPIDataSourceEntry` | [Data Sources Entries Resource](#core-resources/datasource-entries/datasource-entries) | `DataSourceEntry` | `MAPIDataSources` |
| `ISBContentMAPIFieldTypes` | [Field Types Resource](#core-resources/field-types/field-types) | `FieldType` | `MAPIFieldTypes` |
| `ISBContentMAPIPresets` | [Presets Resource](#core-resources/presets/presets) | `Preset` | `MAPIPresets` |
| `ISbContentMAPIReleases` | [Releases Resource](#core-resources/releases/intro) | `Release` | `MAPIReleases` |
| `ISBContentMAPISpace` | [Spaces Resource](#core-resources/spaces/spaces) | `Space` | `MAPISpaces` |
| `ISBContentMAPICreateSpace` | [Create Space Resource](#core-resources/spaces/create-space) | `CreateSpace` | `MAPISpaces` |
| `ISBContentMAPIUpdateSpace` | [Update Space Resource](#core-resources/spaces/update-space) | `UpdateSpace` | `MAPISpaces` |
| `ISBContentMAPIDuplicateSpace` | [Duplicate Space Resource](#core-resources/spaces/duplicate-space) | `DuplicateSpace` | `MAPISpaces` |
| `ISBContentMAPISpaceRoles` | [Space Roles Resource](#core-resources/space-roles/space-roles) | `SpaceRoles` | `MAPISpacesRoles` |
| `ISbContentMAPIStory` | [Stories Resource](#core-resources/stories/stories) | `Story` | `MAPIStories` |
| `ISbContentMAPIMultipleStories` | [Multiple Stories Resource](#core-resources/stories/retrieve-multiple-stories) | `MultipleStories` | `MAPIStories` |
| `ISbContentMAPICreateStory` | [Create Story Resource](#core-resources/stories/create-story) | `CreateStory` | `MAPIStories` |
| `ISbContentMAPIUpdateStory` | [Update Story Resource](#core-resources/stories/update-story) | `UpdateStory` | `MAPIStories` |
| `ISBContentMAPITask` | [Tasks Resource](#core-resources/tasks/tasks) | `Task` | `MAPITasks` |
| `ISbContentMAPIWorkflowStage` | [Workflow Stages Resource](#core-resources/workflow-stages/intro) | `WorkflowStage` | `MAPIWorkflowStages` |
| `ISbContentMAPIWorkflowStageChanges` | [Workflow Stage Changes Resource](#core-resources/workflow-stage-changes/intro) | `WorkflowStageChanges` | `MAPIWorkflowStages` |

---

The same goes for the <strong>Storyblok Client Management API - Get Parameters (GET)</strong>. <br />
For each interface, one can find the corresponding description inside <strong>The Typescript Interfaces</strong> section from each Core Resource.

To import the interfaces, one can use the following import path: <br />
```javascript
import { <Interface or Alias> } from "storyblok-js-client/dist/types/MAPIInterfaces/<Import Path>"
```

The example below shows how to use the <strong>`ISbGETParams`</strong> interface with the <strong>`get`</strong> request.

```javascript
const StoryblokClient = require('storyblok-js-client')
import { ISbGETParams } from 'storyblok-js-client/dist/types/interfaces'
import { GetMultipleDataSourcesEntries } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIDataSources'

const payload:ISbGETParams<GetMultipleDataSourcesEntries> = {
  datasource_id: 123,
	datasource_slug: 'foo'
	dimension: 'en'
}

StoryblokClient.get('spaces/<YOUR-SPACE-ID>/datasource_entries/', payload)
  .then(response => {
    // handle response
  })
  .catch(error => {
    // handle error
  });

```

---
<strong>GET</strong> Interfaces' List<br />
*Note: <strong>Only</strong> these interfaces will be allowed to be used with the <strong>`get`</strong> requests*
---

| Interface     | Core Resource          | Alias | Import Path |
|---------------------|----------------------|---------|--------|
| `ISbRetrieveMultipleDataSourcesParams` | [Data Sources Resource](#core-resources/datasources/retrieve-multiple-datasources) | `GetMultipleDataSources` | `MAPIDataSources` |
| `ISbRetrieveMultipleDataSourcesEntriesParams` | [Data Sources Entries Resource](#core-resources/datasource-entries/retrieve-multiple-datasource-entries) | `GetMultipleDataSourceEntries` | `MAPIDataSources` |
| `ISbRetrieveMultipleApprovalsParams` | [Approvals Resource](#core-resources/approvals/approvals) | `GetMultipleApprovals` | `MAPIApprovals` |

As for any <strong>Typescript</strong> file, if one uses a good code editor, hovering over the interface will show the interface's description.
