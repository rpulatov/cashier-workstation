const Config = require("./config");

const BarcodeScannerService = require("./services/BarcodeScannerService");

const io = require("socket.io")();

io.on("connection", () => {
  console.info("new connection");
});
io.listen(Config.PORT);

const MSG_BARCODE_ENTER = "MSG_BARCODE_ENTER";

const barcodeService = new BarcodeScannerService(Config.BARCODE_SCANNER_PORT);
barcodeService.subscribe((barcode) => {
  io.emit(MSG_BARCODE_ENTER, { barcode });
});
