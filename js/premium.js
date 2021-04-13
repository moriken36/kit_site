<!-- マップ -->
$(function() {
        var options = {
        controls: {
            panControl: false,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: true,
            overviewMapControl: true
        },
        scrollwheel: false,
        maptype: 'ROADMAP',                    
        zoom: 15
    };

        options.latitude = '33.643292';
        options.longitude = '130.692025';
        options.markers = [
            {
                latitude: '33.643292',
                longitude: '130.692025',
                html: '石窯Grill &amp; Wine Dining TETE',
                popup: true
            }
        ];
    
    $('#gmap9').gMap(options);
});


<!-- ////マップ -->


<!-- メニューアコーディオン -->
$(function() {
	var timer = false;
	$(window).resize(function() {
		if (timer !== false) {
			clearTimeout(timer);
		}
		timer = setTimeout(function() {
			if($(window).width()>=768){
				$(".togb").next(".tog").removeAttr("style");
				$('#top-head').removeClass('fixed');<!-- PCサイズになった時のヘッダーを固定じゃなくする -->
			}
		}, 200);
	});
	$(".togb").click(function() {
		if($(window).width()<768){
			$(this).next(".tog").slideToggle();
			$(this).toggleClass("current");
		}
	});
});




$(function() {
	
	 $(".open").click(function () {
		   var windowWidth = window.innerWidth;// クリックしてからウィンドウサイズを取得
		   var windowSm = 769;
		   $wrap = $('html');
		   $menu = $('.menu');
		   
		   if (windowWidth <= windowSm) {// ウィンドウサイズにあわせて適用
	  　		$menu.toggleClass('hide').slideToggle();
		   }
		   
		   
		   if ($menu.hasClass('hide')) {
			  $wrap.removeClass('no-scroll').off('.noScroll');
			} else {
			//メニューが開いている時に、bodyに.no-scrollを追加してスクロールさせない
			//  $wrap.addClass('no-scroll').on('touchmove.noScroll', function(e){
			//	e.preventDefault();
			//  $wrap.on('touchmove.noScroll', function(e){
			//	e.preventDefault();
			//	});
			//  });
			}
	  });
	  
	  
	 $('li').click(function(e) {
		  var windowWidth = window.innerWidth;
		   var windowSm = 769;
		   
		   if (windowWidth <= windowSm) {	
				$(this).children('ul').slideToggle('fast');
				e.stopPropagation();
		   }
	  });
		
		
  
});




// ウィンドウサイズがPCサイズになったらdisplay:noneなどのスタイルを全部消す
$(window).resize(function(){
	var windowWidth = $(window).width();
	var windowSm = 769; 
	
	if (windowWidth >= windowSm) {
		$(".menu").removeAttr('style');
	}
});	



<!-- スライダー -->
$(function() {
	$('.center-item').slick({
		infinite: true,
		dots:true,
		slidesToShow: 1,
		centerMode: true, //要素を中央寄せ
		centerPadding:'100px', //両サイドの見えている部分のサイズ
		autoplay:true, //自動再生
		responsive: [{
			breakpoint: 768,
				settings: {
					centerMode: false,
			}
		}]
	});
});


<!-- PCとスマホで画像を変える -->

$(function() {
  // 置換の対象とするclass属性。
  var $elem = $('.js-image-switch');
  // 置換の対象とするsrc属性の末尾の文字列。
  var sp = '_sp.';
  var pc = '_pc.';
  // 画像を切り替えるウィンドウサイズ。
  var replaceWidth = 768;

  function imageSwitch() {
    // ウィンドウサイズを取得する。
    var windowWidth = parseInt($(window).width());

    // ページ内にあるすべての`.js-image-switch`に適応される。
    $elem.each(function() {
      var $this = $(this);
      // ウィンドウサイズが768px以上であれば_spを_pcに置換する。
      if(windowWidth >= replaceWidth) {
        $this.attr('src', $this.attr('src').replace(sp, pc));

      // ウィンドウサイズが768px未満であれば_pcを_spに置換する。
      } else {
        $this.attr('src', $this.attr('src').replace(pc, sp));
      }
    });
  }
  imageSwitch();

  // 動的なリサイズは操作後0.2秒経ってから処理を実行する。
  var resizeTimer;
  $(window).on('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      imageSwitch();
    }, 100);
  });
});

<!-- ライトボックス -->
$(document).ready(function() {
	$('[data-fancybox]').fancybox();
});


