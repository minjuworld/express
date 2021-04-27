import * as express from "express";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
    this.router();
  }

  private router(): void {
    this.application.get("/", (req: express.Request, res: express.Response) => {
      res.send("<h2>hello!</h2></br><a>asdf</a>");
    });
  }
}

export default App;
