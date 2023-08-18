---
title: Branch deployments
---

The endpoint `/v1/spaces/:space_id/deployments` can be used to trigger the deployment process across the branches.

Stories created via the Management API are created in the default branch (Preview). Subsequently, they can be released to other branches (e.g. Staging, Production) by creating a branch deployment.

Stories created via the Management API are created in the default branch (Preview). Subsequently, they can be deployed to other branches (e.g. Staging, Production according to the "source of sync" option) by triggering a deployment.

For using this endpoint, you have to install the Pipelines application.
