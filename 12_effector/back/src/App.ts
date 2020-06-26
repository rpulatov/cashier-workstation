import express, { Express } from "express";
import jsend from "jsend";
import cors from "cors";

import routes from "./routes";

import errorMiddleware from "./middleware/error";

class App {
  private _port: number;
  private app: Express;
  constructor(port = 3001) {
    this._port = port;
    this.app = express();
  }

  run() {
    this.app.use(
      cors({
        origin:
          process.env.NODE_ENV === "production" ? "http://example.com" : "*",
      })
    );
    this.app.use(express.json());
    this.app.use(jsend.middleware);
    // this.app.use(authMiddleware)

    this.app.use("/api/v1/", routes);

    this.app.use(errorMiddleware);

    this.app.listen(this._port, function () {
      console.info("Сервер запущен");
    });
  }
}

if (!module.parent) {
  const app = new App();
  app.run();
}

export default App;
