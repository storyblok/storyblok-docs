---
title: Upload Asset
---

Uploading assets in Storyblok is a three step process. First you need to sign the asset you want to upload. Then you need to post the image as form data to our Amazon S3 bucket. Lastly, you need to send another request to finalize the process and let Storyblok retrieve the MIME type and the content length for your asset. Uploaded files will have parameterized names; Every dot `"."` (except the last one) will be replaced with underscore `"_"`. 

Here you can find an example [using Node.js on Github](https://github.com/onefriendaday/storyblok-file-upload-example).

;examplearea

1. Start by requesting a signed upload URL and parameter

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/assets/" httpMethod="POST" :requestObject='{"filename":"your_file.jpg","size":"400x500"}'></RequestExample>

Example Request (with asset folder)

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/assets/" httpMethod="POST" :requestObject='{"filename":"your_file.jpg","size":"400x500","asset_folder_id":123}'></RequestExample>

2. Use the received signed response object to upload your file (example uses Node.js) and to finalize the process: 

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
    // finalize the upload
    Storyblok.get('spaces/606/assets/' + signed_response_object.id + '/finish_upload').then(response => {
      console.log('https://a.storyblok.com/' + signed_response_object.fields.key + ' uploaded!')
    }).catch(error => { 
      throw error
    })
  })
}
```
