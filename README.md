![Pinhead Preview](http://i.imgur.com/lfAYX2u.png)

# Pinhead
This is a rough little application I built out of curiosity about IPFS and to play around with the API.

Runs in the browser locally. (No install required)

Maybe I'll keep working on this project to support other file types and the ability to pin/remove-pin from within the app.

## Warning!!
Do NOT use if you've pinned large files or have pinned a lot of files! Unfortunately, until I can figure out a different way, Pinhead downloads and checks the MIME type of EVERY file you've pinned to check for images! I haven't tested limits, but it's probably not a good idea if you've pinned more than a total of ~100 MB worth of files.

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

## Tips
* BTC: 176yjaTEJm5eG6K9WRNpChntbZ5VDw5TBa
* ETH: 0xD4B1E6a0B8f52bcf8Cb3eA4f4E2D91AD31784E2e
