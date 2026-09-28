import express from "express";
import { loadModules } from "./modules/loader.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

await loadModules(app);

app.get("/", (req, res) => {
  res.json({ name: "moroai 01", status: "running", version: "0.1.0" });
});

app.listen(PORT, () => {
  console.log(`moroai 01 running on http://localhost:${PORT}`);
});
