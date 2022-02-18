import { useState, useEffect } from "react";
import "./App.css";
// import { nanoid } from "nanoid";
import Section from "./Components/Section/Section";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";

const App = () => {
  // const [contacts, setContacts] = useState(
  //   () => JSON.parse(localStorage.getItem("contact")) || []
  // );
  // useEffect(() => {
  //   localStorage.setItem("contact", JSON.stringify(contacts));
  // }, [contacts]);

  // const heandlerInputChange = (event) => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <>
          <Filter />
          <ContactList />
        </>
      </Section>
    </>
  );
};

export default App;
