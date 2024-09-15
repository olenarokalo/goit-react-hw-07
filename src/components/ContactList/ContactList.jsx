import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const filter = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filter.map((data) => (
        <Contact key={data.id} data={data} />
      ))}
    </ul>
  );
}
