const sendMessageId = document.getElementById("sendmessageid")


if (sendMessageId) {
    // https://developer.chrome.com/docs/extensions/reference/tabs/#method-sendMessage
    sendMessageId.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const tabId = tabs[0].id
            const message = {
                url: chrome.runtime.getURL("images/stars.jpeg"),
                imageDivId: `${guidGenerator()}`,
                tabId: tabs[0].id
            }
            const callback = (response) => window.close()
            
            chrome.tabs.sendMessage(tabId, message, callback)
            
            function guidGenerator() {
                const S4 = function () {
                    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
                };
                return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
            }
        })
    }
}