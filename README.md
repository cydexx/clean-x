# Clean-X Browser Extension

Clean-X is a browser extension that simplifies the Twitter (X) interface by removing unwanted elements, providing a cleaner and more focused browsing experience.

## Features

-   Removes the entire right sidebar column
-   Removes specific navigation items from the left side menu (Grok, Jobs, Premium, Business)
-   Keeps the "New Tweet" button for easy tweet creation
-   Automatically applies changes to dynamically loaded content

## Installation

1. Clone this repository or download the source code.
2. Open your browser's extension management page:
    - Chrome: chrome://extensions
    - Firefox: about:addons
    - Edge: edge://extensions
3. Enable "Developer mode" (usually a toggle switch in the top right corner).
4. Click "Load unpacked" (Chrome/Edge) or "Load Temporary Add-on" (Firefox).
5. Select the directory containing the extension files.

## Usage

Once installed, the extension will automatically clean up the Twitter interface when you visit https://twitter.com or https://x.com. No additional configuration is required.

## Development

The extension consists of two main files:

1. `manifest.json`: Contains the extension's metadata and permissions.
2. `content.js`: Contains the JavaScript code that modifies the Twitter interface.

To modify the extension's behavior, edit the `cleanX()` function in `content.js`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE)
