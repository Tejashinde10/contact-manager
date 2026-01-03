import ContactItem from "./ContactItem";

function ContactList({ contacts, onChange }) {
  return (
    <div>
      {contacts.map((contact) => (
        <ContactItem key={contact._id} contact={contact} onChange={onChange} />
      ))}
    </div>
  );
}

export default ContactList;
