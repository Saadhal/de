// import React, { useEffect, useState } from 'react';
// import './AdminDashboard.css';
//
// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// // Génération de données fictives
// const generateMockData = () => {
//   const now = new Date();
//   // Rendez-vous
//   const appointments = Array.from({ length: 20 }, (_, i) => {
//     const date = new Date(now.getTime() + getRandomInt(-2, 48) * 60 * 60 * 1000);
//     return {
//       id: i + 1,
//       patient: ['Jean Dupont', 'Marie Martin', 'Pierre Durand', 'Sophie Bernard', 'Lucas Petit'][getRandomInt(0, 4)],
//       phone: `0${getRandomInt(600000000, 699999999)}`,
//       service: ['Consultation', 'Détartrage', 'Carie', 'Extraction', 'Orthodontie'][getRandomInt(0, 4)],
//       date,
//       status: ['Confirmé', 'En attente', 'Annulé'][getRandomInt(0, 2)],
//       price: getRandomInt(30, 120)
//     };
//   });
//
//   // Patients
//   const totalPatients = getRandomInt(120, 200);
//   const newPatients = getRandomInt(5, 20);
//
//   // Finances
//   const revenusJour = appointments.filter(a => a.date.toDateString() === now.toDateString()).reduce((sum, a) => sum + a.price, 0);
//   const revenusSemaine = appointments
//     .filter(a => {
//       const diff = (a.date - now) / (1000 * 60 * 60 * 24);
//       return diff >= -now.getDay() && diff < (7 - now.getDay());
//     })
//     .reduce((sum, a) => sum + a.price, 0);
//   const revenusMois = appointments
//     .filter(a => a.date.getMonth() === now.getMonth())
//     .reduce((sum, a) => sum + a.price, 0);
//
//   // Prochains rendez-vous (dans les 2h à venir)
//   const next2h = appointments
//     .filter(a => {
//       const diff = (a.date - now) / (1000 * 60 * 60);
//       return diff >= 0 && diff <= 2;
//     })
//     .sort((a, b) => a.date - b.date);
//
//   // Rendez-vous aujourd'hui et cette semaine
//   const rdvToday = appointments.filter(a => a.date.toDateString() === now.toDateString()).length;
//   const startOfWeek = new Date(now);
//   startOfWeek.setDate(now.getDate() - now.getDay());
//   const endOfWeek = new Date(startOfWeek);
//   endOfWeek.setDate(startOfWeek.getDate() + 6);
//   const rdvWeek = appointments.filter(a => a.date >= startOfWeek && a.date <= endOfWeek).length;
//
//   return {
//     appointments,
//     rdvToday,
//     rdvWeek,
//     next2h,
//     totalPatients,
//     newPatients,
//     revenusJour,
//     revenusSemaine,
//     revenusMois
//   };
// };
//
// const AdminDashboard = () => {
//   const [data, setData] = useState(null);
//
//   useEffect(() => {
//     setData(generateMockData());
//   }, []);
//
//   if (!data) {
//     return <div className="main-content"><div className="loading">Chargement du tableau de bord...</div></div>;
//   }
//
//   return (
//     <div className="main-content admin-dashboard">
//       <h1>Tableau de bord administrateur</h1>
//       <div className="dashboard-stats">
//         <div className="stat-card">
//           <span className="stat-title">📅 Rendez-vous aujourd’hui</span>
//           <span className="stat-value">{data.rdvToday}</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-title">📅 Rendez-vous cette semaine</span>
//           <span className="stat-value">{data.rdvWeek}</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-title">👥 Patients inscrits</span>
//           <span className="stat-value">{data.totalPatients}</span>
//         </div>
//         <div className="stat-card">
//           <span className="stat-title">🔄 Nouveaux patients ce mois</span>
//           <span className="stat-value">{data.newPatients}</span>
//         </div>
//       </div>
//
//       <div className="dashboard-section">
//         <h2>⏰ Prochains rendez-vous (2h à venir)</h2>
//         {data.next2h.length === 0 ? (
//           <div className="empty">Aucun rendez-vous imminent</div>
//         ) : (
//           <table className="dashboard-table">
//             <thead>
//               <tr>
//                 <th>Heure</th>
//                 <th>Patient</th>
//                 <th>Téléphone</th>
//                 <th>Service</th>
//                 <th>Statut</th>
//               </tr>
//             </thead>
//             <tbody>
//               {data.next2h.map(rdv => (
//                 <tr key={rdv.id}>
//                   <td>{rdv.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
//                   <td>{rdv.patient}</td>
//                   <td>{rdv.phone}</td>
//                   <td>{rdv.service}</td>
//                   <td>{rdv.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//
//       <div className="dashboard-finance">
//         <div className="finance-card">
//           <span className="finance-title">💵 Revenus du jour</span>
//           <span className="finance-value">{data.revenusJour} €</span>
//         </div>
//         <div className="finance-card">
//           <span className="finance-title">💵 Revenus de la semaine</span>
//           <span className="finance-value">{data.revenusSemaine} €</span>
//         </div>
//         <div className="finance-card">
//           <span className="finance-title">💵 Revenus du mois</span>
//           <span className="finance-value">{data.revenusMois} €</span>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default AdminDashboard;
import React, { useEffect, useState } from "react";
import {
  Menu,
  X,
  Bell,
  Search,
  User,
  CalendarCheck,
  Users,
  DollarSign,
  AlertTriangle
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import "./AdminDashboard.css";

/* -------------------------------------------------------------------------- */
/*                               Fake Data Layer                              */
/* -------------------------------------------------------------------------- */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const generateMockData = () => {
  const now = new Date();

  const appointments = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(now.getTime() + getRandomInt(-2, 72) * 60 * 60 * 1000);
    return {
      id: i + 1,
      patient: [
        "Jean Dupont",
        "Marie Martin",
        "Pierre Durand",
        "Sophie Bernard",
        "Lucas Petit",
      ][getRandomInt(0, 4)],
      phone: `0${getRandomInt(600000000, 699999999)}`,
      service: [
        "Consultation",
        "Détartrage",
        "Carie",
        "Extraction",
        "Orthodontie",
      ][getRandomInt(0, 4)],
      date,
      status: ["Confirmé", "En attente", "Annulé"][getRandomInt(0, 2)],
      price: getRandomInt(30, 120),
    };
  });

  const invoices = Array.from({ length: 8 }, (_, i) => ({
    id: `INV-${100 + i}`,
    patient: appointments[i].patient,
    amount: `${appointments[i].price} €`,
    status: ["Payée", "En attente"][getRandomInt(0, 1)],
  }));

  const totalPatients = getRandomInt(120, 200);
  const newPatients = getRandomInt(5, 20);

  const revenusJour = appointments
      .filter((a) => a.date.toDateString() === now.toDateString())
      .reduce((sum, a) => sum + a.price, 0);

  const revenusMois = appointments
      .filter((a) => a.date.getMonth() === now.getMonth())
      .reduce((sum, a) => sum + a.price, 0);

  const next2h = appointments
      .filter((a) => {
        const diff = (a.date - now) / (1000 * 60 * 60);
        return diff >= 0 && diff <= 2;
      })
      .sort((a, b) => a.date - b.date);

  const rdvToday = appointments.filter(
      (a) => a.date.toDateString() === now.toDateString()
  ).length;

  return {
    appointments,
    invoices,
    rdvToday,
    totalPatients,
    newPatients,
    revenusJour,
    revenusMois,
    next2h,
  };
};

