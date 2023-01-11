const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        target.classList.add('active')
        var elem = document.getElementById("toggle-menu");
        if (window.getComputedStyle(elem).display != "none") {
            elem.click();
        }
    })
})
function onLoadSwitchTab(tabName) {
    tabContents.forEach(tab => {
        if (tab.id.includes(tabName)) {
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            })
            tab.classList.add('active')
        }
    })
}
window.onload = function () {
    // updateMintNumbers();
    var url = window.location.href;
    var inputs = {}
    for (var input of url.substring(url.indexOf("?") + 1).split('&')) {
        var keyValue = input.split('=');
        inputs[keyValue[0]] = keyValue.length > 1 ? keyValue[1] : keyValue[0];
    };
    if ("tab" in inputs) {
        onLoadSwitchTab(inputs["tab"])
    }
    else if ("whitelist" in inputs) {
        onLoadSwitchTab("whitelist")
    }
    else if ("presale" in inputs) {
        onLoadSwitchTab("whitelist")
    }
    if ("source" in inputs) {
        document.getElementById("whiteListSource").value = inputs["source"];
        document.getElementById("rsvpSource").value = inputs["source"];
    }
}

function updateMintNumbers() {
    var collectionSize = 4000;
    var target = document.getElementById("collectionCount");
    target.innerHTML = collectionSize;

    // Replace this with function to get fill mint count.
    var totalMintCount = 0;
    target = document.getElementById("totalMintCount");
    target.innerHTML = totalMintCount;
}

function whiteListSubmit() {
    var x = document.getElementById("congrats");
    x.style.opacity = "100%";

    var x2 = document.getElementById("whiteListSubmit")
    x2.style.display = "none";
}

function rsvpSubmit() {
    var x = document.getElementById("rsvpSuccess");
    x.style.opacity = "100%";

    var x2 = document.getElementById("rsvpSubmit")
    x2.style.display = "none";
}

function closeEmail(isSubmit) {
    var x = document.getElementById("newsLetterSignUp");
    x.style.display = "none"
    if (isSubmit) {
        var x2 = document.getElementById("newsletterGoogleSubmit");
        x2.click();
    }
}