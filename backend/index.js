const express = require("express");
const app = express();

const { Board, Led } = require("johnny-five");
const board = new Board();

board.on("ready", () => {
  const led = new Led(13);

  // Define route to turn on the LED
  app.get("/on", (req, res) => {
    led.blink(500);
    // led.on();
    res.send("LED turned on");
  });

  app.get("/off", (req, res) => {
    // led.off();
    led.stop();
    res.send("LED turned off");
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
