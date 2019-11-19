# Base64ify
cli to encode and decode base64 strings.

This package has a lot of loose strings and shouldn't be used anywhere mission critical. for example ``` base64ify otter "penguin" ``` is a valid command that will encode the string ```penguin```.

## Usage:
Encoding:
```
base64ify "your string to encode"
```
or 
```
base64ify encode "your string to encode"
```

Decoding:
```
base64ify decode "your encoded string here"
```

## Install:
Unix:
```
chmod +x bin/base64ify
npm link
```

