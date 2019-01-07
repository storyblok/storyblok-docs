---
category: Core Resources
title: Update a Space
position: 850
---

You're only able to update the following properties of your space. 

| Property | Description |
|---|---|
| `space[id]` | Numeric id of your space |
| `space[name]` | Name of your space |
| `space[domain]` | Domain for your default preview url |
| `space[uniq_domain]` | Unique Domain for the Storyblok Rendering Service |
| `space[owner_id]` | Numeric user id of the owner for that space |
| `space[parent_id]` | Space id of a possible parent space |
| `space[duplicatable]` | Is the space globally duplicatable **by all users** |
| `space[default_root]` | Default content type used for this space default: `page` | 
| `space[options]` | Options for backup and language configurations |
| `space[routes]` | Routes for the Storyblok Rendering Service |
| `space[story_published_hook]` | Published Webhook URL |
| `space[searchblok_id]` | Searchblok id, if available |
| `space[environments]` | Array of `name`, `location` (url) objects |
| `space[billing_address]` | Billing information used to generate your invoices for this space |

### Example Space Options

```json
...
"options": {
  "branch_deployed_hook": "", // Your webhook endpoint for branch deployments
  "s3_bucket": "storyblok-backup", // Your S3 bucket name
  "aws_arn": "arn:aws:iam::12312412:role/StoryblokRemote49122",
  "backup_frequency": "daily", 
  "languages": [ { "code": "de", "name": "German" } ]
}
```

### Example Space Billing Address

```json
...
"billing_address": {
  "tax_number": "ATU72706128", // Your VAT number
  "order_number": "Your custom order number",
  "company": "Storyblok GmbH",
  "email": "da@storyblok.com", 
  "name": "Ing. Dominik Angerer", 
  "address_city": "Linz", 
  "address_country": "Austria", 
  "address_iso_country": "AT",
  "address_line1": "Peter-Behrens-Platz 1", 
  "address_zip": "4020", 
}
```

;examplearea

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/12422/" httpMethod="PUT" :requestObject='{"space":{"id": 12422, "name":"Updated Example Space"}}'></RequestExample>


You will receive a [space object](#core-resources/spaces/the-space-object) as response.
