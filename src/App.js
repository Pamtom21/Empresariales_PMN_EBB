import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import EmpresasPage from './pages/EmpresasPage';
import FacturasPage from './pages/FacturasPage';
import Companies from './pages/companies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard general */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Listado de todas las facturas SII */}
        <Route path="/invoices" element={<Invoices />} />

        {/* Listado de empresas */}
        <Route path="/empresas" element={<EmpresasPage />} />

        {/* Facturas de una empresa seleccionada */}
        <Route path="/empresas/:empresaId" element={<FacturasPage />} />

        <Route path="/companies" element={<Companies />} /> 
      </Routes>
    </Router>
  );
}

export default App;
