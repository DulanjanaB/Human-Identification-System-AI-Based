import React, { useState } from 'react'

export default function IdentifyPanel() {
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)
  const [result, setResult] = useState(null)

  const onChange = (e) => {
    setFile(e.target.files[0])
    setResult(null)
    setStatus(null)
  }

  const upload = async () => {
    if (!file) {
      setStatus({ type: 'error', text: 'Select an image first.' })
      return
    }
    setStatus({ type: 'info', text: 'Uploading...' })
    try {
      const form = new FormData()
      form.append('image', file)
      const res = await fetch('/api/identify/', { method: 'POST', body: form })
      const data = await res.json()
      if (!res.ok) {
        setStatus({ type: 'error', text: JSON.stringify(data) })
        return
      }
      setResult(data)
      setStatus({ type: 'success', text: 'Identified (or processed)  see results below.' })
    } catch (err) {
      setStatus({ type: 'error', text: String(err) })
    }
  }

  return (
    <div className="identify-panel">
      <input type="file" accept="image/*" onChange={onChange} />
      <div style={{ marginTop: 8 }}>
        <button onClick={upload}>Upload & Identify</button>
      </div>
      {status && <div className={`status ${status.type}`} style={{ marginTop: 8 }}>{status.text}</div>}

      {result && (
        <div className="identify-result" style={{ marginTop: 12 }}>
          <div><strong>ID:</strong> {result.id}</div>
          <div style={{ marginTop: 8 }}>
            {result.image_url ? (
              <img src={result.image_url} alt="capture" style={{ maxWidth: 320, borderRadius: 6 }} />
            ) : null}
          </div>
          <div style={{ marginTop: 8 }}>
            <strong>Identified:</strong> {String(result.identified)}
          </div>
          <div style={{ marginTop: 8 }}>
            <strong>Candidates:</strong>
            {result.candidates && result.candidates.length ? (
              <ul>
                {result.candidates.map((c, i) => (
                  <li key={i}>{c.name}  distance: {c.distance?.toFixed?.(3) ?? c.distance}</li>
                ))}
              </ul>
            ) : (<div>No candidates</div>)}
          </div>
        </div>
      )}
    </div>
  )
}
