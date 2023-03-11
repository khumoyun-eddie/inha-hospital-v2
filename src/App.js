import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./routes/Main";
import Navigation from "./routes/Navigation";

function App() {
  return (
    <div className='container-xl mx-auto mt-4 bg-white'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
