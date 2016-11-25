function quoraCleaner() {
	var wrppr = document.getElementsByClassName("vertical_alignment_wrapper")[0];
	var bdy = document.getElementsByTagName("BODY")[0];
	if (wrppr == bdy == null) {
		wrppr.parentNode.removeChild(wrppr);
		bdy.className = bdy.className.replace( /(?:|\s)gating-new_signup-on signup_wall_prevent_scroll(?!\S)/g , '' )
		console.log('quoraCleaner ran');
	} else {
		console.log('could not find elements');
	}
}

function biCleaner() {
	var ifrm = document.getElementsByClassName("tp-modal")[0];
	var bckdrp = document.getElementsByClassName("tp-backdrop")[0];
	var bdy = document.getElementsByTagName("BODY")[0];
	var rcc = document.getElementsByClassName("recommendation");
	if (ifrm == bckdrp == bdy == rcc == null) {
		console.log('could not find elements');
	} else {
		ifrm.parentNode.removeChild(ifrm);
		bckdrp.parentNode.removeChild(bckdrp);
		bdy.setAttribute("style", "overflow: scroll");
		rcc.parentNode.removeChild(rcc);
		console.log('biCleaner ran');
	}
}

function unblockEm() {
	var url = window.location.href;
	var timesRun = 0;
	// runs every 3 seconds, 10 times total
	var interval = setInterval(function(){
		timesRun+= 1;
		if (timesRun > 10){
			console.log("cleaner stopped after 10 runs for diligence");
			clearInterval(interval);
			return;
		}
		if (url.includes('quora.com')) {
			console.log("found quora");
			quoraCleaner();
		} else if (url.includes('businessinsider.com')) {
			console.log("found businessinsider");
			biCleaner();
		} else {
			console.log("found nothing :(");
		}
	}, 3000);
} unblockEm();
