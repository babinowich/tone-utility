# Tone Analyzer Utility
Use this program to analyze the tone of a .txt file.

You'll need to have node.js installed on your machine.

[Windows Installation](http://blog.teamtreehouse.com/install-node-js-npm-windows)

[Mac Installation](http://blog.teamtreehouse.com/install-node-js-npm-mac)


## Install Utility

Change directory to the path of this application

Run:
```
npm install
```

Done!

## Add Tone Analyzer credentials

Create a free Tone Analyzer service by signing into your IBM Cloud account.  You can use this [quick link](https://www.ibm.com/watson/services/tone-analyzer/) which will redirect you to the Tone Analyzer service or IBM Cloud signup if you do not have an account.

Add your service credentials of your newly created instance to line 15 and 16 on the tone.js file.

## Prepare document for analysis

This utility consumes .txt files only.  Save the .txt file you wish to analyze to the same folder as this application.  The folder structure must be flat (no nested directories).

## Send document for analysis

Open terminal (mac) or command line (PC) and type the following:

```
node tone.js -f sample.txt -o outputName
```
Where sample.txt is the txt file name that you wish to analyze and outputName is the name of the json file that the utility saves.

If you do not include the `-o` flag, the utility will name the output file the same as the file name input, appending .json.
