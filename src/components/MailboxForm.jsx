import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState([])
  const navigate = useNavigate()
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addBox(formData)
    setFormData('')
    navigate('/mailboxes')
  }

  return (
    <main>
      <h2>New Mailboxes</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter a Boxholder:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.boxholder}
          onChange={handleChange}
        />
        <label htmlFor="size">Select a Box Size:</label>
        <select
          id="size"
          name="size"
          value={formData.size}
          onChange={handleChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default MailboxForm
