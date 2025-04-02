import { Link } from "react-router-dom";
import projects from "../data/projects";

function Projects() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-teal-600 mb-6 text-center">Projelerim</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="bg-white p-4 shadow-md rounded-lg hover:shadow-xl transition"
          >
            <img src={project.image} alt={project.title} className="rounded mb-4" />
            <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
            <p className="text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
