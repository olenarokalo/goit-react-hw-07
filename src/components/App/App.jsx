import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import {
  selectErrorContacts,
  selectItemsContacts,
  selectLoadingContacts,
} from "../../redux/contactsSlice";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectItemsContacts);
  const loading = useSelector(selectLoadingContacts);
  const error = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error message={error} />}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}

export default App;
