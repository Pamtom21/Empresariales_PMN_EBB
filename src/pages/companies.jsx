import React, { useState } from 'react';
import "./companies.css";
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

const empresasMock = [
  { id: 'E001', nombre: 'Copec', rut: '76.123.456-7', sector: 'Energía', contacto: 'contacto@copec.cl' },
  { id: 'E002', nombre: 'Cencosud', rut: '76.234.567-8', sector: 'Retail', contacto: 'contacto@cencosud.cl' },
  { id: 'E003', nombre: 'LATAM Airlines', rut: '76.345.678-9', sector: 'Aerolínea', contacto: 'contacto@latam.com' },
  { id: 'E004', nombre: 'Banco de Chile', rut: '76.456.789-0', sector: 'Banca', contacto: 'contacto@bancochile.cl' },
  { id: 'E005', nombre: 'Sodimac', rut: '76.567.890-1', sector: 'Construcción', contacto: 'contacto@sodimac.cl' },
];

export default function Companies() {
  const [filtro, setFiltro] = useState('');

  const empresasFiltradas = filtro
    ? empresasMock.filter(e => e.nombre.toLowerCase().includes(filtro.toLowerCase()))
    : empresasMock;

  return (
    <div className="companies-container">
      <Sidebar />
      <div className="companies-main">
        <Header />
        <section className="companies-header">
          <h2>Empresas Relacionadas</h2>
          <p>Lista de empresas con las que trabajamos.</p>
        </section>

        <section className="filter-section">
          <BuildingOffice2Icon className="filter-icon" />
          <input
            type="text"
            placeholder="Buscar empresa..."
            value={filtro}
            onChange={e => setFiltro(e.target.value)}
            className="filter-input"
          />
        </section>

        <section className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>RUT</th>
                <th>Sector</th>
                <th>Contacto</th>
              </tr>
            </thead>
            <tbody>
              {empresasFiltradas.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.nombre}</td>
                  <td>{emp.rut}</td>
                  <td>{emp.sector}</td>
                  <td>{emp.contacto}</td>
                </tr>
              ))}
              {empresasFiltradas.length === 0 && (
                <tr>
                  <td colSpan="5" className="empty-message">
                    No se encontraron empresas.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
}
