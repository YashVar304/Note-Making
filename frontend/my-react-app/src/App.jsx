// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Heading from "./Components/Heading";
import AddNotes from "./Pages/AddNotes";
import DeleteNotes from "./Pages/DeleteNotes";
import EditNotes from "./Pages/EditNotes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Heading />} />
      <Route path="/notes/create" element={<AddNotes />} />
      <Route path="/notes/delete/:id" element={<DeleteNotes />} />
      <Route path="/notes/edit/:id" element={<EditNotes />} />
    </Routes>
  );
};

export default App;
