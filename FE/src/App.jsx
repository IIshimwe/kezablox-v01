import { useState, useEffect } from 'react';
import './App.css';
import { BlocklyWorkspace } from 'react-blockly';
import './initContent/content';
import { mapping } from './initContent/constants';
// import { BlocklyEditor } from "react-blockly";
// import Blockly from "blockly";

function parseXml(xmlString) {
  // Create a new DOMParser
  var parser = new DOMParser();

  // Parse the XML string
  var xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  // Find all "block" elements and extract the "type" attribute
  var blockTypes = [];
  var blockElements = xmlDoc.getElementsByTagName('block');

  for (var i = 0; i < blockElements.length; i++) {
    var blockType = blockElements[i].getAttribute('type');
    if (blockType) {
      blockTypes.push(blockType);
    }
  }

  return blockTypes;
}
function App() {
  const INITIAL_XML = '<xml xmlns="http://www.w3.org/1999/xhtml"></xml>';
  const [xml, setXml] = useState(INITIAL_XML);
  const [tokens, setTokens] = useState([]);
  const [setupCode, setSetupCode] = useState();
  console.log('🚀 ~ file: App.jsx:34 ~ App ~ setupCode:', setupCode);
  const [loopCode, setLoopCode] = useState();
  console.log('🚀 ~ file: App.jsx:36 ~ App ~ loopCode:', loopCode);

  console.log('🚀 tokens are:', tokens);

  useEffect(() => {
    if (xml) {
      const values = parseXml(xml);
      setTokens(values);
    }
  }, [xml]);

  useEffect(() => {
    let setup = '';
    let loop = '';
    mapping.forEach((map) => {
      tokens.forEach((token) => {
        if (token === map.name) {
          setup += map.setup;
          loop += map.loop;
        }
      });
    });

    setLoopCode(loop);
    setSetupCode(setup);
  }, [tokens]);
  // Toolbox categories
  const toolboxCategories = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Events',
        colour: '#FD790D',
        contents: [
          {
            kind: 'label',
            text: 'Events',
            cssConfig: {
              container: 'events-label',
            },
          },
          {
            kind: 'block',
            type: 'start',
          },
          {
            kind: 'block',
            type: 'wait',
          },
        ],
      },

      {
        kind: 'category',
        name: 'Arduino',
        colour: '#0FBD8C',
        contents: [
          {
            kind: 'label',
            text: 'Arduino Uno',
            cssConfig: {
              container: 'arduino-label',
            },
          },
          {
            kind: 'block',
            type: 'turn_led_on',
          },
          {
            kind: 'block',
            type: 'turn_led_off',
          },
          {
            kind: 'block',
            type: 'highorlow',
          },
        ],
      },
    ],
  };

  const handleUpload = () => {
    const data = {
      setupCode,
      loopCode,
    };

    const arduinoCode =
      `void setup(){\n` +
      setupCode +
      '}\n' +
      `void loop() {\n` +
      loopCode +
      '}\n';
    console.log(
      '🚀 ~ file: App.jsx:125 ~ handleUpload ~ arduinoCode:',
      arduinoCode
    );
    // fetch('http://localhost:3000/upload', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(data),
    //   mode: 'cors',
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
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
        <a href="#" onClick={handleUpload}>
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
            colour: '#f1f1ff',
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
