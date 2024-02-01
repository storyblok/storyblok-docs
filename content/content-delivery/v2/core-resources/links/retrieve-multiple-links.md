---
title: Retrieve Multiple Links
---

Returns the links object containing all links of one space including the `draft` and `published` links. To get only `published` links, use the `version=published`.

| Query Parameter           | Description          |
|---------------------|----------------------|
| `token` (required) | Your public or preview token |
| `starts_with` | Filter by `full_slug`. Can be used to retrieve all links form a specific folder. Examples: `starts_with=de/beitraege`, `starts_with=en/posts` | 
| `version` | Possible values: `draft`, `published` |
| `paginated` | Links are paginated by default. Set `paginated=1` if you want to retrieve the paginated results. With the parameters `per_page` and `page` you can define the page size and page number |
| `cv` | Read more about cache version at [Cache invalidation](#topics/cache-invalidation) |
| `with_parent` | Filter links by `parent_id`, can be set to 0 for returning links with no `parent_id` and `with_parent=parent_id` to fetch story links with the `parent_id` |

;examplearea

Endpoint

```bash
GET /v2/cdn/links/?starts_with=posts/
```

Example Request

<RequestExample url="https://api.storyblok.com/v2/cdn/links/?starts_with=posts/&token=ask9soUkv02QqbZgmZdeDAtt"></RequestExample>

Example Object 

```json
{
  "links": {
    "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb": {
      "id": 107350,
      "slug": "posts/my-third-post",
      "name": "My third post",
      "is_folder": false,
      "parent_id": 107348,
      "published": true,
      "position": -20,
      "uuid": "ac0d2ed0-e323-43ca-ae59-5cd7d38683cb",
      "is_startpage": false
    },
    "a91440ee-fd57-4ee3-83cf-d49d217ae919": {
      "id": 107349,
      "slug": "posts/my-second-post",
      "name": "My second post",
      "is_folder": false,
      "parent_id": 107348,
      "published": true,
      "position": -10,
      "uuid": "a91440ee-fd57-4ee3-83cf-d49d217ae919",
      "is_startpage": false
    },
    "bfea4895-8a19-4e82-ae1c-1c591dce3094": {
      "id": 107351,
      "slug": "posts/my-first-post",
      "name": "My first Post",
      "is_folder": false,
      "parent_id": 107348,
      "published": true,
      "position": 0,
      "uuid": "bfea4895-8a19-4e82-ae1c-1c591dce3094",
      "is_startpage": false
    }
  }
}
```
