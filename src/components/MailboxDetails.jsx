import { useNavigate, useParams } from 'react-router-dom'
const MailboxDetails = ({ mailboxes }) => {
  const { mailboxId } = useParams()
  const navigate = useNavigate()
  const oneBox = mailboxes.find(
    (mail) => mail._id === mailboxId || mail._id === Number(mailboxId)
  )
  if (!oneBox) {
    return <p>MailBox not found!</p>
  }
  return (
    <>
      <h4>Details</h4>
      <dl>
        <dt>Boxholder: {oneBox.name} </dt>
        <dt>Box size: {oneBox.size}</dt>
      </dl>
    </>
  )
}

export default MailboxDetails
