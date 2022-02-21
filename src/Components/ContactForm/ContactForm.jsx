import s from "./ContactForm.module.css";
import { writeContacts } from "../../redux/contacts/contactsActions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const stateObj = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const [form, setForm] = useState(stateObj);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.transactions.contacts);

  const heandlerInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    //   if (name === "name") {
    //     dispatch(addName(value));
    //   }
    // if (name === "number") {
    //   dispatch(addNumber(value));
    // }
  };

  const onContactIncludes = (form) => {
    for (const obj of contacts) {
      if (obj.name.includes(form.name)) {
        return alert(`${form.name} is olredy in contact`);
      }
    }
    dispatch(writeContacts(form));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onContactIncludes(form);
    resetForm();

    // dispatch(writeContacts(contacts));
    // dispatch(clear());
  };

  const resetForm = () => {
    setForm(stateObj);
  };
  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.label}>
        <span className={s.title}>Name</span>
        <input
          value={form.name}
          onChange={heandlerInputChange}
          // onChange={(e) => {
          //   dispatch(addName(e.target.value));
          // }}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span className={s.title}>Number</span>
        <input
          value={form.number}
          onChange={heandlerInputChange}
          // onChange={(e) => {
          //   dispatch(addNumber(e.target.value));
          // }}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </label>
    </form>
  );
};

export default ContactForm;
