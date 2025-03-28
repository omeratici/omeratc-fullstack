import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")  // Render'da deploy edince bu URL değişecek
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>omeratc.com</h1>
      <p>Gelen mesaj: {msg}</p>
    </div>
  );
}

export default App;
