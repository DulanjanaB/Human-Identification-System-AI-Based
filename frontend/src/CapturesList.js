import React, { useEffect, useState } from 'react'

export default function CapturesList() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/captures/')
      const data = await res.json()
      setItems(data)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  if (loading) return <div>Loading...</div>
  if (!items.length) return <div>No captures yet.</div>

  return (
    <div className="captures-grid">
      {items.map(it => (
        <div key={it.id} className="capture-card">
          {it.image ? (
            <img src={it.image} alt={`capture-${it.id}`} />
          ) : it.image_url ? (
            <img src={it.image_url} alt={`capture-${it.id}`} />
          ) : (
            <div className="no-image">No image</div>
          )}
          <div className="meta">
            <div><strong>ID:</strong> {it.id}</div>
            <div><strong>Identified:</strong> {String(it.identified)}</div>
            <div className="candidates">{it.candidates && it.candidates.length ? (
              <details>
                <summary>{it.candidates.length} candidate(s)</summary>
                <ul>
                  {it.candidates.map((c, idx) => (
                    <li key={idx}>{c.name} ({c.distance?.toFixed?.(3) ?? c.distance})</li>
                  ))}
                </ul>
              </details>
            ) : (<span>No candidates</span>)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
