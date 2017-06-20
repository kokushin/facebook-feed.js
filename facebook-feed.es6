'use strict';

(($) => {

  const $facebookFeed = $('#js-facebook-feed');

  const options = {
    maxResults: 3, // 取得件数
    maxLength: 50, // 文字数制限
  }

  const promise = $.ajax({
    url: '/api/feed.php',
    dataType: 'json'
  });

  promise.done(() => {
    // 接続成功
    $facebookFeed.empty();
  });

  promise.always((data) => {
    // 準備完了
    for (let i = 0; i < options.maxResults; i++) {
      let picture = data[i]['full_picture'];
      let link = data[i]['link'];
      let message = data[i]['message'].slice(0, options.maxLength) + '...';

      $facebookFeed.append(`<li>
        <figurte><img src="${picture}"></figure>
        <p>${message}</p>
        <a href="${link}" target="_blank">${link}</a>
      </li>`);
    }
  });

  promise.fail(() => {
    $facebookFeed.html(`<li>フィードの取得に失敗しました</li>'`);
  });

})(jQuery);