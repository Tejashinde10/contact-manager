import API from "../services/api";

function ContactItem({ contact, onChange }) {
  const handleDelete = async () => {
    await API.delete(`/contacts/${contact._id}`);
    onChange();
  };

  const handleUpdate = async () => {
    const phone = prompt("Enter new phone")?.trim();
    if (!phone) return;

    await API.put(`/contacts/${contact._id}`, { phone });
    onChange();
  };

  return (
    <div className="contact-card">
      <div
        style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
      >
        <p>
          <b>{contact.name}</b>
        </p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        {contact.notes && (
          <p>
            <i>{contact.notes}</i>
          </p>
        )}

        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ContactItem;
