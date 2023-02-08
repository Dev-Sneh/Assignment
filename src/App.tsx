import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Welcome from "./Components/Welcome";

const App: React.FC = () => {
  return (
    <div  >
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<Form />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
