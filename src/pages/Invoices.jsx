import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo para facturas del SII
const siiInvoices = [
  { id: 'F001-000123', rut: '76.543.210-9', razonSocial: 'Comercial X Ltda.', monto: 230000, estado: 'Aceptada', fecha: '2025-04-01' },
  { id: 'F001-000124', rut: '98.765.432-1', razonSocial: 'Servicios Y SpA', monto: 145000, estado: 'Rechazada', fecha: '2025-04-04' },
  { id: 'F001-000125', rut: '12.345.678-5', razonSocial: 'Importadora Z EIRL', monto: 198000, estado: 'Pendiente', fecha: '2025-04-05' },
];

const Invoices = () => {
  const navigate = useNavigate();

  // Función para redirigir al Dashboard
  const handleVerGraficos = () => {
    navigate('/dashboard');
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Facturas Electrónicas - SII</h2>
        
        {/* Botón para ir al Dashboard */}
        <button
          onClick={handleVerGraficos}
          style={{
            padding: '10px 20px',
            marginBottom: '20px',
            backgroundColor: '#4A90E2',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Volver a los Gráficos
        </button>

        {/* Tabla de facturas */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>N° Documento</th>
              <th>RUT Emisor</th>
              <th>Razón Social</th>
              <th>Monto</th>
              <th>Estado SII</th>
              <th>Fecha</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {siiInvoices.map((factura) => (
              <tr key={factura.id}>
                <td>{factura.id}</td>
                <td>{factura.rut}</td>
                <td>{factura.razonSocial}</td>
                <td>${factura.monto.toLocaleString()}</td>
                <td>{factura.estado}</td>
                <td>{factura.fecha}</td>
                <td><button>Ver Detalle</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoices;


