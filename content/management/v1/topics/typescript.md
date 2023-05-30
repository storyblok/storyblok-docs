---
title: Typescript
---

From version 5, the Storyblok Client is written in <strong>Typescript</strong>. <br />
This means that you can use the client with <strong>Typescript</strong> and benefit from the type safety. <br />
Bellow you can find the interfaces that are used in the Storyblok Client and how and when to use them.

There are two types of requests that one can do with the Storyblok Client Management API, hence, there are two types of interfaces that are used for them.

| Request type     | Interface          |
|---------------------|----------------------|
| `get` |   |
| `put` | ISbCRUDParams |
| `post` | ISbCRUDParams |
| `delete` | ISbCRUDParams |

So let's see how to use the interfaces with the Storyblok Client. The example below shows how to use the <strong>`ISbCRUDParams`</strong> interface with the <strong>`post`</strong> request.

```javascript
const StoryblokClient = require('storyblok-js-client')
import { ISbCRUDParams } from 'storyblok-js-client/dist/types/interfaces'
import { Activity } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIActivities'

const payload:ISbCRUDParams<Activity> = {
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

Note that we imported <strong>`ISbCRUDParams`</strong> and the <strong>`Activity`</strong> interfaces. <br />
One will use <strong>`ISbCRUDParams`</strong> for pretty much all requests that are not `get` requests. <br />
For the interfaces from the Core Resources, one can find them in the <strong>`storyblok-js-client/dist/types/MAPIInterfaces/`</strong> folder.

Bellow is the list of all interfaces that are used in the Storyblok Client.  <br />
For each interface, one can find the corresponding description inside <strong>The Typescript Interfaces</strong> section from each Core Resource.

To import the interfaces, one can use the following import path: <br />
<strong>`import { <Interface or Alias> } from "storyblok-js-client/dist/types/MAPIInterfaces/<Import Path>"`</strong>

| Interface     | Core Resource          | Alias | Import Path |
|---------------------|----------------------|---------|--------|
| `ISBContentMAPIActivity` | Activities Resource | `Activity` | `MAPIActivities` |
| `ISBContentMAPIApprovals` | Approvals Resource | `Approval` | `MAPIApprovals` |
| `ISBContentMAPIReleaseApproval` | Approvals Resource | `ReleaseApproval` | `MAPIApprovals` |
| `ISbAsset` | Assets Resource | `Asset` | `MAPIAssets` |
| `ISbAssetFolder` | Assets Resource | `AssetFolder` | `MAPIAssets` |
| `ISbContentMAPIBranchDeployments` | Branch Deployments Resource | `BranchDeployment` | `MAPIBranchDeployments` |
| `ISbContentMAPIComponent` | Components Resource | `Component` | `MAPIComponents` |
| `ISbContentMAPIComponentGroup` | Components Resource | `ComponentGroup` | `MAPIComponents` |
| `ISbContentMAPIDataSource` | Data Sources Resource | `DataSource` | `MAPIDataSources` |
| `ISbContentMAPIDataSourceEntry` | Data Sources Resource | `DataSourceEntry` | `MAPIDataSources` |
| `ISBContentMAPIFieldTypes` | Field Types Resource | `FieldType` | `MAPIFieldTypes` |
| `ISBContentMAPIPresets` | Presets Resource | `Preset` | `MAPIPresets` |
| `ISbContentMAPIReleases` | Releases Resource | `Release` | `MAPIReleases` |
| `ISBContentMAPISpace` | Spaces Resource | `Space` | `MAPISpaces` |
| `ISBContentMAPICreateSpace` | Spaces Resource | `CreateSpace` | `MAPISpaces` |
| `ISBContentMAPIUpdateSpace` | Spaces Resource | `UpdateSpace` | `MAPISpaces` |
| `ISBContentMAPIDuplicateSpace` | Spaces Resource | `DuplicateSpace` | `MAPISpaces` |
| `ISBContentMAPISpaceRoles` | Roles Resource | `SpaceRoles` | `MAPISpacesRoles` |
| `ISbContentMAPIStory` | Stories Resource | `Story` | `MAPIStories` |
| `ISbContentMAPIMultipleStories` | Stories Resource | `MultipleStories` | `MAPIStories` |
| `ISbContentMAPICreateStory` | Stories Resource | `CreateStory` | `MAPIStories` |
| `ISbContentMAPIUpdateStory` | Stories Resource | `UpdateStory` | `MAPIStories` |
| `ISBContentMAPITask` | Tasks Resource | `Task` | `MAPITasks` |
| `ISbContentMAPIWorkflowStage` | Workflow Stages Resource | `WorkflowStage` | `MAPIWorkflowStages` |
| `ISbContentMAPIWorkflowStageChanges` | Workflow Stages Resource | `WorkflowStageChanges` | `MAPIWorkflowStages` |

As for any <strong>Typescript</strong> file, if one uses a good code editor, hovering over the interface will show the interface's description.
