function quoraCleaner() {
	var wrppr = document.getElementsByClassName("vertical_alignment_wrapper")[0];
	wrppr.parentNode.removeChild(wrppr);
	var bdy = document.getElementsByTagName("BODY")[0];
	bdy.className = bdy.className.replace( /(?:|\s)gating-new_signup-on signup_wall_prevent_scroll(?!\S)/g , '' )
	console.log('quoraCleaner ran');
} quoraCleaner();

function biCleaner() {
	var ifrm = document.getElementsByClassName("tp-modal")[0];
	ifrm.parentNode.removeChild(ifrm);
	var bckdrp = document.getElementsByClassName("tp-backdrop")[0];
	bckdrp.parentNode.removeChild(bckdrp);
	var bdy = document.getElementsByTagName("BODY")[0];
	bdy.setAttribute("style", "overflow: scroll");
	var rcc = document.getElementsByClassName("recommendation");
	rcc.parentNode.removeChild(rcc);
	console.log('biCleaner ran');
} biCleaner();

function removeCookies() {
	var rmvCksButton = document.getElementById('rmvCks');
	rmvCksButton.addEventListener('click', function() {
		console.log('remove cookies button clicked (1 of 2)');
	}, false);
} removeCookies();

document.addEventListener('DOMContentLoaded', function() {
	console.log("content loaded");

	// get current url
	chrome.tabs.query({'active':true, 'lastFocusedWindow':true}, function (tabs){
		var url = tabs[0].url
	})

	var crrntUrlButton = document.getElementById('crrntUrl');
	crrntUrlButton.addEventListener('click', function() {
		console.log('you are at '+url);
	}, false);

	var rmvCksButton = document.getElementById('rmvCks');
	rmvCksButton.addEventListener('click', function() {
		console.log('remove cookies button clicked (2 of 2)');
	}, false);

}, false);