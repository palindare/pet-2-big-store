import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/basket" element={<><p>top</p></>}/>
  </Routes>
    </>
  );
}

export default App;
