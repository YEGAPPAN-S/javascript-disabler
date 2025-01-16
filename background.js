// background.js
chrome.runtime.onInstalled.addListener(() => {
  // Initialize storage
  chrome.storage.local.set({ disabledDomains: [] });
});