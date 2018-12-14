<script>
import RequestMixin from '@/components/requests/RequestMixin'

export default {
  mixins: [RequestMixin],
  computed: {
    rendered() {
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
    }
  }
}
</script>
