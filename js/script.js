$(document).ready(function() {
	var $root = $('html, body');
	var bottomPosition = $(window).height();
	$("#wrap").css("margin-top", bottomPosition - 100 + "px");

	$(window).resize(function() {
		var bottomPosition = $(window).height();
		$("#wrapper").css("margin-top", bottomPosition - 100 + "px");
	});

	function scroll($el) {
		var completeCalled = false;
		$root.animate({
			scrollTop: $($el.attr('href')).offset().top - 90
		}, {
			complete: function() {
				if (!completeCalled) {
					completeCalled = true;
				}
			}
		});
	}

	function scrollNoLink($el) {
		var completeCalled = false;
		$('html, body').animate({
			scrollTop: $($el).offset().top - 90
		}, {
			complete: function() {
				if (!completeCalled) {
					completeCalled = true;
				}
			}
		});
	}

	$('#top').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		var $el = $(this);
		scroll($el);
	});

	$('.navbar-default #home').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$el = "#home";
		scrollNoLink($el);
	});
	$('#about').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$el = "#about";
		scrollNoLink($el);
	});
	$('#contact').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$el = "#contact";
		scrollNoLink($el);
	});
	$('#logo a').click(function(e) {
		e.preventDefault();
		e.stopImmediatePropagation();
		$el = "#home";
		scrollNoLink($el);
	});
	$('a[href*=#]').click(function() {
	    var href = $.attr(this, 'href');
		if(href == "#top"){
		    $root.animate({
		        scrollTop: 0}, 500, function () {
		        window.location.hash = href;
		    });			
		}
		else
		{
		    $root.animate({
		        scrollTop: $(href).offset().top - $(".navbar-default").outerHeight() - 45
		    }, 500, function () {
		        window.location.hash = href;
		    });
			
		}
	    return false;
	});
});
