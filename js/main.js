$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger , #mask , #nav a").click(function () {
    $('#header').toggleClass('open');
  });


  /*=================================================
  スムーススクロール
  ===================================================*/
  $(function () {
    /*=================================================
    スムーススクロール
    ===================================================*/
    // ページ内のリンクをクリックした時に動作する
    $('a[href^="#"]').click(function () {
      // クリックしたaタグのリンクを取得
      let href = $(this).attr("href");
      // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
      let target = $(href == "#" || href == "" ? "html" : href);
      // ページトップからジャンプ先の要素までの距離を取得
      let position = target.offset().top;
      // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
      // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
      $("html, body").animate({ scrollTop: position }, 2000, "swing");
      // urlが変化しないようにfalseを返す
      return false;
    });
  });



  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  $(".style-photos").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/

  $(window).scroll(function () {
    // 画面がスクロールされた時に実行する

    $(".fadein").each(function () {
      // fadeinクラスに対して順に処理を行う
      // .each()：個別に処理を行うためのメソッド。繰り返し処理を行いながら各要素に対して操作を実行することができる。


      // スクロールした距離
      let scroll = $(window).scrollTop();
      // 現在のスクロール位置を取得する。
      // scrollTop()：要素のスクロール位置を取得

      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;

      // 画面の高さ
      let windowHeight = $(window).height();

      // fadeinクラスの要素が画面内にきたタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {

        // 条件が満たされた場合、要素の不透明度（opacity）を1に設定し、Y軸方向に移動（translateY）させます。
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });
});



