chrome.runtime.sendMessage({ greeting: 'hello' }, (response) => {
  console.log(response.farewell)
})
chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension")
    if (request.greeting == "hello") {
      sendResponse({ farewell: "I'm contentscript,goodbye!" })
    }
  })