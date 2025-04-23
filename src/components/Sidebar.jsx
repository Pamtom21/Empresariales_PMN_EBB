
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => (
  <div className="sidebar">
    <h2>Admin</h2>
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/invoices">Facturas</Link>
    </nav>
  </div>
);

export default Sidebar;
