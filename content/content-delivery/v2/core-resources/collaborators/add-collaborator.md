---
title: Add a Collaborator
---

You can set some of the fields available in the collaborator object, below we only list the properties in the example and the possible required fields.

| Property | Description |
|---|---|
| `collaborator` | The [collaborator object](#core-resources/collaborators/the-collaborator-object) |
| `email` | Email that will be used in the space interface for collaborator **required** |
| `role` | Role of the collaborator, could be admin, editor or custom roles **required** |
| `space_id` | Numeric id of the collaborator space **required** |
| `space_role_id` | Numeric id of the space role connected with collaborators **required** |

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/collaborators/" httpMethod="POST" :requestObject='{"collaborator":{"email":"mail@email.com","role":"editor","space_id":656,"space_role_id":18}}'></RequestExample>

You will receive a fully loaded [collaborator object](#core-resources/collaborators/the-collaborator-object) as response.

