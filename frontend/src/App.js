import React, { useState } from 'react'
import EnrollForm from './EnrollForm'
import CapturesList from './CapturesList'
import './styles.css'
import IdentifyPanel from './IdentifyPanel'

function App() {
  const [tab, setTab] = useState('identify')

  return (
    <div className="app-root">
      <header className="app-header">
        <h1>Human Identification PoC</h1>
        <nav>
          <button onClick={() => setTab('identify')} className={tab === 'identify' ? 'active' : ''}>Identify</button>
          <button onClick={() => setTab('enroll')} className={tab === 'enroll' ? 'active' : ''}>Enroll</button>
          <button onClick={() => setTab('captures')} className={tab === 'captures' ? 'active' : ''}>Captures</button>
        </nav>
      </header>

      <main className="app-main">
        {tab === 'identify' && (
          <div>
            <h2>Identify (Upload an image)</h2>
            <IdentifyPanel />
            <p style={{ color: '#666' }}>You can also use the Raspberry Pi script to POST to <code>/api/identify/</code>.</p>
          </div>
        )}

        {tab === 'enroll' && (
          <div>
            <h2>Enroll Person</h2>
            <EnrollForm />
          </div>
        )}

        {tab === 'captures' && (
          <div>
            <h2>Captures</h2>
            <CapturesList />
          </div>
        )}
      </main>
    </div>
  )
}

export default App