/* -------------------------------------------------------------------------- */
/*                                UI Helpers                                  */
/* -------------------------------------------------------------------------- */
const Sidebar = ({ open, items }) => (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <h2 className="sidebar-brand">Dental Admin</h2>
      <ul>
        {items.map((it) => (
            <li key={it}>{it}</li>
        ))}
      </ul>
    </aside>
);


const KpiCard = ({ icon: Icon, label, value, gradient }) => (
    <div className="stat-card" style={{ background: gradient }}>
      <Icon size={24} />
      <span className="stat-title">{label}</span>
      <span className="stat-value">{value}</span>
    </div>
);

// Remplace l’ancienne définition de Table par celle-ci
const Table = ({ headers, rows }) => (
    <div className="appointments-table-container">
      <table className="appointments-table">
        <thead>
        <tr>
          {headers.map((h) => (
              <th key={h}>{h}</th>
          ))}
        </tr>
        </thead>

        <tbody>
        {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, i) =>
                  i === headers.length - 1 && headers[i].toLowerCase().includes("statut") ? (
                      <td key={i}>
                  <span className={`status ${cell.toLowerCase().replaceAll(' ', '-')}`}>
                    {cell}
                  </span>
                      </td>
                  ) : (
                      <td key={i}>{cell}</td>
                  )
              )}
            </tr>
        ))}
        </tbody>
      </table>
    </div>
);


