import { useId, useState } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const id = useId();

  const hadleChange = (e) => {
    setQuery(e.target.value.trim().toLowerCase());
    dispatch(changeFilter(e.target.value.trim().toLowerCase()));
  };

  return (
    <div className={css.wrap}>
      <input
        className={css.input}
        type="text"
        name="search"
        placeholder=""
        id={id}
        value={query}
        onChange={hadleChange}
      />
      <label className={css.label} htmlFor={id}>
        Find contacts
      </label>
    </div>
  );
}
