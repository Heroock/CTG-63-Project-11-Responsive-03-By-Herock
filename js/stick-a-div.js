/* ===============================================================================
 * Name: JS Style V2.0 || 2017 !!!
 * Company: Banglasoft@Corporation™ !!!
 * Founder: Engr. Md Mahadi Hassan Herock !!!
 * Website URL-I: http://www.banglasoft.net !!!
 * Website URL-II: http://www.bangla-soft.com !!!
 * Description: Try To Do Something Better Than Other !!!
 ============================================================================== */

/* ====================== JS Plugins Start From Here ======================== */

/* ================== Stick A DIV JS Plugin Start From Here ================= */

function sticky_relocate() {
	var window_top = $(window).scrollTop();
	var div_top = $('#sticky-anchor').offset().top;
	
	if (window_top > div_top) {
		$('#sticky').addClass('stick');
		$('#sticky-anchor').height($('#sticky').outerHeight());
	}
	
	else {
		$('#sticky').removeClass('stick');
		$('#sticky-anchor').height(0);
	}
}

$(function () {
	$(window).scroll(sticky_relocate);
	sticky_relocate();
});

	var dir = 1;
	var MIN_TOP = 200;
	var MAX_TOP = 350;

function autoscroll() {
	var window_top = $(window).scrollTop() + dir;
	if (window_top >= MAX_TOP) {
		window_top = MAX_TOP;
		dir = -1;
	} 
	
	else if (window_top <= MIN_TOP) {
		window_top = MIN_TOP;
		dir = 1;
	}
	
	$(window).scrollTop(window_top);
	window.setTimeout(autoscroll, 100);
}

/* ===================== Stick A DIV JS Plugin End Here ===================== */

/* ========================== JS Plugins End Here =========================== */