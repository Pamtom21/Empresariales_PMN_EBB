import React, { useState } from 'react';
import "./Invoices.css";  
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { DocumentTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const facturasMock = [
  { id: 'F001', fecha: '2024-01-15', proveedor: 'Proveedor A', monto: 45000, iva: 8550 },
  { id: 'F002', fecha: '2024-02-20', proveedor: 'Proveedor B', monto: 67000, iva: 12730 },
  { id: 'F003', fecha: '2024-03-12', proveedor: 'Proveedor C', monto: 38000, iva: 7220 },
  { id: 'F004', fecha: '2024-04-05', proveedor: 'Proveedor A', monto: 59000, iva: 11210 },
  { id: 'F005', fecha: '2024-05-25', proveedor: 'Proveedor D', monto: 72000, iva: 13680 },
];

const Invoices = () => {
  const [filtroProveedor, setFiltroProveedor] = useState('');
  const [activeLink, setActiveLink] = useState('facturas');

  const facturasFiltradas = filtroProveedor
    ? facturasMock.filter(f => f.proveedor === filtroProveedor)
    : facturasMock;

  return (
    <div className="invoices-container">
      <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
      <div className="invoices-main">
        <Header />
        <section>
          <h2>Facturas del SII</h2>
          <p>Consulta y administra las facturas recibidas mensualmente.</p>
        </section>

        <section className="filter-section">
          <label>Filtrar por proveedor:</label>
          <select
            value={filtroProveedor}
            onChange={e => setFiltroProveedor(e.target.value)}
          >
            <option value="">Todos</option>
            <option value="Proveedor A">Proveedor A</option>
            <option value="Proveedor B">Proveedor B</option>
            <option value="Proveedor C">Proveedor C</option>
            <option value="Proveedor D">Proveedor D</option>
          </select>
        </section>

        <section className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Proveedor</th>
                <th>Monto Neto</th>
                <th>IVA</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {facturasFiltradas.map(factura => (
                <tr key={factura.id}>
                  <td>{factura.id}</td>
                  <td>{factura.fecha}</td>
                  <td>{factura.proveedor}</td>
                  <td>${factura.monto.toLocaleString()}</td>
                  <td>${factura.iva.toLocaleString()}</td>
                  <td className="actions-cell">
                    <button
                      onClick={() => alert(`Ver detalles de ${factura.id}`)}
                      className="btn btn-blue"
                    >
                      <DocumentTextIcon className="icon" />
                      Detalle
                    </button>
                    <button
                      onClick={() => alert(`Descargando PDF de ${factura.id}`)}
                      className="btn btn-green"
                    >
                      <ArrowDownTrayIcon className="icon" />
                      PDF
                    </button>
                  </td>
                </tr>
              ))}
              {facturasFiltradas.length === 0 && (
                <tr>
                  <td colSpan="6" className="empty-message">
                    No se encontraron facturas para ese proveedor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Invoices;
