//backup fetch
import axios from "axios";

export const getUsers = async () => {
    const res = await axios("https://reqres.in/api/users");
    const data = await res.data;

  
    return data;
  };