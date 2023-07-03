import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/pages/Home";
import View from "./component/student/View";
import Edit  from "./component/student/Edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>          
          <Route exact path="/" Component={Home} />          
          <Route exact path="/view" Component={View} />
          <Route exact path="/edit" Component={Edit} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
