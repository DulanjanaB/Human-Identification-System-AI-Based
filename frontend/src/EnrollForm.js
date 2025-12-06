import React, { useState } from 'react'

export default function EnrollForm() {
  const [name, setName] = useState('')
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    if (!name || !file) {
      setStatus({ type: 'error', text: 'Name and image are required.' })
      return
    }
    setStatus({ type: 'info', text: 'Uploading...' })
    try {
      const form = new FormData()
      form.append('name', name)
      form.append('image', file)
      const res = await fetch('/api/persons/enroll/', { method: 'POST', body: form })
      const data = await res.json()
      if (res.ok) {
        setStatus({ type: 'success', text: `Enrolled: ${data.name} (id=${data.id})` })
        setName('')
        setFile(null)
        document.getElementById('enroll-file').value = null
      } else {
        setStatus({ type: 'error', text: JSON.stringify(data) })
      }
    } catch (err) {
      setStatus({ type: 'error', text: String(err) })
    }
  }

  return (
    <form onSubmit={submit} className="enroll-form">
      <label>
        Name
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Image
        <input id="enroll-file" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      </label>
      <button type="submit">Enroll</button>
      {status && (
        <div className={`status ${status.type}`}>{status.text}</div>
      )}
    </form>
  )
}
