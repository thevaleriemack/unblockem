// when extension is installed or upgraded
chrome.runtime.onInstalled.addListener(function() {
	// replace all rules
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		// new rule
		chrome.declarativeContent.onPageChanged.addRules([
			{
				// quora
				conditions: [
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { urlContains: 'quora.com'},
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