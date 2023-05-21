// @deno-types="npm:@types/express@4"
import express, {
  Express,
  NextFunction,
  Request,
  Response,
} from "npm:express@4.18.2";
import demoData from "./data_blob.json" assert { type: "json" };

const app: Express = express();
const port: number = Number(Deno.env.get("PORT")) || 3000;

const reqLogger = function (req: Request, _res: Response, next: NextFunction) {
  console.info(`${req.method} request to "${req.url}" by ${req.hostname}`);
  next();
};

app.use(reqLogger);
app.get("/", (_req: Request, res: Response) => {
  res.status(200).send("デジタルワールドへようこそ！");
});

app.get("/digimon", (_req, res) => {
  res.status(200).json(demoData.digimon);
});

app.get("/digimon/:id", (req, res) => {
  const idx = Number(req.params.id);
  for (const user of demoData.digimon) {
    if (user.id === idx) {
      res.status(200).json(user);
    }
  }
  res.status(400).json({ msg: "User not found" });
});

app.listen(port, () => {
  console.log(`Listening on ${port} ...`);
});
