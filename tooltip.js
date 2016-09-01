function quoraCleaner() {
	var wrapper = document.getElementsByClassName("vertical_alignment_wrapper")[0];
	wrapper.parentNode.removeChild(wrapper);
	var body = document.getElementsByTagName("BODY")[0];
	body.className = body.className.replace( /(?:|\s)gating-new_signup-on signup_wall_prevent_scroll(?!\S)/g , '' )
	console.log('quoraCleaner ran');
} quoraCleaner();

function removeCookies() {
	var rmvCksButton = document.getElementById('rmvCks');
	rmvCksButton.addEventListener('click', function() {
		console.log('remove cookies button clicked');
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
		console.log('remove cookies button clicked');
	}, false);

}, false);