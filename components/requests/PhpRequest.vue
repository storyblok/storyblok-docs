<template>
  <div v-html="output('php')"></div>
</template>

<script>
import RequestMixin from "@/components/requests/RequestMixin"

export default {
  mixins: [RequestMixin],
  computed: {
    request() {
      let queryParams = this.queryParams
      switch (this.httpMethod) {
        case "POST":
          return `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${this.url}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => ${JSON.stringify(JSON.stringify(this.requestObject))},
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: YOUR_OAUTH_TOKEN"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`
          break;
        case "PUT":
          return `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${this.url}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "PUT",
  CURLOPT_POSTFIELDS => ${JSON.stringify(JSON.stringify(this.requestObject))},
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: YOUR_OAUTH_TOKEN"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`
          break;
        case "DELETE":
          return `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${this.url}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "DELETE",
  CURLOPT_POSTFIELDS => ${JSON.stringify(JSON.stringify(this.requestObject))},
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: YOUR_OAUTH_TOKEN"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`
        break;
        case "GETOAUTH":
          queryParams['token'] = 'YOUR_TOKEN'
          return `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${this.url}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(
    "Content-Type: application/json",
    "Authorization: YOUR_OAUTH_TOKEN"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`
        break;
        default:
          return `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "${this.url}",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "GET",
  CURLOPT_HTTPHEADER => array(),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`
          break
      }
    }
  }
}
</script>
