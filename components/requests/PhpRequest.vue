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

$request = new HttpRequest();
$request->setUrl('${this.urlWithoutParams}');
$request->setMethod(HTTP_METH_POST);

$request->setHeaders(array(
  'Content-Type' => 'application/json'
  'Authorization' => 'YOUR_OAUTH_TOKEN'
));

$request->setBody('${JSON.stringify(this.requestObject, null, 2)}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}`
          break;
        case "PUT":
          return `<?php

$request = new HttpRequest();
$request->setUrl('${this.urlWithoutParams}');
$request->setMethod(HTTP_METH_PUT);

$request->setHeaders(array(
  'Content-Type' => 'application/json'
  'Authorization' => 'YOUR_OAUTH_TOKEN'
));

$request->setBody('${JSON.stringify(this.requestObject, null, 2)}');

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}`
          break;
        case "DELETE":
          return `<?php

$request = new HttpRequest();
$request->setUrl('${this.urlWithoutParams}');
$request->setMethod(HTTP_METH_DELETE);

$request->setHeaders(array(
  'Content-Type' => 'application/json'
  'Authorization' => 'YOUR_OAUTH_TOKEN'
));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}`
        break;
        case "GETOAUTH":
          queryParams['token'] = 'YOUR_TOKEN'
          return `<?php

$request = new HttpRequest();
$request->setUrl('${this.urlWithoutParams}');
$request->setMethod(HTTP_METH_GET);

$request->setHeaders(array(
  'Content-Type' => 'application/json'
  'Authorization' => 'YOUR_OAUTH_TOKEN'
));

$request->setQueryData(array(${JSON.stringify(queryParams, null, 2)}));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}`
        break;
        default:
          queryParams['token'] = 'YOUR_TOKEN'
          return `<?php

$request = new HttpRequest();
$request->setUrl('${this.urlWithoutParams}');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(${JSON.stringify(queryParams, null, 2)}));

try {
  $response = $request->send();

  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}`
          break
      }
    }
  }
}
</script>
