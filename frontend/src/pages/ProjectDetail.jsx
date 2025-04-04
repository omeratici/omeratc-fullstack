import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/projects/${id}`)
      .then(res => {
        let xx =`${import.meta.env.VITE_API_URL}`;
        console.log("Detay alındı:", xx);
        setProject(res.data);
      })
      .catch(err => console.error("Detay alınamadı:", err));
  }, [id]);

  if (!project) return <p className="p-6">Yükleniyor...</p>;

  const cover = project.images?.find(img => img.isCover);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>

      {cover && (
        <img
          src={cover.url}
          alt="Kapak"
          className="w-full h-72 object-cover rounded mb-4"
        />
      )}

      <p className="text-gray-700 mb-4">
        {project.fullDescription || project.shortDescription}
      </p>

      {typeof project.link === "string" && project.link.startsWith("http") && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-teal-500 text-white px-4 py-2 rounded"
        >
          Uygulamayı Gör
        </a>
      )}
    </div>
  );
}

export default ProjectDetail;
