chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, (response) => {
    console.log(response.farewell)
  })
})