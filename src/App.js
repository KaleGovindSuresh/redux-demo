import axios from "axios"
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUsers } from "./app/slices/UserSlice";
import CounterDemo from './counter-demo/CounterDemo';
import WithoutRedux from './without-redux/WithoutRedux';

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get("https://reqres.in/api/users")
      .then(response => {
        dispatch(addUsers(response.data.data))
      })
  }, [])
  return (
    <>
      <h2>App Component</h2>
      {/* <WithoutRedux /> */}
      <CounterDemo />
    </>
  );
}

export default App;
