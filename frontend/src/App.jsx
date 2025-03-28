import { useEffect, useState } from 'react';

function App() {
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetch("https://omeratc-fullstack-1.onrender.com/api/hello")
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
