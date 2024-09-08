function checkIfEnabled(callback) {
    debugger
    chrome.storage.local.get(['isEnabled'], (result) => {
        callback(result.isEnabled !== false);
    });
}

function handleTabUpdate(tabId, changeInfo, tab) {
    debugger
    if (changeInfo.status === 'complete') {
        checkIfEnabled((isEnabled) => {
            // check if url is linkedin.com
            if (isEnabled  ) {
                chrome.scripting.executeScript({
                    target: { tabId },
                    files: ['content.js'],
                });
            }
        });
    }
}

chrome.tabs.onUpdated.addListener(handleTabUpdate);
