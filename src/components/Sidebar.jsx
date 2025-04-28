import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css"; // Este archivo contiene el CSS para los enlaces

const Sidebar = ({ activeLink, setActiveLink, userName }) => {
  return (
    <div className="sidebar">
      {/* Sección de Bienvenida */}
      <div className="welcome-section">
        <p className="welcome-text">Bienvenido, {userName}!</p>
      </div>

      {/* Enlaces de navegación */}
      <Link 
        to="/dashboard"
        className={`sidebar-link ${activeLink === 'dashboard' ? 'active' : ''}`}
        onClick={() => setActiveLink('dashboard')}
      >
        Dashboard
      </Link>
      <Link
        to="/invoices"
        className={`sidebar-link ${activeLink === 'facturas' ? 'active' : ''}`}
        onClick={() => setActiveLink('facturas')}
      >
        Facturas SII
      </Link>
      <Link
        to="/companies"
        className={`sidebar-link ${activeLink === 'empresas' ? 'active' : ''}`}
        onClick={() => setActiveLink('empresas')}
      >
        Empresas
      </Link>
    </div>
  );
};

export default Sidebar;
