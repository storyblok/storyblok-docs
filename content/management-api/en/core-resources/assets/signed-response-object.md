---
category: Core Resources
title: Signed Response Object
position: 330
---

After creating an asset entry using a POST request you will receive a response object with all information needed to finally upload your asset. The second request after the creation of the asset entry will need all information in `fields` appended to your `application/x-www-form-urlencoded` request besides the actual `file` input. See the demo on how to [upload an asset](#core-resources/assets/upload-asset).

;examplearea

Example Object

```json
{
  "pretty_url": "//a-example.storyblok.com/f/606/e5990a3595/your_file.jpg",
  "public_url": "https://s3.amazonaws.com/a-example.storyblok.com/f/606/e5990a3595/your_file.jpg",
  "fields": {
    "key": "f/606/e5990a3595/your_file.jpg",
    "acl": "public-read",
    "Expires": "Sun, 10 Nov 2019 15:33:00 GMT",
    "Cache-Control": "public; max-age=31536000",
    "Content-Type": "image/jpeg",
    "policy": "eyJleHBpcmF0aW9uIjoiMjAxOC0xMS0xMFQxNTo...ei1hbGdvcml0aG0iOiJBV1M0LUhNQUM...LWFtei1kYXRlIjoiMjAxODExMTBUMTUzMzAwWiJ9XX0=",
    "x-amz-credential": "AKIAIU627EN23A/20181110/s3/aws4_request",
    "x-amz-algorithm": "AWS4-HMAC-SHA256",
    "x-amz-date": "20181110T153300Z",
    "x-amz-signature": "aaedd72b54636662b137b7648b54bdb47ee3b1dd28173313647930e625c8"
  },
  "post_url": "https://s3.amazonaws.com/a-example.storyblok.com"
}
```