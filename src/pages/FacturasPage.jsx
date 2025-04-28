import { useParams } from "react-router-dom";
import "./FacturasPage.css";

// Datos falsos de facturas
const facturasMock = {
  1: [
    { id: 101, monto: 120000, fecha: "2025-01-15" },
    { id: 102, monto: 85000, fecha: "2025-02-20" },
  ],
  2: [
    { id: 201, monto: 64000, fecha: "2025-03-10" },
  ],
  3: [
    { id: 301, monto: 45000, fecha: "2025-04-05" },
    { id: 302, monto: 56000, fecha: "2025-04-20" },
    { id: 303, monto: 73000, fecha: "2025-05-12" },
  ],
};

export default function FacturasPage() {
  const { empresaId } = useParams();
  const facturas = facturasMock[empresaId] || [];

  return (
    <div className="facturas-page">
      <h1>Facturas Empresa #{empresaId}</h1>

      {facturas.length === 0 ? (
        <p>No hay facturas registradas.</p>
      ) : (
        <div className="facturas-list">
          {facturas.map((factura) => (
            <div key={factura.id} className="factura-card">
              <h2>Factura #{factura.id}</h2>
              <p>Monto: ${factura.monto.toLocaleString("es-CL")} CLP</p>
              <p>Fecha: {factura.fecha}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
