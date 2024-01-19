import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Createteacher from "./pages/Teacher/Createteacher";
import Createstudent from "./pages/Students/Createstudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route
          path="/teacher/create"
          element={<Createteacher></Createteacher>}
        ></Route>
        <Route
          path="/student/create"
          element={<Createstudent></Createstudent>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
