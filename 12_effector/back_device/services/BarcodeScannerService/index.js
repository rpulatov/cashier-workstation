const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");

class BarcodeScannerService {
  constructor(portNum) {
    this.port = new SerialPort(portNum, { autoOpen: false });

    const parser = new Readline({ delimiter: "\r\n" });
    this.port.pipe(parser);
    parser.on("data", (line) => this.dataReceive(line));

    this.port.open((err) => {
      if (err) {
        return console.info(err.message);
      }
      console.info("BarcodeScannerService - port open");
    });

    this.subscribers = [];
  }

  subscribe(cb) {
    if (typeof cb === "function") {
      this.subscribers.push(cb);
    }
  }

  dataReceive(line) {
    this.subscribers.forEach((cb) => cb(line));
  }
}

module.exports = BarcodeScannerService;
