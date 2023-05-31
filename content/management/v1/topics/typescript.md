---
title: Typescript
---

From version 5, <strong>[Storyblok Javascript Client](https://github.com/storyblok/storyblok-js-client)</strong> is written in <strong>Typescript</strong>. <br />
This means that you can use the client with <strong>Typescript</strong> and benefit from the type safety. <br />
Bellow you can find the interfaces that are used in the Storyblok Client and how and when to use them.

There are two types of requests that one can do with the <strong>Storyblok Client Management API</strong>, hence two types of interfaces are used for them.

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
One will use <strong>`ISbCRUDParams`</strong> for pretty much all requests that are not <strong>`get`</strong> requests. <br />
For the interfaces from the Core Resources, one can find them in the <strong>`storyblok-js-client/dist/types/MAPIInterfaces/`</strong> folder.

Bellow is the list of all interfaces that are used in the <strong>Storyblok Client Management API</strong>.  <br />
For each interface, one can find the corresponding description inside <strong>The Typescript Interfaces</strong> section from each Core Resource.

To import the interfaces, one can use the following import path: <br />
```javascript
import { <Interface or Alias> } from "storyblok-js-client/dist/types/MAPIInterfaces/<Import Path>"
```

---

Interfaces' List
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

As for any <strong>Typescript</strong> file, if one uses a good code editor, hovering over the interface will show the interface's description.
