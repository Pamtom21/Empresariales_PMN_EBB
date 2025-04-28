import React, { useMemo, useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend
} from "recharts";
import { DollarSign, FileText, BarChart2, Building, Home } from "lucide-react";

// Datos simulados por empresa
const dataPorEmpresa = [
  {
    empresa: "Copec",
    facturas: [
      { mes: "Ene", monto: 120000, iva: 22800 },
      { mes: "Feb", monto: 90000, iva: 17100 },
      { mes: "Mar", monto: 110000, iva: 20900 }
    ]
  },
  {
    empresa: "Cencosud",
    facturas: [
      { mes: "Ene", monto: 80000, iva: 15200 },
      { mes: "Feb", monto: 95000, iva: 18050 },
      { mes: "Mar", monto: 100000, iva: 19000 }
    ]
  },
  {
    empresa: "LATAM Airlines",
    facturas: [
      { mes: "Ene", monto: 60000, iva: 11400 },
      { mes: "Feb", monto: 70000, iva: 13300 },
      { mes: "Mar", monto: 85000, iva: 16150 }
    ]
  }
];

// Agregar datos por mes
const meses = ["Ene", "Feb", "Mar"];
const data = meses.map((m) => {
  const gastos = dataPorEmpresa.reduce(
    (sum, e) => sum + (e.facturas.find((f) => f.mes === m)?.monto || 0),
    0
  );
  const iva = dataPorEmpresa.reduce(
    (sum, e) => sum + (e.facturas.find((f) => f.mes === m)?.iva || 0),
    0
  );
  return { mes: m, gastos, iva };
});

export default function Dashboard() {
  const [activeLink, setActiveLink] = useState("dashboard");

  // Cálculos de métricas
  const { totalGastos, totalIva, totalFacturas } = useMemo(() => {
    const totalGastos = data.reduce((sum, d) => sum + d.gastos, 0);
    const totalIva = data.reduce((sum, d) => sum + d.iva, 0);
    const totalFacturas = dataPorEmpresa.reduce(
      (sum, e) => sum + e.facturas.length,
      0
    );
    return { totalGastos, totalIva, totalFacturas };
  }, []);

  return (
    <div className="dashboard-container flex min-h-screen bg-gray-100">
      <Sidebar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        userName="Contador"
      />

      <div className="main-content flex-1 p-8 space-y-8">
        <Header />

        {/* Metrics */}
        <section className="metrics grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <div className="card-body">
              <DollarSign className="card-icon green" />
              <div>
                <div className="card-title">Gastos Totales</div>
                <div className="card-value">
                  ${totalGastos.toLocaleString()} CLP
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <FileText className="card-icon blue" />
              <div>
                <div className="card-title">Facturas Recibidas</div>
                <div className="card-value">{totalFacturas}</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <BarChart2 className="card-icon purple" />
              <div>
                <div className="card-title">IVA Total</div>
                <div className="card-value">
                  ${totalIva.toLocaleString()} CLP
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Charts */}
        <section className="charts grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="chart-container">
            <h2>Gastos por Mes</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="gastos" fill="#4F46E5" name="Gastos" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-container">
            <h2>IVA por Mes</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="iva"
                  stroke="#10B981"
                  name="IVA"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </div>
  );
}
