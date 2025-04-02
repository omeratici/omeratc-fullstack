import { Link } from "react-router-dom";
import logo from "../assets/logo_3.png";
import logo2 from "../assets/logo_4.png";
import { useState } from "react";

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <nav className="bg-gray-300 text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Sol: Logo */}
        <Link to="/" className="text-2xl font-bold text-teal-400">
          <img 
            src={isHovered ? logo : logo2} 
            alt="Logo" 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="h-16 inline-block mr-2" 
          />
        </Link>

        {/* Sağ: Menü */}
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-amber-600">Anasayfa</Link></li>
          <li><Link to="/about" className="hover:text-amber-600">Hakkımda</Link></li>
          <li><Link to="/projects" className="hover:text-amber-600">Projeler</Link></li>
          <li><Link to="/blog" className="hover:text-amber-600">Blog</Link></li>
          <li><Link to="/contact" className="hover:text-amber-600">İletişim</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
