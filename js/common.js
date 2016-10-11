$(window).onload = function() {
	backTop = function(btnId) {
		var btn = document.getElementById(btnId);
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		window.onscroll = set;
		btn.onclick = function() {
			btn.style.opacity = "0.5";
			window.onscroll = null;
			this.timer = setInterval(function() {
				scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				scrollTop -= Math.ceil(scrollTop * 0.1);
				if(scrollTop == 0) clearInterval(btn.timer, window.onscroll = set);
				if(document.documentElement.scrollTop > 0) document.documentElement.scrollTop = scrollTop;
				if(document.body.scrollTop > 0) document.body.scrollTop = scrollTop;
			}, 10);
		};

		function set() {
			scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			btn.style.opacity = scrollTop ? '1' : "0.5";
		}
	};
	backTop('gotop');
}

//动画显示边条内容区域
$(function() {
	var areas = new Array();
	areas = nc_a[0];
	for(i = 0; i < areas.length; i++) {
		$(".deliver-address").append(" <li><a href='#'>" + areas[i][1] + "</a></li>");
	}
	$(".deliver-address li").eq(0).addClass("selected");
	$(".deliver-address li a").click(function() {
		$(this).parent().addClass("selected").siblings().removeClass('selected');
		$(".your-address em").text($(this).text());
		$.ajax({
			url: "index.php?act=index&op=setAdressSession",
			dataType: "json",
			type: "POST",
			data: {
				address: $(this).text()
			}
		})
	});

	ncToolbar();
	$(window).resize(function() {
		ncToolbar();
	});

	function ncToolbar() {
		if($(window).width() >= 1240) {
			$('#appBarTabs >.variation').show();
		} else {
			$('#appBarTabs >.variation').hide();
		}
	}
	$('#appBarTabs').hover(
		function() {
			$('#appBarTabs >.variation').show();
		},
		function() {
			ncToolbar();
		}
	);
	$("#compare").click(function() {
		if($("#content-compare").css('right') == '-210px') {
			loadCompare(false);
			$('#content-cart').animate({
				'right': '-210px'
			});
			$("#content-compare").animate({
				right: '35px'
			});
		} else {
			$(".close").click();
			$(".chat-list").css("display", 'none');
		}
	});
	$("#rtoolbar_cart").click(function() {
		if($("#content-cart").css('right') == '-210px') {
			$('#content-compare').animate({
				'right': '-210px'
			});
			$("#content-cart").animate({
				right: '35px'
			});
			if(!$("#rtoolbar_cartlist").html()) {
				$("#rtoolbar_cartlist").load('index.php?act=cart&op=ajax_load&type=html');
			}
		} else {
			$(".close").click();
			$(".chat-list").css("display", 'none');
		}
	});
	$(".close").click(function() {
		$(".content-box").animate({
			right: '-210px'
		});
	});

	$(".quick-menu dl").hover(function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
		});

	// 右侧bar用户信息
	$('div[nctype="a-barUserInfo"]').click(function() {
		$('div[nctype="barUserInfo"]').toggle();
	});
	// 右侧bar登录
	$('div[nctype="a-barLoginBox"]').click(function() {
		$('div[nctype="barLoginBox"]').toggle();
		document.getElementById('codeimage').src = 'http://www.mallvv.com/shop/index.php?act=seccode&op=makecode&nchash=c93636e5&t=' + Math.random();
	});
	$('a[nctype="close-barLoginBox"]').click(function() {
		$('div[nctype="barLoginBox"]').toggle();
	});
});