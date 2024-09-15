import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectResultsFilters } from "../../redux/filtersSlice";

export default function ContactList() {
  const filter = useSelector(selectResultsFilters);

  return (
    <ul className={css.list}>
      {filter.map((data) => (
        <Contact key={data.id} data={data} />
      ))}
    </ul>
  );
}
