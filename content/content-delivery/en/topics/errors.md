---
title: Errors
---

Storyblok uses conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, content entry was not published but version requested was set to published, etc.). Codes in the `5xx` range indicate an error with Storyblok's servers (these are rare).

Some `4xx` errors that could be handled programmatically (e.g., content entry was not found) include an error code that briefly explains the error reported.

;examplearea

Http Status Code Summary

| Code | Description |
|------|----------------------|
| 200 - OK | Everything worked as expected. |
| 400 - Bad Request | Wrong format was sent (eg. XML instead of JSON). |
| 401 - Unauthorized | No valid API key provided. |
| 404 - Not Found | The requested resource doesn't exist (perhaps due to not yet published content entries). |
| 422 - Unprocessable Entity | The request was unacceptable, often due to missing a required parameter. |
| 429 - Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 - Server Errors | Something went wrong on Storyblok's end. (These are rare.) |
