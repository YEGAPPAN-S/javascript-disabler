# JavaScript Disabler

A Chrome extension to toggle JavaScript on specific websites effortlessly. With this tool, you can disable or enable JavaScript for any website with a single click, enhancing your browsing control and security.

## Features

- Enable or disable JavaScript for specific websites.
- Persistent settings for domains using Chrome storage.
- Simple user interface for seamless toggling.
- Automatically reloads the current tab to apply changes.

## Installation

1. Clone this repository or [download the zip file](https://github.com/your-username/javascript-disabler).
2. Extract the files to a directory on your computer.
3. Open Google Chrome and navigate to `chrome://extensions`.
4. Enable "Developer mode" in the top right corner.
5. Click "Load unpacked" and select the directory where the extension files are located.
6. The extension should now appear in your Chrome toolbar.

## Usage

1. Click the **JavaScript Disabler** icon in the Chrome toolbar.
2. The popup will display the current status of JavaScript on the active website.
3. Use the button to toggle JavaScript for the current site:
   - If JavaScript is enabled, clicking the button will disable it.
   - If JavaScript is disabled, clicking the button will enable it.
4. The extension will save your preferences and reload the current tab to apply changes.

## Files Overview

- `manifest.json`: Defines the extension's metadata and permissions.
- `popup.html`: The HTML for the extension's user interface.
- `popup.js`: Handles the functionality of toggling JavaScript and updating settings.
- `background.js`: Initializes storage and manages extension installation.

## Permissions

The extension requires the following permissions:

- `declarativeNetRequest`: To block or modify JavaScript requests.
- `storage`: To store user preferences for disabled domains.
- `tabs`: To reload tabs after toggling settings.
- `activeTab`: To identify the currently active website.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the extension.

## Screenshots

### Popup Interface
![Popup Interface](path/to/screenshot.png)

---

Feel free to customize the repository name, description, or any additional sections based on your preferences.
