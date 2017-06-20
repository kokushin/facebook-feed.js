<?php

$ACCESS_TOKEN = 'XXXXXXXXXXXXXXXX';
$APP_ID = 'XXXXXXXXXXXXXXXX';

$url = 'https://graph.facebook.com/v2.8/'. $APP_ID .'/feed?fields=message,id,link,full_picture&access_token='. $ACCESS_TOKEN;

$json = json_decode(file_get_contents($url), TRUE);

header('Content-Type: text/javascript; charset=utf-8');
echo json_encode($json['data']);
exit();