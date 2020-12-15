import { Application } from "express";
import testRoutes from "./routes/test.routes";
import { handleRequest } from "./app/creditors/handleRequest";

export default (app: Application): void => {
  app.post("/credit-search", (req, res) => {
    const body = req.body;

    handleRequest(body, res);
  });

  testRoutes(app);
};
