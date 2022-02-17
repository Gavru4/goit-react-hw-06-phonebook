import { useState } from "react";
import PropTypes from "prop-types";
import s from "./ContactForm.module.css";
import {
  addName,
  addNumber,
  writeContacts,
} from "../../redux/contacts/contactsActions";
import { contacts } from "../../redux/filter/filterAction";
import { connect } from "react-redux";
const stateObj = {
  name: "",
  number: "",
};
const ContactForm = ({
  onContactSubmit,
  addName,
  addNumber,
  state,
  writeContacts,
}) => {
  // const [state, setState] = useState(stateObj);

  const heandlerInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      addName(value);
    }
    if (name === "number") {
      addNumber(value);
    }
    // console.log(name);
    // setState({ ...state, [name]: value });
  };
  console.log(state);
  const onFormSubmit = (e) => {
    e.preventDefault();
    // onContactSubmit(() => {
    //   contacts(state);
    // });
    writeContacts(state);
    resetForm();
  };

  const resetForm = () => {
    writeContacts(stateObj);
  };
  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.label}>
        <span className={s.title}>Name</span>
        <input
          value={state.name}
          onChange={heandlerInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span className={s.title}>Number</span>
        <input
          value={state.number}
          onChange={heandlerInputChange}
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

const mapStateToProps = (state) => {
  return {
    state: state.input,
  };
};
const mapDispatchToProps = {
  addNumber, //addNumber: addNumber
  addName,
  writeContacts, //addName: addName
};
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onContactSubmit: PropTypes.func.isRequired,
};
