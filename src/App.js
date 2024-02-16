import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeeList from "./components/EmployeeList.js";
import AddEmployee from "./components/AddEmployee.js";
import EditEmployee from "./components/EditEmployee.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmployeeList/>}/>
        <Route path="add" element={<AddEmployee/>}/>
        <Route path="edit/:id" element={<EditEmployee/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;