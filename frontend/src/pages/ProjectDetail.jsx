import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  if (id === "retina-classifier") {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-gray-800">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">Retinal Image Classifier</h1>
        <p className="mb-4 text-lg">
          Bu projede göz dibi görüntülerini sınıflandırmak amacıyla derin öğrenme temelli bir CNN modeli eğitildi.
          Retina taramaları üzerinden sağlık teşhisi yapılmasına yardımcı olmayı amaçlar.
        </p>

        <ul className="mb-4 list-disc list-inside text-gray-700">
          <li>Veri kümesi: Kaggle - Retinal OCT Images</li>
          <li>Model: Convolutional Neural Network (CNN)</li>
          <li>Framework: TensorFlow / Keras</li>
          <li>Görüntü işleme: OpenCV</li>
        </ul>

        <div className="mb-6">
          <img
            src="/project_thumbs/retina.png"
            alt="Retina örneği"
            className="rounded shadow-md"
          />
        </div>

        <a
          href="https://github.com/omeratc/retina-classifier"
          target="_blank"
          rel="noreferrer"
          className="inline-block px-6 py-3 bg-amber-600 text-white rounded hover:bg-amber-700 transition"
        >
          GitHub Repo
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-center text-gray-600">
      <h2 className="text-2xl font-bold mb-4">Proje bulunamadı</h2>
      <p>Belirttiğiniz proje ID'sine karşılık gelen bir içerik bulunamadı.</p>
    </div>
  );
}

export default ProjectDetail;
