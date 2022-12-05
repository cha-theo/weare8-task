import { Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import Header from "./components/Header";
import Users from "./components/Users";
import './App.scss';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "./store/features/users/usersSlice";
import store from "./store/store";

function App() {

  const dispatch = useDispatch();

  const fetchedData = useSelector((state) => state);

  let users = fetchedData.users.data.data


  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="App">
    <Header />
      <Routes>
        <Route path="/" element={<Users usersData={users} />} />
        <Route path="/add" element={<AddUser usersData={users}/>} />
        <Route path="*" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
