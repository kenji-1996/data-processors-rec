window.onload = function() {
    chrome.runtime.sendMessage({
        type: 'getJRN',
    }, function (response) {
        if (response) {
            var JRN = response.result;
            var autoSubmit = response.autoSubmit;
            insertAndSubmit(JRN,autoSubmit);
            console.log(JRN,autoSubmit);
        }
    });
}

function insertAndSubmit(jobRef = 'PO150', submit = false) {
	var temp = document.documentElement.innerHTML;
	var count = (temp.match(/(\Wfilled)\w+/g) || []).length;
    var outputText = document.getElementsByName('valuee')[0]
    var jobrefText = document.getElementsByName('jobref')[0]
    jobrefText.value = jobRef;
    outputText.value = count.toString();
    submit? document.forms[0].submit() : alert('Data inserted but not submitted');
}