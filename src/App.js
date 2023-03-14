import { Route, Routes } from "react-router-dom";
import "./App.css";
import Organs from "./routes/Organs";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <div className='mx-auto mt-4 bg-white container-xl'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route path="organs/*" element={<Organs/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
