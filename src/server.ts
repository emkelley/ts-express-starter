import cors from "cors";
import http from "http";
import morgan from "morgan";
import express, { Express } from "express";
import routes from "./routes/routes";

const app: Express = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

/** Routes */
app.use("/", routes);

/** General error handling */
app.use((_req, res, _next) => {
  const error = new Error("Endpoint not found");
  return res.status(404).json({
    status_code: 404,
    message: error.message,
  });
});

app.get("/health", (req, res) => {
  res.status(200).send("Ok");
});

/** Server */
const httpServer = http.createServer(app);
const PORT: any = process.env.PORT ?? 5000;
httpServer.listen(PORT, () =>
  console.log(`The server is running on port ${PORT}`)
);
