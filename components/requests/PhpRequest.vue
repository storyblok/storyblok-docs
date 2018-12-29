<script>
import RequestMixin from "@/components/requests/RequestMixin"

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
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
        default:
          let queryParams = this.queryParams
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
