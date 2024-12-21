import { useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import MailboxForm from './components/MailboxForm'
import MailboxList from './components/MailboxList'
import MailboxDetails from './components/MailboxDetails'
const App = () => {
  const [mailboxes, setMailboxes] = useState([])
  const addBox = (newBox) => {
    newBox._id = Math.floor(Math.random() * 100000)
    setMailboxes([...mailboxes, newBox])
  }
  return (
    <main>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <h1>Post Office</h1>
              </main>
            }
          />
          <Route
            path="/mailboxes"
            element={<MailboxList mailboxes={mailboxes} />}
          />
          <Route
            path="/new-mailbox"
            element={<MailboxForm addBox={addBox} />}
          />

          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailboxes={mailboxes} />}
          />
          <Route path="*" element={<h3>Page not found</h3>} />
        </Routes>
      </div>
    </main>
  )
}

export default App
