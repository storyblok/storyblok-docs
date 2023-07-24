---
title: Typescript
---

From version 5, <strong>[Storyblok Javascript Client](https://github.com/storyblok/storyblok-js-client)</strong> is written in <strong>Typescript</strong>. <br />
This means that you can use the client with <strong>Typescript</strong> and benefit from the type safety. <br />

Below you can find the interfaces that are used in the Storyblok Client and how and when to use them.

There are two types of requests that you can perform using the <strong>Storyblok Client Management API</strong>, hence two types of interfaces are used for them.

| Request type     | Interface          | Method |
|---------------------|----------------------|--|
| `get` | ISbGetParams | `GET` |
| `post` | ISbP2Params | `POST` |
| `put` | ISbP2Params | `PUT` |
| `delete` | *No params needed* | `DELETE` |

*Note: `ISbP2Params` is used for `post` and `put` requests.*

So let's see how to use the interfaces with the Storyblok Client. The example below shows how to use the <strong>`ISbP2Params`</strong> interface to perform a <strong>`post`</strong> request.

```javascript
const StoryblokClient = require('storyblok-js-client')
// Import the POST/PUT interface
import { ISbP2Params } from 'storyblok-js-client/dist/types/interfaces'
import { Activity } from 'storyblok-js-client/dist/types/MAPIInterfaces/MAPIActivities'

const payload:ISbP2Params<Activity> = {
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

Note that we imported <strong>`ISbP2Params`</strong> and the <strong>`Activity`</strong> interfaces. <br />
You will use <strong>`ISbP2Params`</strong> for all requests that are not <strong>`get`</strong> requests. <br />
For the interfaces from the Core Resources, you can find them in the <strong>`storyblok-js-client/dist/types/MAPIInterfaces/`</strong> folder.

Below is the list of all interfaces that are used in the <strong>Storyblok Client Management API - Parameters (POST, PUT)</strong>.  <br />
For each interface, you can find the corresponding description inside <strong>The Typescript Interfaces</strong> section from each Core Resource.
There, you will find all the types expected for each interface. For instance, if you see a field that is of type `string`, then you will have to pass a `string` value for that field.

To import the interfaces, you can use the following import path: <br />
```javascript
import { <Interface or Alias> } from "storyblok-js-client/dist/types/MAPIInterfaces/<Import Path>"
```

---

<strong><POST, PUT></strong> Interfaces' List<br />
*Note: <strong>Only</strong> these interfaces will be allowed to be used with the <strong>`post`</strong> and <strong>`put`</strong> requests*
---

| Interface     | Core Resource          | Alias | Import Path |
|---------------------|----------------------|---------|--------|
| `ISbContentMAPIStory` | [Stories Resource](#core-resources/stories/stories) | `CreateStory` | `MAPIStories` |
| `ISbContentMAPIUpdateStory` | [Update Story Resource](#core-resources/stories/update-story) | `UpdateStory` | `MAPIStories` |
| `ISbContentMAPICollaborator` | [Collaborators Resource](#core-resources/collaborators/collaborators) | `Collaborator` | `MAPICollaborators` |
| `ISbContentMAPICollaboratorAdd` | [Add Collaborators Resource](#core-resources/collaborators/add-collaborator) | `AddCollaborator` | `MAPICollaborators` |
| `ISbContentMAPICollaboratorAddWithSSO` | [Add Collaborators with SSO Resource](#core-resources/collaborators/add-users-with-sso) | `AddCollaboratorWithSSO` | `MAPICollaborators` |
| `ISbContentMAPIComponent` | [Components Resource](#core-resources/components/components) | `Component` | `MAPIComponents` |
| `ISbContentMAPIComponentGroup` | [Component Groups Resource](#core-resources/component-groups/component-groups) | `ComponentGroup` | `MAPIComponentGroups` |
| `ISbAsset` | [Assets Resource](#core-resources/assets/assets) | `Asset` | `MAPIAssets` |
| `ISbAssetFolder` | [Asset Folders Resource](#core-resources/asset-folders/asset-folders) | `AssetFolder` | `MAPIAssets` |
| `ISbContentMAPIDataSource` | [Data Sources Resource](#core-resources/datasources/datasources) | `DataSource` | `MAPIDataSources` |
| `ISbContentMAPIDataSourceEntry` | [Data Sources Entries Resource](#core-resources/datasource-entries/datasource-entries) | `DataSourceEntry` | `MAPIDataSources` |
| `ISbContentMAPISpace` | [Spaces Resource](#core-resources/spaces/spaces) | `Space` | `MAPISpaces` |
| `ISbContentMAPICreateSpace` | [Create Space Resource](#core-resources/spaces/create-space) | `CreateSpace` | `MAPISpaces` |
| `ISbContentMAPIUpdateSpace` | [Update Space Resource](#core-resources/spaces/update-space) | `UpdateSpace` | `MAPISpaces` |
| `ISbContentMAPIDuplicateSpace` | [Duplicate Space Resource](#core-resources/spaces/duplicate-space) | `DuplicateSpace` | `MAPISpaces` |
| `ISbContentMAPISpaceRoles` | [Space Roles Resource](#core-resources/space-roles/space-roles) | `SpaceRoles` | `MAPISpacesRoles` |
| `ISbContentMAPISpaceRolesCreate` | [Create Space Role Resource](#core-resources/space-roles/create-space-role) | `SpaceRolesCreate` | `MAPISpacesRoles` |
| `ISbContentMAPISpaceRolesUpdate` | [Update Space Role Resource](#core-resources/space-roles/update-space-role) | `SpaceRolesUpdate` | `MAPISpacesRoles` |
| `ISbContentMAPITask` | [Tasks Resource](#core-resources/tasks/tasks) | `Task` | `MAPITasks` |
| `ISbContentMAPIApprovals` | [Approvals Resource](#core-resources/approvals/approvals) | `Approval` | `MAPIApprovals` |
| `ISbContentMAPIReleaseApproval` | [Release Approvals Resource](#core-resources/approvals/create-release-approval) | `ReleaseApproval` | `MAPIApprovals` |
| `ISbContentMAPIActivity` | [Activities Resource](#core-resources/activities/activities) | `Activity` | `MAPIActivities` |
| `ISbContentMAPIPresets` | [Presets Resource](#core-resources/presets/presets) | `Preset` | `MAPIPresets` |
| `ISbContentMAPIFieldTypes` | [Field Types Resource](#core-resources/field-types/field-types) | `FieldType` | `MAPIFieldTypes` |
| `ISbContentMAPIWorkflowStage` | [Workflow Stages Resource](#core-resources/workflow-stages/intro) | `WorkflowStage` | `MAPIWorkflowStages` |
| `ISbContentMAPIWorkflowStageChanges` | [Workflow Stage Changes Resource](#core-resources/workflow-stage-changes/intro) | `WorkflowStageChanges` | `MAPIWorkflowStages` |
| `ISbContentMAPIReleases` | [Releases Resource](#core-resources/releases/intro) | `Release` | `MAPIReleases` |
| `ISbContentMAPIPipeline` | [Pipelines Resource](#core-resources/pipelines/intro) | `Pipeline` | `ISbContentMAPIPipeline` |
| `ISbContentMAPIPipelineDeployments` | [Pipelines Deployments Resource](#core-resources/pipelines/pipeline-deployment) | `PipelineDeployment` | `ISbContentMAPIPipelineDeployments` |
| `ISbContentMAPIPresets` | [Presets Resource](#core-resources/presets/presets) | `Presets` | `ISbContentMAPIPresets` |
| `ISbContentMAPIWorkflowStage` | [Workflow Stages](#core-resources/workflow-stages/intro) | `WorkflowStage` | `ISbContentMAPIWorkflowStage` |

---

The same goes for the <strong>Storyblok Client Management API - Get Parameters (GET)</strong>. <br />
For each interface, you can find the corresponding description inside <strong>The Typescript Interfaces</strong> section from each Core Resource.

To import the interfaces, you can use the following import path: <br />
```javascript
import { <Interface or Alias> } from "storyblok-js-client/dist/types/MAPIInterfaces/<Import Path>"
```

The example below shows how to use the <strong>`ISbGETParams`</strong> interface with the <strong>`get`</strong> request.

```javascript
const StoryblokClient = require('storyblok-js-client')
// Import the GET interface
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
*Note: <strong>Only</strong> these interfaces will be allowed to be used with the <strong>`get`</strong> requests*<br />
*If no interface is provided for a specific Core Resource, you have to make the request following the instrucions from the Core Resource's Retrieve session, for instance: [Retrieve One Component](#core-resources/components/retrieve-one-component)*
---

| Interface     | Core Resource          | Alias | Import Path |
|---------------------|----------------------|---------|--------|
| `ISbRetrieveMultipleStories` | [Stories Resource](#core-resources/stories/retrieve-multiple-stories) | `GetStories` | `MAPIStories` |
| `ISbRetrieveMultipleAssets` | [Assets Resource](#core-resources/assets/retrieve-multiple-assets) | `GetMultipleAssets` | `MAPIAssets` |
| `ISbRetrieveMultipleDataSourcesParams` | [Data Sources Resource](#core-resources/datasources/retrieve-multiple-datasources) | `GetDataSources` | `MAPIDataSources` |
| `ISbRetrieveMultipleDataSourcesEntriesParams` | [Data Sources Entries Resource](#core-resources/datasource-entries/retrieve-multiple-datasource-entries) | `GetDataSourceEntries` | `MAPIDataSources` |
| `ISbRetrieveMultipleApprovalsParams` | [Approvals Resource](#core-resources/approvals/retrieve-multiple-approvals) | `GetApprovals` | `MAPIApprovals` |
| `ISbRetrieveMultipleActivitiesParams` | [Activities Resource](#core-resources/activities/retrieve-multiple-activities) | `GetActivities` | `MAPIActivities` |
| `ISbRetrieveMultipleFieldTypesParams` | [Field Types Resource](#core-resources/field-types/retrieve-multiple-field-types) | `GetFieldTypes` | `MAPIFieldTypes` |
| `ISbRetrieveMultipleWorkflowStageChangesParams` | [Workflow Stage Changes Resource](#core-resources/workflow-stage-changes/get-all) | `GetWorkflowStageChanges` | `MAPIWorkflowStages` |
| `ISbRetrieveMultiplePresetsParams` | [Presets Resource](#core-resources/presets/retrieve-multiple-presets) | `GetPresets` | `ISbRetrieveMultiplePresetsParams` |

As for any <strong>Typescript</strong> file, if you use a good code editor, hovering over the interface will show the interface's description.
