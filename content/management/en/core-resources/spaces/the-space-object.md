---
category: Core Resources
title: The Space Object
position: 810
---

The space object contains all information of one of your accounts spaces. Some of the properties are read only other can be managed by the API. Properties that you are able to change or use during creation can be found in the specifici sections.

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

Example Object

```json
{
  "space": {
    "name": "Example Space",
    "domain": "https://example.storyblok.com",
    "uniq_domain": null,
    "plan": "starter",
    "plan_level": 0,
    "limits": { },
    "created_at": "2018-11-10T15:33:18.402Z",
    "id": 680,
    "role": "admin",
    "owner_id": 1114,
    "story_published_hook": null,
    "environments": null,
    "stories_count": 1,
    "parent_id": null,
    "assets_count": 0,
    "searchblok_id": null,
    "duplicatable": null,
    "request_count_today": 0,
    "api_requests": 1000,
    "exceeded_requests": 0,
    "billing_address": { 
      // billing infromation
    },
    "routes": [ ],
    "euid": null,
    "trial": true,
    "default_root": "page",
    "has_slack_webhook": false,
    "api_logs_per_month": [ ],
    "first_token": "8IE7MzYCzw5d7KLckDa38Att",
    "has_pending_tasks": false,
    "options": { },
    "collaborators": [ ],
    "settings": [ ],
    "owner": {
      // user object
    }
  }
}
```