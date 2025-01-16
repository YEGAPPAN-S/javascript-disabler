// popup.js
document.addEventListener('DOMContentLoaded', async () => {
  const currentSite = document.getElementById('currentSite');
  const controls = document.getElementById('controls');

  // Get current tab URL
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const domain = new URL(tab.url).hostname;

  // Check if JavaScript is disabled for this domain
  const { disabledDomains = [] } = await chrome.storage.local.get('disabledDomains');
  const isDisabled = disabledDomains.includes(domain);

  // Display current status
  const status = document.createElement('div');
  status.className = `status ${isDisabled ? 'disabled' : 'enabled'}`;
  status.textContent = `JavaScript is currently ${isDisabled ? 'disabled' : 'enabled'} on ${domain}`;
  currentSite.appendChild(status);

  // Create toggle button
  const toggleButton = document.createElement('button');
  toggleButton.textContent = isDisabled ? 'Enable JavaScript' : 'Disable JavaScript';
  toggleButton.onclick = async () => {
    let { disabledDomains = [] } = await chrome.storage.local.get('disabledDomains');
    
    if (isDisabled) {
      // Remove domain from disabled list
      disabledDomains = disabledDomains.filter(d => d !== domain);
    } else {
      // Add domain to disabled list
      disabledDomains = [...disabledDomains, domain];
    }
    
    await chrome.storage.local.set({ disabledDomains });
    
    // Update rule
    const rule = {
      id: 1,
      priority: 1,
      action: {
        type: "modifyHeaders",
        responseHeaders: [{
          header: "Content-Security-Policy",
          operation: "set",
          value: "script-src 'none'"
        }]
      },
      condition: {
        urlFilter: domain,
        resourceTypes: ["main_frame", "sub_frame"]
      }
    };

    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: [1],
      addRules: isDisabled ? [] : [rule]
    });

    // Reload the current tab to apply changes
    chrome.tabs.reload(tab.id);
    window.close();
  };
  controls.appendChild(toggleButton);
});