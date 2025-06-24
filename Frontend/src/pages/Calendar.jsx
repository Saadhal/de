import React, { useState, useEffect } from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Box, 
  TextField,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  Sort as SortIcon
} from '@mui/icons-material';
import './Calendar.css';

const Calendar = () => {
  const [appointments, setAppointments] = useState([]);
  const [filter, setFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [loading, setLoading] = useState(true);

  // Simuler l'appel API avec useEffect
  useEffect(() => {
    setTimeout(() => {
      const mockAppointments = generateMockAppointments();
      setAppointments(mockAppointments);
      setLoading(false);
    }, 1000);
  }, []);

  // Fonction pour générer des rendez-vous aléatoires
  const generateMockAppointments = () => {
    const names = ['Jean Dupont', 'Marie Martin', 'Pierre Durand', 'Sophie Bernard', 'Lucas Petit'];
    const services = ['Consultation', 'Détartrage', 'Carie', 'Extraction', 'Orthodontie'];
    const statuses = ['Confirmé', 'En attente', 'Annulé'];
    
    return Array.from({ length: 20 }, (_, index) => ({
      id: index + 1,
      patientName: names[Math.floor(Math.random() * names.length)],
      service: services[Math.floor(Math.random() * services.length)],
      date: new Date(Date.now() + Math.random() * 30 * 24 * 60 * 60 * 1000),
      time: `${Math.floor(Math.random() * 12) + 8}:${Math.random() < 0.5 ? '00' : '30'}`,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      phoneNumber: `0${Math.floor(Math.random() * 900000000 + 100000000)}`
    }));
  };

  // Fonction de tri
  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Fonction pour obtenir l'icône de tri
  const getSortIcon = (columnKey) => {
    if (sortConfig.key !== columnKey) return <SortIcon />;
    return sortConfig.direction === 'asc' ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />;
  };

  // Filtrer et trier les rendez-vous
  const filteredAndSortedAppointments = appointments
    .filter(appointment => {
      // Filtre par date
      const appointmentDate = new Date(appointment.date);
      const today = new Date();
      const nextWeek = new Date(today);
      nextWeek.setDate(nextWeek.getDate() + 7);
      const nextMonth = new Date(today);
      nextMonth.setMonth(nextMonth.getMonth() + 1);

      const dateFilter = (() => {
        switch (filter) {
          case 'today':
            return appointmentDate.toDateString() === today.toDateString();
          case 'week':
            return appointmentDate >= today && appointmentDate <= nextWeek;
          case 'month':
            return appointmentDate >= today && appointmentDate <= nextMonth;
          default:
            return true;
        }
      })();

      // Filtre par statut
      const statusFilterMatch = statusFilter === 'all' || appointment.status === statusFilter;

      // Filtre par recherche
      const searchMatch = appointment.patientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         appointment.phoneNumber.includes(searchQuery);

      return dateFilter && statusFilterMatch && searchMatch;
    })
    .sort((a, b) => {
      if (!sortConfig.key) return 0;

      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      // Gestion spéciale pour les dates
      if (sortConfig.key === 'date') {
        aValue = new Date(a.date).getTime();
        bValue = new Date(b.date).getTime();
      }

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

  if (loading) {
    return (
      <div className="main-content">
        <div className="loading">Chargement des rendez-vous...</div>
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="calendar-page">
        <h1>Calendrier des Rendez-vous</h1>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: 2,
          mb: 4,
          flexWrap: 'wrap'
        }}>
          <FormControl 
            size="small" 
            variant="outlined" 
            sx={{ minWidth: 200 }}
          >
            <InputLabel id="dateFilter-label">Filtrer par période</InputLabel>
            <Select
              labelId="dateFilter-label"
              id="dateFilter"
              value={filter}
              label="Filtrer par période"
              onChange={(e) => setFilter(e.target.value)}
            >
              <MenuItem value="all">
                <em>Toutes les périodes</em>
              </MenuItem>
              <MenuItem value="today">Aujourd'hui</MenuItem>
              <MenuItem value="week">Cette semaine</MenuItem>
              <MenuItem value="month">Ce mois</MenuItem>
            </Select>
          </FormControl>

          <FormControl 
            size="small" 
            variant="outlined" 
            sx={{ minWidth: 200 }}
          >
            <InputLabel id="statusFilter-label">Filtrer par statut</InputLabel>
            <Select
              labelId="statusFilter-label"
              id="statusFilter"
              value={statusFilter}
              label="Filtrer par statut"
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <MenuItem value="all">
                <em>Tous les statuts</em>
              </MenuItem>
              <MenuItem value="Confirmé">Confirmé</MenuItem>
              <MenuItem value="En attente">En attente</MenuItem>
              <MenuItem value="Annulé">Annulé</MenuItem>
            </Select>
          </FormControl>

          <TextField
            size="small"
            label="Rechercher un patient"
            variant="outlined"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            sx={{ minWidth: 200 }}
          />
        </Box>

        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th onClick={() => sortData('date')} className="sortable">
                  Date {getSortIcon('date')}
                </th>
                <th onClick={() => sortData('time')} className="sortable">
                  Heure {getSortIcon('time')}
                </th>
                <th onClick={() => sortData('patientName')} className="sortable">
                  Patient {getSortIcon('patientName')}
                </th>
                <th>
                  Téléphone
                </th>
                <th onClick={() => sortData('service')} className="sortable">
                  Service {getSortIcon('service')}
                </th>
                <th>Statut</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedAppointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.patientName}</td>
                  <td>{appointment.phoneNumber}</td>
                  <td>{appointment.service}</td>
                  <td>
                    <span className={`status ${appointment.status.toLowerCase()}`}>
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;


