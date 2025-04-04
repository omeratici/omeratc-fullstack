import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axsios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axsios.get("http://localhost:5000/api/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();

  }, []);
  return (
    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {projects.map((project) => (
      <div key={project._id} className="bg-white shadow-md p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <p className="text-sm text-gray-600 mb-2">{project.shortDescription}</p>
        {project.images?.find(img => img.isCover) && (
          <img
            src={project.images.find(img => img.isCover).url}
            alt="Kapak"
            className="w-full h-40 object-cover rounded"
          />
        )}
        <Link to={`/projects/${project._id}`} className="text-blue-500 hover:underline mt-2 inline-block">
          Proje Detay
        </Link>
      </div>
    ))}
    </div>
  );
}

export default Projects;
