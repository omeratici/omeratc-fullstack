const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const newProject = new Project(req.body);
    await newProject.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).json({ error: "Proje eklenemedi", details: err });
  }
};

exports.getPublishedProjects = async (req, res) => {
  try {
    const projects = await Project.find({ status: "published" });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Projeler alınamadı", details: err });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: "Tüm projeler alınamadı", details: err });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ error: "Proje bulunamadı" });
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "Proje getirilemedi", details: err });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: "Proje güncellenemedi", details: err });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: "Proje silindi" });
  } catch (err) {
    res.status(500).json({ error: "Proje silinemedi", details: err });
  }
};
