$(function() {
	//搜索左侧的切换
	$("#search .search_tips").hover(function() {
		$(this).find("ul").show();
	}, function() {
		$(this).find("ul").hide();
	});
	$("#search .search_tips li").click(function() {
		var span_text = $(this).html();
		var hidden_value = $(this).attr("act");
		$("#search .search_tips span em").html(span_text);
		$(".search-form input[type=hidden]").val(hidden_value);
		$(this).parent().hide();
	});
	//精选分类的切换
	$(".public-nav-layout .all-category").hover(function() {
		$(this).find(".category").show();
	}, function() {
		$(this).find(".category").hide();
	});
	//site-menu 下拉列表的切换
	$(".public-nav-layout .site-menu .hover-list").hover(function() {
		var a_href = $(this).find("a").attr("href");
		var cate_index = a_href.indexOf("actid");
		var alt_id = a_href.slice(cate_index + 6);
		$(".col-block-wrap").hide();
		$(".top_menu_" + alt_id + "").show();
		var w_href = window.location.href;
		$(".public-nav-layout .wrapper .nav-classify").hide();
		if(w_href.indexOf(a_href) > -1) {
			$(".public-nav-layout .nav-classify").hide();
		} else {
			$(".public-nav-layout .nav-classify").show();
		}

	}, function() {
		$(".public-nav-layout .nav-classify").hide();
	});
	$(".public-nav-layout .wrapper .nav-classify").hover(function() {
		$(this).show();
	}, function() {
		$(this).hide();
	});
	//地址的选择
	$(".address-select").hover(function() {
		$(this).find("ul").show();
	}, function() {
		$(this).find("ul").hide();
	});
	//
	$(".quick-menu dl").hover(function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
		});
	//
	$(".deliver-address li").eq(0).addClass("selected");
	$(".deliver-address li a").click(function() {
		$(this).parent().addClass("selected").siblings().removeClass('selected');
		$(".your-address em").text($(this).text());
		//		$.ajax({
		//			url: "",
		//			dataType: "json",
		//			type: "POST",
		//			data: {
		//				address: $(this).text()
		//			}
		//		})
	});

	$(".head-user-menu dl").hover(function() {
			$(this).addClass("hover");
		},
		function() {
			$(this).removeClass("hover");
		});

	//	$('.head-user-menu .my-mall').mouseover(function() { // 最近浏览的商品
	//		load_history_information();
	//		$(this).unbind('mouseover');
	//	});
	//	$('.head-user-menu .my-cart').mouseover(function() { // 运行加载购物车
	//		load_cart_information();
	//		$(this).unbind('mouseover');
	//	});
	$('#button').click(function() {
		if($('#keyword').val() == '') {
			return false;
		}
	});
	
	
	

});