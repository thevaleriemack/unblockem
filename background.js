// when extension is installed or upgraded
chrome.runtime.onInstalled.addListener(function() {
	// replace all rules
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		// new rule
		/* one rule per action */ 
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
				// quora
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { urlContains: 'quora.com'},
					}),
				// business insider
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { urlContains: 'businessinsider.com'},
					}),
				// ibtimes
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { urlContains: 'ibtimes.co'},
					})
				],
				actions: [ new chrome.declarativeContent.ShowPageAction() ]
			}
		]);
	});
});

chrome.pageAction.onClicked.addListener(function(tab) {
	chrome.tabs.executeScript(null, {file: "tooltip.js"})
})