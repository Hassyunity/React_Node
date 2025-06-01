import React from 'react';

export default function ComingSoon({ title = "Page en construction" }) {
  // need to move later
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      color: '#555',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      boxSizing: 'border-box',
    },
    title: {
      fontSize: '2rem',
      marginBottom: '1rem',
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#888',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚧 {title}</h1>
      <p style={styles.subtitle}>Cette page est en cours de construction .</p>
    </div>
  );
}
