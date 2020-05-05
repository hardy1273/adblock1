chrome.webRequest.onBeforeRequest.addListener(
function(details){ return {cancel:true}},
    {urls: defaultFilters},
    ["blocking"]
)

defaultFilters=[
    "*://*.doubleclick.net/*"
    "*://partner.googleadservices.com/*",
    "*://*.google.syndication.com/*",
    "*://*.google-analytics.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://*.adbrite.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.scorecardresearch.com/*",
    "*://*.zedo.com/",
    "*://*.adsoftheworld.com/*",
    
    
]