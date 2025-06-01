import React, { useEffect, useState } from 'react';
import '../assets/news_letter.css';

const TYPES = ['Actualités', 'En bref', 'Événements'];

export default function NewsLetter() {
  const [newsletters, setNewsletters] = useState([]);
  const [filteredType, setFilteredType] = useState('Tous');
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=15')
      .then(res => {
        if (!res.ok) {
          throw new Error('Erreur lors de la récupération des newsletters');
        }
        return res;
      } )
      .then(res => res.json())
      .then(data => {
        const newslettersWithExtras = data.map(item => ({
          id: item.id,
          title: item.title,
          date: new Date(Date.now() - item.id * 86400000).toLocaleDateString(),
          author: `Auteur ${item.userId}`,
          type: TYPES[Math.floor(Math.random() * TYPES.length)]
        }));
        setNewsletters(newslettersWithExtras);
        setLoading(false);
      });
  }, []);

  const handleSendNotification = () => {
    const message = "Simulation de notification.";
    setNotification(message);
    console.log(message);
    setTimeout(() => setNotification(''), 3000);
  };

  const filteredNewsletters = filteredType === 'Tous'
    ? newsletters
    : newsletters.filter(nl => nl.type === filteredType);

  if (loading) return <p className="loading">Chargement...</p>;

  return (
    <div className="newsletter-container">
      <div className="filter-notif">
        <label>Filtrer par type : </label>
        <select
          onChange={e => setFilteredType(e.target.value)}
          className="filter-select"
          value={filteredType}
        >
          <option value="Tous">Tous</option>
          {TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        <button
          className="notif-button"
          onClick={handleSendNotification}
        >
          Envoyer une notification
        </button>
      </div>

      {notification && <div className="notification">{notification}</div>}

      <table className="newsletter-table">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Date</th>
            <th>Auteur</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {filteredNewsletters.map(nl => (
            <tr key={nl.id}>
              <td>{nl.title}</td>
              <td>{nl.date}</td>
              <td>{nl.author}</td>
              <td className="type-cell">{nl.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
