function initFreshChat() {
    window.fcWidget.init({
        token: "d31497fe-3470-4fe0-8a8b-ac378fea3eb2",
        host: "https://wchat.freshchat.com"
    });
}
function initialize(i,t){var e;i.getElementById(t)?initFreshChat():((e=i.createElement("script")).id=t,e.async=!0,e.src="https://wchat.freshchat.com/js/widget.js",e.onload=initFreshChat,i.head.appendChild(e))}function initiateCall(){initialize(document,"freshchat-js-sdk")}window.addEventListener?window.addEventListener("load",initiateCall,!1):window.attachEvent("load",initiateCall,!1);
