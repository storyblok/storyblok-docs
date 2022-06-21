---
title: Update Asset
---



Updating assets in Storyblok is very similar to uploading assets, however here you need to specify the `ID` of the asset you want to update alongside the new asset data. Also, you need to pass a new key and value pair `"validate_upload":"1"` to the request.

;examplearea

1. Start by requesting a signed upload URL and parameter

Example Request

<RequestExample url="https://mapi.storyblok.com/v1/spaces/656/assets/" httpMethod="POST" :requestObject='{"filename":"your_file.jpg", "id":"16383", "validate_upload":"1"}'></RequestExample>

Example Request (with asset folder)

<RequestExample url="https://mapi.storyblok.com/v1/spaces/606/assets/" httpMethod="POST" :requestObject='{"filename":"your_file.jpg","id":"16383", "validate_upload":"1","asset_folder_id":123}'></RequestExample>

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
    
    // 3. finalize the upload
    Storyblok.get('spaces/606/assets/' + signed_response_object.id + '/finish_upload').then(response => {
      console.log('https://a.storyblok.com/' + signed_response_object.fields.key + ' uploaded!')
    }).catch(error => { 
      throw error
    })
    console.log('https://a.storyblok.com/' + signed_response_object.fields.key + ' uploaded!')
  })
}
```


```javascript
Storyblok.post('spaces/656/assets/', {
  filename: 'new_file.jpg',
  id: '18472',
  validate_upload: '1'
}).then(response => {
  console.log(response)
}).catch(error => { 
  throw error
})
```