// @deno-types="npm:@types/express@4"
import express, {
  Express,
  NextFunction,
  Request,
  Response,
} from "npm:express@4.18.2";

import digimonRouter from "./digimon/digimon.routes.ts";

const app: Express = express();

const reqLogger = function (req: Request, _res: Response, next: NextFunction) {
  console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
  next();
};


app.use(reqLogger);
app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("デジタルワールドへようこそ!");
});
app.use(digimonRouter);
export default app;
