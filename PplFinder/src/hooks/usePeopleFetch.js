import { useState, useEffect } from "react";
import axios from "axios";

export const usePeopleFetch = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers(country_list, pageNo = 1, isCountryUpdate) {
    setIsLoading(true);
    const response = await axios.get(`https://randomuser.me/api/?results=25&page=${pageNo}&nat=${country_list}&seed=abcd`);
    setIsLoading(false);

    if (isCountryUpdate) {
      setUsers(response.data.results);
    } else {
      setUsers(prevUsers => {
        return [...new Set([...prevUsers, ...response.data.results])]
      })
    }



  }

  return { users, isLoading, fetchUsers };
};
