/*
if (domain == "quora") {
	delete sign up wall wrapper
	remove "gating-new_signup-on signup_wall_prevent_scroll"
		from body class
}

*/

var rule1 = {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.google.com', schemes: ['https'] },
            css: ["body[class='password']"]
          })
        ],
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      };