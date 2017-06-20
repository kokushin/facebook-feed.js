'use strict';

(function($) {

  var $facebookFeed = $('#js-facebook-feed');

  var options = {
    maxResults: 3, // 取得件数
    maxLength: 50, // 文字数制限
  }

  var promise = $.ajax({
    url: '/api/feed.php',
    dataType: 'json'
  });

  promise.done(function () {
    // 接続成功
    $facebookFeed.empty();
  });

  promise.always(function(data) {
    // 準備完了
    for (var i = 0; i < options.maxResults; i++) {
      var picture = data[i]['full_picture'];
      var link = data[i]['link'];
      var message = data[i]['message'].slice(0, options.maxLength) + '...';

      $facebookFeed.append('<li>\
        <figurte><img src="'+ picture +'"></figure>\
        <p>'+ message +'</p>\
        <a href="'+ link +'" target="_blank">'+ link +'</a>\
      </li>');
    }
  });

  promise.fail(function () {
    $facebookFeed.html('<li>フィードの取得に失敗しました</li>');
  });

})(jQuery);