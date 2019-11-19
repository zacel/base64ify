var base64ify = module.exports = {
    encodeDecode(args) {

        if (args[0] == "decode") {
            var b = new Buffer.from(args[1], "base64");
            return b.toString();
        } else {
            //encode
            var b = new Buffer.from(args[1]);
            return b.toString('base64');
        }
    },
    base64ify (args) {
        if (base64ify.requestForHelp(args)) {
            return "Base64ify a Base64 Encoder Decoder: \n usage:\n to encode: base64ify 'string to encode'\n to decode: base64ify decode 'base64 encoded string";
        } else if (args.length > 1) {
            return base64ify.encodeDecode(args)
        } else {
            var b = new Buffer.from(args[0]);
            return b.toString('base64');
        }
    },
    requestForHelp(args) {
        if (args[0] == '-h' || args[0] == "help") {
            return true;
        }
        return false;
    }
}


console.log(base64ify.encodeDecode(['decode', "dGVzdA=="]));