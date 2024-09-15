import { FaUserCircle } from "react-icons/fa";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(deleteContact(id));

  return (
    <li className={css.item}>
      <ul>
        <li className={css.itemContact}>
          <FaUserCircle />
          <p>{name}</p>
        </li>
        <li className={css.itemContact}>
          <MdOutlinePhoneInTalk />
          <p>{number}</p>
        </li>
      </ul>
      <button type="button" onClick={handleClick}>
        Delete
      </button>
    </li>
  );
}
