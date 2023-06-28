---
title: Organization
sidebarTitle: Organization
---

The Organization endpoint is very helpfull for getting full statictics on your storyblok spaces. You can see how many users you have in your Organization along with all usefull information like `last_sign_in_at`, `last_sign_in_ip`.

On the right hand site you can see an Example Response.

;examplearea

Example Request

```bash
curl -H "Authorization: YOUR_OAUTH_TOKEN" https://mapi.storyblok.com/v1/orgs/me
```

Example Response

```json
{
  "org": {
    "name": "ORG Name",
    "users": [
      {
        "userid": "exampleemail@storyblok.com",
        "email": "exampleemail@storyblok.com",
        "username": null,
        "real_email": "exampleemail@storyblok.com",
        "avatar": null,
        "id": 106362,
        "organization": null,
        "sign_in_count": 0,
        "created_at": "2022-01-12T12:56:56.806Z",
        "firstname": "Dipankar",
        "lastname": "Maikap",
        "org_role": "member",
        "last_sign_in_at": null,
        "last_sign_in_ip": "168.121.178.3",
        "disabled": false,
        "partner_role": null,
        "friendly_name": "Dipankar Maikap",
        "on_spaces": [
          1,
          2
        ],
        "roles_on_spaces": {
          "1": [
            "admin"
          ],
          "2": [
            "admin"
          ]
        }
      }
    ],
    "track_statistics": true,
    "invitations": [
      {
        "id": 105845,
        "email": "exampleemail@storyblok.com",
        "org_id": 34,
        "user_id": 17,
        "expires_at": "2023-06-13T12:28:44.527Z",
        "org_role": "admin",
        "inviter_id": 1,
        "registered": false
      }
    ]
  }
}
```
