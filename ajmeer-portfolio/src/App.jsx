import React from 'react';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{
        padding: '3rem 2rem',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        color: '#ffffff'
      }}>
        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', fontWeight: '800' }}>
          Ajmeer Portfolio
        </h1>
        <p style={{ fontSize: '1.2rem', margin: 0, opacity: 0.9 }}>
          Built with React &amp; Vite
        </p>
      </header>

      <main style={{ flex: 1, maxWidth: '1000px', margin: '0 auto', width: '100%', padding: '2rem' }}>
        {/* Welcome Card */}
        <section style={{
          background: '#1e293b',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          marginBottom: '2rem'
        }}>
          <h2 style={{ marginTop: 0, color: '#60a5fa' }}>Welcome to Your Application</h2>
          <p style={{ color: '#cbd5e1', lineHeight: '1.6' }}>
            This application is running live with hot-module reloading and full React component support.
          </p>
        </section>
      </main>
    </div>
  );
}
