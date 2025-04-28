import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import "./EmpresasPage.css";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";

const empresasData = [
  { id: 1, nombre: "Copec", rut: "76.123.456-7", sector: "Energía" },
  { id: 2, nombre: "Cencosud", rut: "76.234.567-8", sector: "Retail" },
  { id: 3, nombre: "LATAM Airlines", rut: "76.345.678-9", sector: "Aerolínea" },
  { id: 4, nombre: "Banco de Chile", rut: "76.456.789-0", sector: "Banca" },
  { id: 5, nombre: "Sodimac", rut: "76.567.890-1", sector: "Construcción" },
];

export default function EmpresasPage() {
  const [filtro, setFiltro] = useState("");

  const filtradas = filtro
    ? empresasData.filter(e =>
        e.nombre.toLowerCase().includes(filtro.toLowerCase())
      )
    : empresasData;

  return (
    <div className="empresas-container">
      <Sidebar />
      <div className="empresas-main">
        <Header />
        <section className="empresas-header">
          <h2>Empresas Relacionadas</h2>
          <p>Selecciona una empresa para ver sus facturas.</p>
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
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {filtradas.map(emp => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.nombre}</td>
                  <td>{emp.rut}</td>
                  <td>{emp.sector}</td>
                  <td>
                    <Link to={`/empresas/${emp.id}`} className="btn btn-blue">
                      Ver Facturas
                    </Link>
                  </td>
                </tr>
              ))}
              {filtradas.length === 0 && (
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
