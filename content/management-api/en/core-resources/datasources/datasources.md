---
category: Core Resources
title: Datasources
startpage: true
position: 600
---

A datasource is a collection of datasource entries with a specific name and slug. Each datasource entry is a collection of key-value pairs (KVP), so called datasource entries. Those key-value pairs can be used for a single choice, multiple choice options and as well directly through our API to use them for multi-language labels, categories, or anything similar.

;examplearea

Endpoint

```bash
GET /v1/spaces/:space_id/datasources/:datasource_id
```