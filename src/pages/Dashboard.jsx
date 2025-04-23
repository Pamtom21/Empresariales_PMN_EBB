import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { useNavigate } from 'react-router-dom';

// Datos de ejemplo para gastos y IVA
const data = [
  { mes: 'Ene', gastos: 1200, iva: 252 },
  { mes: 'Feb', gastos: 950, iva: 199.5 },
  { mes: 'Mar', gastos: 1340, iva: 281.4 },
  { mes: 'Abr', gastos: 1180, iva: 247.8 },
  { mes: 'May', gastos: 1420, iva: 298.2 },
  { mes: 'Jun', gastos: 1100, iva: 231 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  // Función para redirigir al listado de facturas
  const handleVerFacturas = () => {
    navigate('/invoices');
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <Header />
      <div style={{ padding: '20px' }}>
        <h2>Resumen Financiero</h2>

        {/* Botón para ver las facturas */}
        <button
          onClick={handleVerFacturas}
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
          Ver Facturas del SII
        </button>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
          {/* Gráfico de Gastos acumulados */}
          <div>
            <h3>Gastos acumulados por mes</h3>
            <BarChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="gastos" fill="#8884d8" name="Gastos ($)" />
            </BarChart>
          </div>

          {/* Gráfico de IVA acumulado */}
          <div>
            <h3>IVA acumulado por mes</h3>
            <LineChart width={400} height={250} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="mes" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="iva" stroke="#82ca9d" name="IVA ($)" />
            </LineChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