/* -------------------------------------------------------------------------- */
/*                              Main Dashboard                                 */
/* -------------------------------------------------------------------------- */
function AdminDashboard() {
  const [data, setData] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((o) => !o);

  useEffect(() => {
    setData(generateMockData());
  }, []);

  if (!data) return <div className="loading">Chargement…</div>;

  const kpis = [
    {
      icon: CalendarCheck,
      label: "RDV aujourd’hui",
      value: data.rdvToday,
      gradient: "linear-gradient(135deg,#00c3ff 0%,#7f53ac 100%)",
    },
    {
      icon: Users,
      label: "Patients inscrits",
      value: data.totalPatients,
      gradient: "linear-gradient(135deg,#11998e 0%,#38ef7d 100%)",
    },
    {
      icon: AlertTriangle,
      label: "Nouveaux patients",
      value: data.newPatients,
      gradient: "linear-gradient(135deg,#ee0979 0%,#ff6a00 100%)",
    },
    {
      icon: DollarSign,
      label: "Revenus du mois",
      value: `${data.revenusMois} €`,
      gradient: "linear-gradient(135deg,#fc4a1a 0%,#f7b733 100%)",
    },
  ];

  const appointmentRows = data.next2h.map((a) => [
    a.date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    a.patient,
    a.phone,
    a.service,
    a.status,
  ]);

  const invoiceRows = data.invoices.map((inv) => [
    inv.id,
    inv.patient,
    inv.amount,
    inv.status,
  ]);

  /* ------------------------------- Chart Data ------------------------------ */
  const revenueByHour = data.appointments.reduce((acc, a) => {
    const h = new Date(a.date).getHours();
    acc[h] = (acc[h] || 0) + a.price;
    return acc;
  }, {});

  const chartData = Object.keys(revenueByHour).map((hour) => ({
    hour: `${hour}h`,
    revenue: revenueByHour[hour],
  }));

  return (
      <div className="admin-dashboard">
        <div className="content-area">
          {/* KPI Grid */}
          <section className="dashboard-stats">
            {kpis.map((k) => (
                <KpiCard key={k.label} {...k} />
            ))}
          </section>

          {/* Revenue Chart */}
          <section className="dashboard-section">
            <h2>Revenus / heure</h2>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#007bff" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#007bff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="#007bff"
                    fillOpacity={1}
                    fill="url(#revGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </section>

          {/* Upcoming Appointments */}
          <section className="dashboard-section">
            <h2>⏰ Prochains RDV (2h)</h2>
            {appointmentRows.length ? (
                <Table
                    headers={["Heure", "Patient", "Téléphone", "Service", "Statut"]}
                    rows={appointmentRows}
                />
            ) : (
                <p className="empty">Aucun RDV imminent</p>
            )}
          </section>

          {/* Recent Invoices */}
          <section className="dashboard-section">
            <h2>📄 Factures récentes</h2>
            <Table headers={["#", "Patient", "Montant", "Statut"]} rows={invoiceRows} />
          </section>
        </div>
      </div>
  );
}


export default AdminDashboard;
