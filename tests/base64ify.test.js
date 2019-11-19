var base64ify = require('../base64ify');
test ('base64ify.base64ify is a function', () => {
    expect(typeof(base64ify.base64ify)).toEqual("function");
}); 
test ('base64ify.encodeDecode is a function', () => {
    expect(typeof(base64ify.encodeDecode)).toEqual("function");
}); 
test ('base64ify.requestForHelp is a function', () => {
    expect(typeof(base64ify.requestForHelp)).toEqual("function");
}); 
describe ('base64ify.base64ify recieves encoding input', () => {
   
    var result = base64ify.base64ify(["test"]);
    test("returns b64 encoded string with one arg", () => {
       expect(result).toEqual("dGVzdA==");
    });

    var result = base64ify.base64ify(["encode","test"]);
   test("returns b64 encoded string with two arg first being encode", () => {
        expect(result).toEqual("dGVzdA==");
    });
}); 

describe ('base64ify.base64ify recieves decoding input', () => {

    var result = base64ify.base64ify(["decode","dGVzdA=="]);
    test("returns b64 decoded string with two arg first being decode", () => {
        expect(result).toEqual("test");
    });
}); 

describe ('base64ify.encodeDecode recieves input', () => {

    var result1 = base64ify.encodeDecode(["decode","dGVzdA=="]);
    test("returns b64 decoded string with two arg first being decode", () => {
        expect(result1).toEqual("test");
    });
    var result = base64ify.encodeDecode(["encode","test"]);
    test("returns b64 encoded string with two arg first being encode", () => {
        expect(result).toEqual("dGVzdA==");
    });
}); 

describe ('base64ify.base64ify recieves request for help', () => {

    var result = base64ify.base64ify(["help","dGVzdA=="]);
    test("returns help msg with two arg first being help", () => {
        expect(result).toEqual("Base64ify a Base64 Encoder Decoder: \n usage:\n to encode: base64ify 'string to encode'\n to decode: base64ify decode 'base64 encoded string");
    });
    var result2 = base64ify.base64ify(["-h"]);
    test("returns help msg with one arg: -h", () => {
        expect(result2).toEqual("Base64ify a Base64 Encoder Decoder: \n usage:\n to encode: base64ify 'string to encode'\n to decode: base64ify decode 'base64 encoded string");
    });
    var result3 = base64ify.base64ify([]);
    test("returns help msg with no args", () => {
        expect(result3).toEqual("Base64ify a Base64 Encoder Decoder: \n usage:\n to encode: base64ify 'string to encode'\n to decode: base64ify decode 'base64 encoded string");
    });
}); 

