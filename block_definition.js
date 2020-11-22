Blockly.Blocks['block_load_scripts'] = {
    init: function() {
        this.appendValueInput("JSLIB")
            .setCheck("Array")
            .appendField("加载js库");
        this.appendValueInput("CALLBACK")
            .setCheck("String")
            .appendField("完成后，执行回调函数");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};