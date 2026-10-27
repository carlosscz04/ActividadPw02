import express from "express";
import reactorRoutes from "./routes/reactor.routes.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(reactorRoutes);

app.get("/", (req, res) => {
  res.json({ mensaje: "Servidor del reactor en línea" });
});

app.listen(PORT, () => {
  console.log(`Servidor del reactor en http://localhost:${PORT}`);
});