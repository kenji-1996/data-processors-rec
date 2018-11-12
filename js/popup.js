
chrome.runtime.sendMessage({
    type: 'getJRN',
}, function (response) {
    if (response) {
        document.getElementById('JRN').value = response.result;
        document.getElementById("autoSubmit").checked = response.autoSubmit;
        console.log(response.result);
    }
});
let updateSettings = document.getElementById('saveSettings');
if(updateSettings) {
    updateSettings.onclick = function (element) {
        chrome.runtime.sendMessage({
            type: 'setJRN',
            JRN: document.getElementById('JRN').value,
            autoSubmit: document.getElementById('autoSubmit').checked,
        }, function () { });
    };
}
