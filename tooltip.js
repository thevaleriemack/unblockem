function quoraCleaner() {
	var wrppr = document.getElementsByClassName("vertical_alignment_wrapper")[0];
	var bdy = document.getElementsByTagName("BODY")[0];
	if (wrppr == bdy == null) {
		console.log('could not find elements');
	} else {
		wrppr.parentNode.removeChild(wrppr);
		bdy.style.overflow = "scroll";
		bdy.className = bdy.className.replace( /(?:|\s)gating-new_signup-on signup_wall_prevent_scroll(?!\S)/g , '' )
		console.log('quoraCleaner ran');
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
		bdy.style.overflow = "scroll";
		rcc.parentNode.removeChild(rcc);
		console.log('biCleaner ran');
	}
}

// loader
function addLoader(){
	var loader = document.createElement("canvas");
	loader.id = "_loader";
	loader.innerHTML="UnblockEm";
	document.body.appendChild(loader);
	var st = loader.style;
	st.position = "absolute";
	st.margin = "100px auto";
	st.top = "0px";
	st.width = "100px";
	st.zIndex = "10";
}
function animateLoader() {
	var cnvs = document.getElementById("_loader");
	var ctx = cnvs.getContext('2d');
	
	var start = new Date();
	var lines = 500, cW = cnvs.width, cH = cnvs.height;
	var draw = function() {
		var rotation = parseInt(((new Date() - start) / 1800) * lines) / lines;
	    ctx.save();
	    ctx.clearRect(0, 0, cW, cH);
	    ctx.translate(cW / 2, cH / 2);
	    ctx.rotate(Math.PI * 2 * rotation);
	    for (var i = 0; i < lines; i++) {
	    	ctx.beginPath();
	        ctx.rotate(Math.PI * 2 / lines);
	        ctx.moveTo(cW / 10, 0);
	        ctx.lineTo(cW / 4, 0);
	        ctx.lineWidth = cW / 30;
	        ctx.strokeStyle = "rgba(255,200,155," + i / lines + ")";
	        ctx.stroke();
	    }
	    ctx.restore();
	};
	var interval = setInterval(draw, 1000 / 30);
	return interval;
}
function removeLoader() {
	var cnvs = document.getElementById("_loader");
	cnvs.parentNode.removeChild(cnvs);
}

function unblockEm() {
	addLoader();
	var loaderInterval = animateLoader();
	var url = window.location.href;
	var timesRun = 0;
	// runs every 3 seconds, 10 times total
	var interval = setInterval(function(){
		timesRun+= 1;
		if (timesRun > 10){
			console.log("cleaner stopped after 10 runs for diligence");
			clearInterval(interval);
			clearInterval(loaderInterval);
			removeLoader();
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
