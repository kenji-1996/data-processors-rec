chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.get(function (obj) {
        var JRN = 'PO150';
        var autoSubmit = false;
        if (obj['JRN'] === undefined || obj['JRN'] === null) {
            chrome.storage.sync.set({ JRN: JRN }, function () { });
        }
        if (obj['autoSubmit'] === undefined || obj['autoSubmit'] === null) {
            chrome.storage.sync.set({ autoSubmit: autoSubmit }, function () { });
        }
    });
});

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.type == "getJRN") {
            getJRN(request, sender, sendResponse);
            return true;
        }
        if (request.type == "setJRN") {
            setJRN(request, sender, sendResponse);
            return true;
        }
    });

function getJRN(request, sender, sendResponse) {
    chrome.storage.sync.get(function (obj) {
        let findJRN = obj['JRN'];
        let autoSubmit = obj['autoSubmit'];
        if (findJRN) {
            var resp = sendResponse;
            resp({ result: findJRN, autoSubmit: autoSubmit });
        }
    });
}

function setJRN(request, sender, sendResponse) {
    chrome.storage.sync.set({ JRN: request.JRN, autoSubmit: request.autoSubmit }, function () { });
}