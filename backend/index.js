const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Merhaba Ömer, backend çalışıyor!" });
});

app.listen(PORT, () => {
  console.log(`API dinliyor: http://localhost:${PORT}`);
});
