const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Bağlantı
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB bağlantısı başarılı"))
.catch((err) => console.error("❌ MongoDB bağlantı hatası:", err));

// Routes
const projectRoutes = require("./routes/projectRoutes");
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);


// Test endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Merhaba Ömer, backend çalışıyor!" });
});

app.listen(PORT, () => {
  console.log(`🚀 API dinliyor: http://localhost:${PORT}`);
});
