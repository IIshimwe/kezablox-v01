import Blockly from "blockly";

// Start block
Blockly.Blocks["start"] = {
  init: function () {
    this.appendDummyInput().appendField("when program starts, do:");
    this.setNextStatement(true, null);
    this.setColour("#FD790D");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Turn LED on block
Blockly.Blocks["turn_led_on"] = {
  init: function () {
    this.appendDummyInput().appendField("turn the LED on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setColour(165);
    this.setColour("#0FBD8C");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Turn LED off block
Blockly.Blocks["turn_led_off"] = {
  init: function () {
    this.appendDummyInput().appendField("turn the LED off");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setColour(0);
    this.setColour("#0FBD8C");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

// Turn LED HIGH or LOW
Blockly.Blocks["highorlow"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldImage(
          "https://cdn.pixabay.com/photo/2017/03/23/12/32/arduino-2168193_1280.png",
          25,
          25,
          { alt: "*", flipRtl: "FALSE" }
        )
      )
      .appendField(
        new Blockly.FieldLabelSerializable("set digital pin"),
        "setpin"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["2", "PIN2"],
          ["3", "PIN3"],
          ["4", "PIN4"],
          ["5", "PIN5"],
          ["6", "PIN6"],
          ["7", "PIN7"],
          ["8", "PIN8"],
          ["9", "PIN9"],
          ["10", "PIN10"],
          ["11", "PIN11"],
          ["12", "PIN12"],
          ["13", "PIN13"],
          ["A0", "PINA0"],
          ["A1", "PINA1"],
          ["A2", "PINA2"],
          ["A3", "PINA3"],
          ["A4", "PINA4"],
          ["A5", "PINA5"],
        ]),
        "set digital pin"
      )
      .appendField(new Blockly.FieldLabelSerializable("output as"), "NAME")
      .appendField(
        new Blockly.FieldDropdown([
          ["HIGH", "HIGH"],
          ["LOW", "LOW"],
        ]),
        "NAME"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    // this.setColour(230);
    this.setColour("#0FBD8C");
    this.setTooltip("");
    this.setHelpUrl("");
  },
};
