export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fdfbf7',
        minHeight: '100vh',
        color: '#1a1f36',
        fontFamily: 'sans-serif',
        padding: '2rem',
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <img
          src="/nora-logo.png"
          alt="Nora Knows Logo"
          style={{ maxWidth: '200px', marginBottom: '1rem' }}
        />
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
          Everyone's guessing — <strong>Nora knows.</strong>
        </h1>

        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Nora is your AI-powered deal assistant. Ask her anything — tech, home goods, gifts, and more. Smart results, no guesswork.
        </p>

        <section style={{ backgroundColor: '#ffffff', padding: '2rem', borderRadius: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What to Expect</h2>
          <ul style={{ textAlign: 'left', fontSize: '1rem', lineHeight: '1.6' }}>
            <li>⚡ Fast answers to your deal questions</li>
            <li>🛍️ Daily updated feeds for Tech, Home, and more</li>
            <li>🔎 Product reviews & price history insights</li>
            <li>📧 Send deals directly to your email</li>
          </ul>
        </section>

        <div style={{ marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '0.5rem' }}>Stay in the Loop</h3>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #ccc',
              width: '70%',
              maxWidth: '300px',
            }}
          />
          <button
            style={{
              marginLeft: '0.5rem',
              padding: '0.75rem 1rem',
              backgroundColor: '#1a1f36',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Notify Me
          </button>
        </div>
      </div>
    </main>
  );
}
