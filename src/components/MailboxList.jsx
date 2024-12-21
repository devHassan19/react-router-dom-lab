import { Link } from 'react-router-dom'
const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul>
        {mailboxes.map((currentMailboxes, index) => (
          <li key={currentMailboxes.name}>
            <Link to={`/mailboxes/${currentMailboxes._id}`}>
              MailBox {index + 1}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MailboxList
