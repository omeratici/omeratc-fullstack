function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Merhaba, ben Ömer!
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Yapay zeka , makine öğrenmesi ve görüntü işleme alanında projeler geliştiriyor, deneyimlerimi ve çalışmalarımı bu sitede paylaşıyorum.
        </p>
        {/* İsteğe bağlı bir görsel ekleyebilirsin */}
        <img
          src="https://via.placeholder.com/600x300" 
          alt="Tanıtım Görseli"
          className="mx-auto rounded shadow-md"
        />
      </div>
    </div>
  );
}

export default Home;
