import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./UserList";
const App = () => {
  const [listOfUSer, setListOfUSer] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((data) => {
        setListOfUSer(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="don">
      {listOfUSer.map((x) => (
        <UserList key={x.id} {...x}></UserList>
      ))}
    </div>
  );
};
export default App;
