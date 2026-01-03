import { useEffect, useState } from "react";
import API from "../services/api.js";
import ContactForm from "../components/ContactForm.jsx";
import ContactList from "../components/ContactList.jsx";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const res = await API.get("/contacts");
    setContacts(res.data);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <div style={{ padding: "20px" }}>
        <h2>Contact Manager</h2>
        <ContactForm onAdd={fetchContacts} />
        <ContactList contacts={contacts} onChange={fetchContacts} />
      </div>
    </div>
  );
}

export default App;
