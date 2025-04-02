const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  fullDescription: { type: String },
  images: [
    {
      url: String,
      isCover: { type: Boolean, default: false },
    },
  ],
  link: { type: String },

  status: {
    type: String,
    enum: ["draft", "published", "hidden", "archived"],
    default: "draft",
  },

}, {
  timestamps: true
});

module.exports = mongoose.model("Project", projectSchema);
