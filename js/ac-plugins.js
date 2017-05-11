/* ===============================================================================
 * Name: JS Style V1.0 !!!
 * Company: Banglasoft@Corporation !!!
 * Founder: Engr. Md Mahadi Hassan Herock !!!
 * Website URL-I: http://www.banglasoft.net !!!
 * Website URL-II: http://www.bangla-soft.com !!!
 * Description: Try To Do Something Better Than Other !!!
 ============================================================================== */

/* ======== Avoid 'Console' Errors In Browsers That Lack A Console ========== */

(function () {
	var method;
	var noop = function () {};
	var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

/* ==== Avoid 'Console' Errors In Browsers That Lack A Console End Here ===== */

/* ====================== JS Plugins Start From Here ======================== */


$(document).ready(function () {
	
	$('#alert-me').click(function (e) {

		e.preventDefault();

		$('#success-alert').slideDown();

	});
	
	$('a.pop').click(function (e) {
		
		e.preventDefault();
		
	});

	$('a.pop').popover();

	$('[rel="tooltip"]').tooltip();

});

/* ========================== JS Plugins End Here =========================== */