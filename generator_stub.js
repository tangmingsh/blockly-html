Blockly.JavaScript['block_load_scripts'] = function(block) {
    var value_jslib = Blockly.JavaScript.valueToCode(block, 'JSLIB', Blockly.JavaScript.ORDER_ATOMIC);
    var value_callback = Blockly.JavaScript.valueToCode(block, 'CALLBACK', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'function loadScripts(array,callback){\n' +
        '    var loader = function(src,handler){\n' +
        '        var script = document.createElement("script");\n' +
        '        script.src = src;\n' +
        '        script.onload = script.onreadystatechange = function(){\n' +
        '            script.onreadystatechange = script.onload = null;\n' +
        '            handler();\n' +
        '        }\n' +
        '        var head = document.getElementsByTagName("head")[0];\n' +
        '        (head || document.body).appendChild( script );\n' +
        '    };\n' +
        '    (function run(){\n' +
        '        if(array.length!=0){\n' +
        '            loader(array.shift(), run);\n' +
        '        }else{\n' +
        '            callback && callback();\n' +
        '        }\n' +
        '    })();\n' +
        '}\n' +
        'loadScripts([\n' +
        '    "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.0.1",\n' +
        '    "https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@1.0.0"\n' +
        '],function(){\n' +
        '    app();\n' +
        '});\n';
    return code;
};