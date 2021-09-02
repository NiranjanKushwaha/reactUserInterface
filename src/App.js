import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage.jsx";
import Users from "./Components/Users.jsx";
import axios from "axios";

export const App = () => {
  let [data, setData] = useState([]);
  const url =
    "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";
  useEffect(() => {
    const getData = async () => {
      const res = await axios(url);
      setData(res.data);
      console.log(res.data);
    };
    getData();
  }, []);
  return (
    <Switch>
      <Route path="/" component={() => <Users data={data} />} exact />
      <Route
        path="/users/:id"
        component={() => <DetailsPage data={data} />}
        exact
      />
    </Switch>
  );
};

export default App;
