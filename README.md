# Pinhead
Help run the distributed web! A UI for IPFS pinning.

Runs completely in the browser locally. (No install required)

Currently only capable of viewing images.

## Setup
1. Download/extract the project ZIP file wherever
2. In order for Pinhead to work, the access control on your IPFS install needs to be opened up. You can do this by running these commands:
```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
```
Keep in mind that this will allow any RPC call, from any HTTP source on the system, to command your IPFS daemon.

## Usage
Navigate to the directory where you put the downloaded files in the URL box of your browser.
* Linux (and probably Mac?): `/home/<username>/<path-to-downloaded-files>/pinhead/index.html`
* Windows: `file:///D:\<path-to-downloaded-files>\pinhead\index.html`
