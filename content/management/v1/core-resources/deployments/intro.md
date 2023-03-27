---
title: Branch deployments
---

The endpoint /v1/spaces/:space_id/deployments can be used to deploy branches.

You can read more about branches [here](https://www.storyblok.com/docs/setup-branches-and-releases#pipeline-stage).

Stories created via the Management API are created in the default branch (Preview). Subsequently, they can be released to other branches (e.g. Staging, Production according to the "source of sync" option) by creating a branch deployment.

