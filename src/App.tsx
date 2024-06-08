import React from "react";

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import AddNewWorker from "./pages/AddNewWorker";
// import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/user-form" element={<UserForm />} /> */}
        <Route path="/user-list" element={<UserList />} />
        <Route path="/user-list/:userID" element={<UserDetails />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/add-new-worker" element={<AddNewWorker />} />
      </Routes>
    </div>
  );
}

export default App;
