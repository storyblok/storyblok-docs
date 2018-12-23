---
category: Core Resources
title: The Datasource Entry Object
position: 310
---

You can use the `dimension=your_defined_dimension` (eg. `dimension=en`) to receive the dimensions value besides the default value in one datasource entry. 

| Property            | Description          |
|---------------------|----------------------|
| `id`                  | Numeric id | 
| `name`                | Given name  | 
| `value`               | Given value in default dimension | 
| `dimension_value`     | Given value in the requested dimension | 

;examplearea

Example Object: No specific dimension requested

```json
{
  "id": 22237,
  "name": "cancel",
  "value": "Abbrechen",
  "dimension_value": null
}
```

Example Object: Specific dimension (en) requested

```json
{
  "id": 22237,
  "name": "cancel",
  "value": "Abbrechen",
  "dimension_value": "Cancel"
}
```