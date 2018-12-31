---
category: Core Resources
title: Upload Asset
position: 320
---

Uploading assets in Storyblok is a two step process. First you need to sign the asset you want to upload. Then you need to post the image as form data to our Amazon S3 bucket. Uploaded files will have parameterized names; Every dot `"."` (except the last one) will be replaced with underscore `"_"`; 

Here you can find an example [using Node.js on Github](https://github.com/onefriendaday/storyblok-file-upload-example).

;examplearea

Example Request

1) Start by requesting a signed upload URL and parameter 

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/assets/" httpMethod="POST" :requestObject='{"filename":"your_file.jpg","size":"400x500"}'></RequestExample>

Signed Response Object Example

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
    "policy": "eyJleHBpcmF0aW9uIjoiMjAxOC0xMS0xMFQxNTo0MzowMFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJhLXRlc3Quc3RvcnlibG9rLmNvbSJ9LHsia2V5IjoiZi82MTQvZTU5OTBhMzU5NS90ZXN0LTItMjIzMS5qcGcifSx7ImFjbCI6InB1YmxpYy1yZWFkIn0seyJFeHBpcmVzIjoiU3VuLCAxMCBOb3YgMjAxOSAxNTozMzowMCBHTVQifSx7IkNhY2hOiJwdWJsaWM7IG1heC1hZ2U9MzE1MzYwMDAifSx7IkNvbnRlbnQtVHlwZSI6ImltYWdlL2pwZWcifSxbImNvbnRlbnQtbGVuZ3RoLXJhbmdlIiwxLDc4NjQzMTk5XSx7IngtYW16LWNyZWRlbnRpYWwiOiJBS0lBSVU2MjdFTlVRVDRSVzIzQS8yMDE4MTExMC91cy1lYXN0LTEvczMvYXdzNF9yZXF1ZXN0In0seyJ4LWFtei1hbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In0seyJ4LWFtei1kYXRlIjoiMjAxODExMTBUMTUzMzAwWiJ9XX0=",
    "x-amz-credential": "AKIAIU627EN23A/20181110/s3/aws4_request",
    "x-amz-algorithm": "AWS4-HMAC-SHA256",
    "x-amz-date": "20181110T153300Z",
    "x-amz-signature": "aaedd72b54636662b137b7648b54bdb47ee3b1dd28173313647930e625c8"
  },
  "post_url": "https://s3.amazonaws.com/a-example.storyblok.com"
}
```

2) Use the received signed response object to upload your file (example uses Node.js): 

```javascript
const FormData = require('form-data')
const fs = require('fs')

const file = '/path_to/your_file.jpg'
const fileUpload = (signed_response_object, success, failed) => {
  let form = new FormData()
  // apply all fields from the signed response object to the second request
  for (let key in signed_response_object.fields) {
    form.append(key, signed_response_object.fields[key])
  }
  // also append the file read stream
  form.append('file', fs.createReadStream(file))
  // submit your form
  form.submit(signed_response_object.post_url, (err, res) => {
    if (err) throw err
    console.log('https://a.storyblok.com/' + signed_response_object.fields.key + ' uploaded!')
  })
}
```

You will receive a fully loaded [asset object](#core-resources/assets/the-asset-object) as response.