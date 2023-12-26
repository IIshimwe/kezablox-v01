import { useState, useEffect } from "react";
import "./App.css";
import { BlocklyWorkspace } from "react-blockly";
import "./initContent/content";
// import { BlocklyEditor } from "react-blockly";
// import Blockly from "blockly";

function parseXml(xmlString) {
  // Create a new DOMParser
  var parser = new DOMParser();

  // Parse the XML string
  var xmlDoc = parser.parseFromString(xmlString, "text/xml");

  // Find all "block" elements and extract the "type" attribute
  var blockTypes = [];
  var blockElements = xmlDoc.getElementsByTagName("block");

  for (var i = 0; i < blockElements.length; i++) {
    var blockType = blockElements[i].getAttribute("type");
    if (blockType) {
      blockTypes.push(blockType);
    }
  }

  return blockTypes;
}
function App() {
  const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';
  const [xml, setXml] = useState(INITIAL_XML);
  const [tokens, setTokens] = useState();
  console.log("🚀 ~ file: App.jsx:32 ~ App ~ tokens:", tokens);

  useEffect(() => {
    if (xml) {
      const values = parseXml(xml);
      setTokens(values);
    }
  }, [xml]);
  // Toolbox categories
  const toolboxCategories = {
    kind: "categoryToolbox",
    contents: [
      {
        kind: "category",
        name: "Events",
        colour: "#FD790D",
        contents: [
          {
            kind: "label",
            text: "Events",
            cssConfig: {
              container: "events-label",
            },
          },
          {
            kind: "block",
            type: "start",
          },
        ],
      },

      {
        kind: "category",
        name: "Arduino",
        colour: "#0FBD8C",
        contents: [
          {
            kind: "label",
            text: "Arduino Uno",
            cssConfig: {
              container: "arduino-label",
            },
          },
          {
            kind: "block",
            type: "turn_led_on",
          },
          {
            kind: "block",
            type: "turn_led_off",
          },
          {
            kind: "block",
            type: "highorlow",
          },
        ],
      },
    ],
  };

  return (
    <>
      <div className="nav-header">
        <div className="app-logo-wrapper">
          <a href="#">
            <img src="/public/logo.webp" alt="" className="app-logo" />
          </a>
          <h2 className="app-title">🅺🅴🆉🅰🅱🅻🅾🆇</h2>
        </div>
        <a href="#">
          <img src="/public/playbutton.png" className="play-button" alt="" />
        </a>
      </div>

      <BlocklyWorkspace
        className="fill-height"
        toolboxConfiguration={toolboxCategories}
        workspaceConfiguration={{
          grid: {
            spacing: 20,
            length: 1.3,
            colour: "#f1f1ff",
            snap: true,
          },
        }}
        initialXml={xml}
        onXmlChange={setXml}
      />
    </>
  );
}

export default App;
