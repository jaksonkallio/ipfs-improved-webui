# Pinhead
Help run the distributed web! A UI for IPFS pinning.

Runs completely in the browser locally. (No install required)

Currently only capable of viewing images.

In order for Pinhead to work, the access control on your IPFS install needs to be opened up. You can do this by running these commands:

```
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Origin '["*"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Methods '["PUT", "GET", "POST"]'
ipfs config --json API.HTTPHeaders.Access-Control-Allow-Credentials '["true"]'
```
